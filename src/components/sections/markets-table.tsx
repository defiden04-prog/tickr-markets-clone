"use client";

import Image from 'next/image';
import {
  Coins,
  Atom,
  Globe,
  Trophy,
  Landmark,
  Share2,
  ChevronRight,
  ChevronDown,
  ExternalLink,
} from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import type { MarketData, MarketCategory, ViewMode } from './markets-container';

interface MarketsTableProps {
  markets: MarketData[];
  viewMode: ViewMode;
}

const categoryConfig = {
  Crypto: {
    icon: Coins,
    className: 'bg-tag-crypto-bg text-tag-crypto-text',
  },
  Science: {
    icon: Atom,
    className: 'bg-tag-science-bg text-tag-science-text',
  },
  'World Events': {
    icon: Globe,
    className: 'bg-tag-world-events-bg text-tag-world-events-text',
  },
  Sports: {
    icon: Trophy,
    className: 'bg-tag-sports-bg text-tag-sports-text',
  },
  Politics: {
    icon: Landmark,
    className: 'bg-tag-politics-bg text-tag-politics-text',
  },
};

const CategoryBadge = ({ category }: { category: MarketCategory }) => {
  const { icon: Icon, className } = categoryConfig[category];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs-custom font-medium ${className}`}>
      <Icon className="w-3 h-3" />
      {category}
    </span>
  );
};

const TradeModal = ({ market }: { market: MarketData }) => {
  const [selectedOutcome, setSelectedOutcome] = useState<'yes' | 'no'>('yes');
  const [amount, setAmount] = useState('');

  return (
    <DialogContent className="font-mono max-w-md">
      <DialogHeader>
        <DialogTitle className="text-base">TRADE_MARKET</DialogTitle>
      </DialogHeader>
      <div className="space-y-4">
        <div className="flex gap-2">
          <Image src={market.image} alt={market.title} width={40} height={40} className="w-10 h-10 rounded-full" />
          <div className="flex-1">
            <p className="text-sm font-medium">{market.title}</p>
            <CategoryBadge category={market.category} />
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">SELECT_OUTCOME</p>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setSelectedOutcome('yes')}
              className={`px-4 py-3 rounded-md border-2 transition-all ${
                selectedOutcome === 'yes'
                  ? 'border-chart-1 bg-mint-green-odds'
                  : 'border-border bg-secondary hover:bg-muted'
              }`}
            >
              <div className="text-xs text-muted-foreground">YES</div>
              <div className="text-lg font-bold text-chart-1">{market.yesOdds.toFixed(2)}%</div>
            </button>
            <button
              onClick={() => setSelectedOutcome('no')}
              className={`px-4 py-3 rounded-md border-2 transition-all ${
                selectedOutcome === 'no'
                  ? 'border-chart-2 bg-pink-odds'
                  : 'border-border bg-secondary hover:bg-muted'
              }`}
            >
              <div className="text-xs text-muted-foreground">NO</div>
              <div className="text-lg font-bold text-chart-2">{market.noOdds.toFixed(2)}%</div>
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs text-muted-foreground">AMOUNT_USDC</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="w-full px-3 py-2 bg-secondary border border-border rounded-md text-sm focus:outline-none focus:border-primary"
          />
        </div>

        <div className="space-y-1 p-3 bg-secondary rounded-md">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">EST_SHARES</span>
            <span className="font-semibold">{amount ? (parseFloat(amount) / (selectedOutcome === 'yes' ? market.yesOdds : market.noOdds) * 100).toFixed(2) : '0.00'}</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">POTENTIAL_RETURN</span>
            <span className="font-semibold text-chart-1">{amount ? (parseFloat(amount) * 2).toFixed(2) : '0.00'} USDC</span>
          </div>
        </div>

        <button className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:opacity-90 transition-opacity">
          PLACE_TRADE
        </button>

        <p className="text-xs text-muted-foreground text-center">
          Connect wallet to trade on this market
        </p>
      </div>
    </DialogContent>
  );
};

const MarketRow = ({ market }: { market: MarketData }) => {
  const [expanded, setExpanded] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(`${window.location.origin}/market/${market.id}`);
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-15 gap-y-4 lg:gap-4 items-center px-3 py-3 border-b border-border last:border-b-0 hover:bg-secondary/40 transition-colors duration-200">
        <div className="col-span-1 lg:col-span-6">
          <div className="flex gap-3 items-center">
            <button 
              onClick={() => setExpanded(!expanded)}
              className="lg:hidden p-1 hover:bg-muted rounded transition-colors"
            >
              <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
            </button>
            <Image src={market.image} alt={market.title} width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
            <div className="flex-1">
              <p className="text-sm-custom font-medium text-foreground leading-[1.2]">{market.title}</p>
              <div className="flex items-center gap-2 mt-1.5">
                <CategoryBadge category={market.category} />
                <span className="text-xs-custom text-muted-foreground">{market.timeLeft}</span>
              </div>
            </div>
            <button 
              onClick={() => setExpanded(!expanded)}
              className="hidden lg:block p-1 hover:bg-muted rounded transition-colors"
            >
              <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-2 order-2 lg:order-none grid grid-cols-2 gap-1">
          <div className="flex flex-col items-center gap-0.5 rounded-sm px-2 py-1 bg-mint-green-odds">
            <span className="text-lg-custom font-semibold text-chart-1">{market.yesOdds.toFixed(2)}%</span>
            <span className={`text-xs-custom ${market.oddsTrend === 'up' && market.oddsChange24h > 0 ? 'text-chart-1' : market.oddsChange24h !== 0 ? 'text-chart-2' : 'text-muted-foreground'}`}>{market.oddsTrend === 'up' ? '+' : '-'}{market.oddsChange24h.toFixed(2)}% (24h)</span>
          </div>
          <div className="flex flex-col items-center gap-0.5 rounded-sm px-2 py-1 bg-pink-odds">
            <span className="text-lg-custom font-semibold text-chart-2">{market.noOdds.toFixed(2)}%</span>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-1 order-3 lg:order-none text-center">
          <div className="flex flex-col items-center gap-1.5 ">
            <span className="text-sm-custom font-medium text-foreground">{market.expiresIn}</span>
            <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-chart-3" style={{ width: `${market.expiresProgress}%` }}></div>
            </div>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-1 order-4 lg:order-none text-center">
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-sm-custom font-medium text-foreground">${market.liquidity.toLocaleString()}</span>
            <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-chart-4" style={{ width: `${market.liquidityProgress}%` }}></div>
            </div>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-2 order-5 lg:order-none text-center">
          <div>
            <p className="text-lg-custom font-bold text-chart-3">{market.volume}</p>
            <div className="flex justify-between items-center text-xs-custom mt-1 text-muted-foreground px-1">
              <span className="text-chart-1">YES: {market.volumeYes}</span>
              <span className="text-chart-2">NO: {market.volumeNo}</span>
            </div>
            <div className="flex w-full h-1 rounded-full overflow-hidden mt-1 bg-chart-2">
              <div className="bg-chart-1" style={{ width: `${market.volumeYesPercent}%` }}></div>
            </div>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-1 order-1 lg:order-none flex lg:justify-center">
          <span className="flex items-center gap-1.5 bg-green-500/20 text-green-500 border border-green-500/50 text-xs-custom font-semibold px-3 py-1.5 rounded-md">
            <ChevronRight className="-rotate-45 w-2 h-2 fill-current" strokeWidth={0} />
            <ChevronRight className="rotate-[135deg] w-2 h-2 fill-current -ml-2" strokeWidth={0} />
             ACTIVE
          </span>
        </div>
        
        <div className="col-span-1 lg:col-span-2 order-6 lg:order-none flex items-center justify-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <button className="flex items-center gap-2 text-sm-custom font-semibold px-4 py-1.5 border border-border rounded-md bg-secondary hover:brightness-125 transition-all w-full justify-center lg:w-auto">
                TRADE
                <ChevronRight className="w-3 h-3" />
              </button>
            </DialogTrigger>
            <TradeModal market={market} />
          </Dialog>
          <button 
            onClick={handleShare}
            className="p-1.5 border border-border rounded-md bg-secondary hover:brightness-125 transition-all hidden lg:block"
          >
            <Share2 className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      {expanded && market.description && (
        <div className="px-3 py-4 bg-secondary/20 border-b border-border">
          <div className="flex gap-4">
            <div className="flex-1">
              <p className="text-xs text-muted-foreground mb-2">MARKET_DESCRIPTION</p>
              <p className="text-sm text-foreground">{market.description}</p>
            </div>
            <div className="flex flex-col gap-2">
              <a 
                href={`/market/${market.id}`}
                className="flex items-center gap-1 text-xs text-primary hover:underline"
              >
                VIEW_DETAILS
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const CardView = ({ markets }: { markets: MarketData[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {markets.map((market) => (
        <div key={market.id} className="border border-border rounded-lg p-4 hover:bg-secondary/40 transition-colors">
          <div className="flex gap-3 mb-3">
            <Image src={market.image} alt={market.title} width={48} height={48} className="w-12 h-12 rounded-full" />
            <div className="flex-1">
              <p className="text-sm font-medium mb-2">{market.title}</p>
              <CategoryBadge category={market.category} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="bg-mint-green-odds rounded-md p-2 text-center">
              <p className="text-xs text-muted-foreground">YES</p>
              <p className="text-lg font-bold text-chart-1">{market.yesOdds.toFixed(2)}%</p>
            </div>
            <div className="bg-pink-odds rounded-md p-2 text-center">
              <p className="text-xs text-muted-foreground">NO</p>
              <p className="text-lg font-bold text-chart-2">{market.noOdds.toFixed(2)}%</p>
            </div>
          </div>

          <div className="flex justify-between text-xs text-muted-foreground mb-3">
            <span>Volume: {market.volume}</span>
            <span>Expires: {market.expiresIn}</span>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md font-semibold hover:opacity-90 transition-opacity text-sm">
                TRADE
              </button>
            </DialogTrigger>
            <TradeModal market={market} />
          </Dialog>
        </div>
      ))}
    </div>
  );
};

const GridView = ({ markets }: { markets: MarketData[] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
      {markets.map((market) => (
        <div key={market.id} className="border border-border rounded-lg p-3 hover:bg-secondary/40 transition-colors">
          <Image src={market.image} alt={market.title} width={64} height={64} className="w-16 h-16 rounded-full mx-auto mb-2" />
          <p className="text-xs font-medium text-center mb-2 line-clamp-2">{market.title}</p>
          
          <div className="flex justify-between text-xs mb-2">
            <div className="text-center flex-1">
              <p className="text-muted-foreground">YES</p>
              <p className="font-bold text-chart-1">{market.yesOdds.toFixed(0)}%</p>
            </div>
            <div className="text-center flex-1">
              <p className="text-muted-foreground">NO</p>
              <p className="font-bold text-chart-2">{market.noOdds.toFixed(0)}%</p>
            </div>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <button className="w-full px-2 py-1.5 bg-secondary border border-border rounded-md text-xs font-semibold hover:brightness-125 transition-all">
                TRADE
              </button>
            </DialogTrigger>
            <TradeModal market={market} />
          </Dialog>
        </div>
      ))}
    </div>
  );
};

const MarketsTable = ({ markets, viewMode }: MarketsTableProps) => {
  if (viewMode === 'cards') {
    return (
      <div>
        <CardView markets={markets} />
        <div className="px-3 py-4 text-left text-muted-foreground text-xs font-mono mt-4">
          SHOWING {markets.length} MARKETS
        </div>
      </div>
    );
  }

  if (viewMode === 'grid') {
    return (
      <div>
        <GridView markets={markets} />
        <div className="px-3 py-4 text-left text-muted-foreground text-xs font-mono mt-4">
          SHOWING {markets.length} MARKETS
        </div>
      </div>
    );
  }

  return (
    <div className="border border-border rounded-lg overflow-hidden font-mono">
      <div className="bg-muted px-3 py-2 border-b border-border hidden lg:block">
        <div className="grid grid-cols-15 gap-4 items-center text-xs font-semibold text-muted-foreground uppercase">
          <div className="col-span-6">MARKET</div>
          <div className="col-span-2 text-center">ODDS</div>
          <div className="col-span-1 text-center">EXPIRES</div>
          <div className="col-span-1 text-center">LIQUIDITY</div>
          <div className="col-span-2 text-center">VOLUME</div>
          <div className="col-span-1 text-center">STATUS</div>
          <div className="col-span-2 text-center">ACTIONS</div>
        </div>
      </div>

      <div>
        {markets.map((market) => (
          <MarketRow key={market.id} market={market} />
        ))}
      </div>
      
      <div className="px-3 py-4 text-left text-muted-foreground text-xs font-mono">
        SHOWING {markets.length} MARKETS
      </div>
    </div>
  );
};

export default MarketsTable;