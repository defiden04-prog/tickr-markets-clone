import Image from 'next/image';
import {
  Coins,
  Atom,
  Globe,
  Trophy,
  Landmark,
  Share2,
  ChevronRight,
} from 'lucide-react';
import { ComponentProps } from 'react';

type MarketCategory = 'Crypto' | 'Science' | 'World Events' | 'Sports' | 'Politics';

interface MarketData {
  image: string;
  title: string;
  category: MarketCategory;
  timeLeft: string;
  yesOdds: number;
  noOdds: number;
  oddsChange24h: number;
  oddsTrend: 'up' | 'down';
  expiresIn: string;
  expiresProgress: number;
  liquidity: number;
  liquidityProgress: number;
  volume: string;
  volumeYes: string;
  volumeNo: string;
  volumeYesPercent: number;
}

const marketData: MarketData[] = [
  {
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/31958a55-bbcd-436f-860f-f5169308fbf9-tickr-fi/assets/images/images_1.png',
    title: 'Will Kinetiq Launch Above $2B FDV',
    category: 'Crypto',
    timeLeft: '28d 1h',
    yesOdds: 18.34,
    noOdds: 81.66,
    oddsChange24h: 0.6,
    oddsTrend: 'down',
    expiresIn: '7h',
    expiresProgress: 90,
    liquidity: 1000,
    liquidityProgress: 10,
    volume: '$430',
    volumeYes: '$107',
    volumeNo: '$323',
    volumeYesPercent: 25,
  },
  {
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/31958a55-bbcd-436f-860f-f5169308fbf9-tickr-fi/assets/images/images_2.png',
    title: 'Will PMX or Kled have a higher market cap by Oct 31, 2025',
    category: 'Crypto',
    timeLeft: '5d 12h',
    yesOdds: 7.08,
    noOdds: 95.18,
    oddsChange24h: 5.18,
    oddsTrend: 'up',
    expiresIn: '1d 7h',
    expiresProgress: 65,
    liquidity: 28000,
    liquidityProgress: 56,
    volume: '$2.8K',
    volumeYes: '$1.9K',
    volumeNo: '$923',
    volumeYesPercent: 67,
  },
  {
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/31958a55-bbcd-436f-860f-f5169308fbf9-tickr-fi/assets/images/images_3.png',
    title: 'Will comet 3I/ATLAS show evidence of alien technology?',
    category: 'Science',
    timeLeft: '1d 7h',
    yesOdds: 4.78,
    noOdds: 95.18,
    oddsChange24h: 0.18,
    oddsTrend: 'down',
    expiresIn: '1d 7h',
    expiresProgress: 65,
    liquidity: 38000,
    liquidityProgress: 76,
    volume: '$11.1K',
    volumeYes: '$5.9K',
    volumeNo: '$5.2K',
    volumeYesPercent: 53,
  },
  {
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/31958a55-bbcd-436f-860f-f5169308fbf9-tickr-fi/assets/images/images_4.png',
    title: 'Will Pump.Fun airdrop in October?',
    category: 'Crypto',
    timeLeft: '3d 12h',
    yesOdds: 4.09,
    noOdds: 95.8_1,
    oddsChange24h: 0.9,
    oddsTrend: 'down',
    expiresIn: '1d 7h',
    expiresProgress: 65,
    liquidity: 18000,
    liquidityProgress: 36,
    volume: '$27.3K',
    volumeYes: '$14.0K',
    volumeNo: '$13.3K',
    volumeYesPercent: 51,
  },
  {
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/31958a55-bbcd-436f-860f-f5169308fbf9-tickr-fi/assets/images/images_5.png',
    title: 'Will cumulative PMX platform fees reach or exceed $1MM by Oct 31, 2025',
    category: 'Crypto',
    timeLeft: '27d 3h',
    yesOdds: 6.65,
    noOdds: 93.33,
    oddsChange24h: 0.4,
    oddsTrend: 'down',
    expiresIn: '1d 7h',
    expiresProgress: 65,
    liquidity: 1000,
    liquidityProgress: 10,
    volume: '$1.5K',
    volumeYes: '$300',
    volumeNo: '$1.2K',
    volumeYesPercent: 20,
  },
  {
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/31958a55-bbcd-436f-860f-f5169308fbf9-tickr-fi/assets/images/images_6.png',
    title: 'How many Israeli strikes on Yemen by October 31st?',
    category: 'World Events',
    timeLeft: '26d 4h',
    yesOdds: 9.89,
    noOdds: 90.09,
    oddsChange24h: 0.9,
    oddsTrend: 'down',
    expiresIn: '1d 7h',
    expiresProgress: 65,
    liquidity: 5000,
    liquidityProgress: 25,
    volume: '$4.4K',
    volumeYes: '$1.8K',
    volumeNo: '$2.6K',
    volumeYesPercent: 41,
  },
  {
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/31958a55-bbcd-436f-860f-f5169308fbf9-tickr-fi/assets/images/images_7.png',
    title: 'LoL Worlds: Gen.G Esports vs. KT Rolster?',
    category: 'Sports',
    timeLeft: '8h',
    yesOdds: 90.88,
    noOdds: 11.0,
    oddsChange24h: 2.4,
    oddsTrend: 'up',
    expiresIn: '2d 7h',
    expiresProgress: 50,
    liquidity: 38000,
    liquidityProgress: 76,
    volume: '$160',
    volumeYes: '$80',
    volumeNo: '$80',
    volumeYesPercent: 50,
  },
  {
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/31958a55-bbcd-436f-860f-f5169308fbf9-tickr-fi/assets/images/images_8.png',
    title: 'MLB: Blue Jays vs Dodgers 10/31 Game 6',
    category: 'Sports',
    timeLeft: '9h',
    yesOdds: 50.0,
    noOdds: 42.7,
    oddsChange24h: 0,
    oddsTrend: 'up',
    expiresIn: '2d 7h',
    expiresProgress: 50,
    liquidity: 26000,
    liquidityProgress: 52,
    volume: '$80',
    volumeYes: '$40',
    volumeNo: '$40',
    volumeYesPercent: 50,
  },
  {
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/31958a55-bbcd-436f-860f-f5169308fbf9-tickr-fi/assets/images/images_9.png',
    title: 'Who Will Win the MLB World Series Champion 2025?',
    category: 'Sports',
    timeLeft: '5d 14h',
    yesOdds: 39.19,
    noOdds: 62.14,
    oddsChange24h: 2.14,
    oddsTrend: 'up',
    expiresIn: '4d 7h',
    expiresProgress: 20,
    liquidity: 56000,
    liquidityProgress: 93,
    volume: '$31.5K',
    volumeYes: '$21.1K',
    volumeNo: '$10.4K',
    volumeYesPercent: 67,
  },
  {
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/31958a55-bbcd-436f-860f-f5169308fbf9-tickr-fi/assets/images/images_10.png',
    title: 'Mamdani to win Mayor of NYC?',
    category: 'Politics',
    timeLeft: '42d 2h',
    yesOdds: 9.55,
    noOdds: 12.45,
    oddsChange24h: 2.0,
    oddsTrend: 'down',
    expiresIn: '6d 8h',
    expiresProgress: 10,
    liquidity: 23000,
    liquidityProgress: 46,
    volume: '$8.6K',
    volumeYes: '$5.9K',
    volumeNo: '$2.7K',
    volumeYesPercent: 68,
  },
  {
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/31958a55-bbcd-436f-860f-f5169308fbf9-tickr-fi/assets/images/images_11.png',
    title: 'UCL - Paris Saint-Germain vs Bayern Munich - Group Stage - No...',
    category: 'Sports',
    timeLeft: '43d 1h',
    yesOdds: 57.0,
    noOdds: 43.0,
    oddsChange24h: 0,
    oddsTrend: 'up',
    expiresIn: '7d 7h',
    expiresProgress: 0,
    liquidity: 18000,
    liquidityProgress: 36,
    volume: 'N/A',
    volumeYes: '$0',
    volumeNo: '$0',
    volumeYesPercent: 50,
  },
];

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

const MarketsTable = () => {
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
        {marketData.map((market, index) => (
          <div key={index} className="grid grid-cols-1 lg:grid-cols-15 gap-y-4 lg:gap-4 items-center px-3 py-3 border-b border-border last:border-b-0 hover:bg-secondary/40 transition-colors duration-200 cursor-pointer">
            <div className="col-span-1 lg:col-span-6">
              <div className="flex gap-3 items-center">
                <Image src={market.image} alt={market.title} width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                <div className="flex-1">
                  <p className="text-sm-custom font-medium text-foreground leading-[1.2]">{market.title}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <CategoryBadge category={market.category} />
                    <span className="text-xs-custom text-muted-foreground">{market.timeLeft}</span>
                  </div>
                </div>
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
              <button className="flex items-center gap-2 text-sm-custom font-semibold px-4 py-1.5 border border-border rounded-md bg-secondary hover:brightness-125 transition-all w-full justify-center lg:w-auto">
                TRADE
                <ChevronRight className="w-3 h-3" />
              </button>
              <button className="p-1.5 border border-border rounded-md bg-secondary hover:brightness-125 transition-all hidden lg:block">
                <Share2 className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="px-3 py-4 text-left text-muted-foreground text-xs font-mono">
        SHOWING {marketData.length} MARKETS
      </div>
    </div>
  );
};

export default MarketsTable;