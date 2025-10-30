"use client";

import { useState, useEffect } from "react";
import MarketsHeader from "./markets-header";
import MarketsTable from "./markets-table";

export type MarketCategory = 'Crypto' | 'Science' | 'World Events' | 'Sports' | 'Politics';
export type ViewMode = 'table' | 'cards' | 'grid';
export type StatusFilter = 'active' | 'resolved' | 'all';
export type SortOption = 'expiring' | 'volume' | 'liquidity' | 'newest';

export interface MarketData {
  id: string;
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
  expiresTimestamp: number;
  liquidity: number;
  liquidityProgress: number;
  volume: string;
  volumeValue: number;
  volumeYes: string;
  volumeNo: string;
  volumeYesPercent: number;
  status: 'active' | 'resolved';
  description?: string;
  createdAt: number;
}

const INITIAL_MARKETS: MarketData[] = [
  {
    id: '1',
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
    expiresTimestamp: Date.now() + 7 * 60 * 60 * 1000,
    liquidity: 1000,
    liquidityProgress: 10,
    volume: '$430',
    volumeValue: 430,
    volumeYes: '$107',
    volumeNo: '$323',
    volumeYesPercent: 25,
    status: 'active',
    description: 'Will Kinetiq protocol launch with a fully diluted valuation above $2 billion?',
    createdAt: Date.now() - 28 * 24 * 60 * 60 * 1000,
  },
  {
    id: '2',
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
    expiresTimestamp: Date.now() + 31 * 60 * 60 * 1000,
    liquidity: 28000,
    liquidityProgress: 56,
    volume: '$2.8K',
    volumeValue: 2800,
    volumeYes: '$1.9K',
    volumeNo: '$923',
    volumeYesPercent: 67,
    status: 'active',
    description: 'Market cap comparison between PMX and Kled tokens by end of October 2025.',
    createdAt: Date.now() - 5 * 24 * 60 * 60 * 1000,
  },
  {
    id: '3',
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
    expiresTimestamp: Date.now() + 31 * 60 * 60 * 1000,
    liquidity: 38000,
    liquidityProgress: 76,
    volume: '$11.1K',
    volumeValue: 11100,
    volumeYes: '$5.9K',
    volumeNo: '$5.2K',
    volumeYesPercent: 53,
    status: 'active',
    description: 'Will scientific analysis reveal any signs of extraterrestrial technology in comet 3I/ATLAS?',
    createdAt: Date.now() - 1 * 24 * 60 * 60 * 1000,
  },
  {
    id: '4',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/31958a55-bbcd-436f-860f-f5169308fbf9-tickr-fi/assets/images/images_4.png',
    title: 'Will Pump.Fun airdrop in October?',
    category: 'Crypto',
    timeLeft: '3d 12h',
    yesOdds: 4.09,
    noOdds: 95.91,
    oddsChange24h: 0.9,
    oddsTrend: 'down',
    expiresIn: '1d 7h',
    expiresProgress: 65,
    expiresTimestamp: Date.now() + 31 * 60 * 60 * 1000,
    liquidity: 18000,
    liquidityProgress: 36,
    volume: '$27.3K',
    volumeValue: 27300,
    volumeYes: '$14.0K',
    volumeNo: '$13.3K',
    volumeYesPercent: 51,
    status: 'active',
    description: 'Will Pump.Fun platform execute an airdrop to users during October 2025?',
    createdAt: Date.now() - 3 * 24 * 60 * 60 * 1000,
  },
  {
    id: '5',
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
    expiresTimestamp: Date.now() + 31 * 60 * 60 * 1000,
    liquidity: 1000,
    liquidityProgress: 10,
    volume: '$1.5K',
    volumeValue: 1500,
    volumeYes: '$300',
    volumeNo: '$1.2K',
    volumeYesPercent: 20,
    status: 'active',
    description: 'Will PMX platform generate $1 million or more in cumulative fees by October 31, 2025?',
    createdAt: Date.now() - 27 * 24 * 60 * 60 * 1000,
  },
  {
    id: '6',
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
    expiresTimestamp: Date.now() + 31 * 60 * 60 * 1000,
    liquidity: 5000,
    liquidityProgress: 25,
    volume: '$4.4K',
    volumeValue: 4400,
    volumeYes: '$1.8K',
    volumeNo: '$2.6K',
    volumeYesPercent: 41,
    status: 'active',
    description: 'Prediction market on the number of Israeli military strikes on Yemen by end of October.',
    createdAt: Date.now() - 26 * 24 * 60 * 60 * 1000,
  },
  {
    id: '7',
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
    expiresTimestamp: Date.now() + 55 * 60 * 60 * 1000,
    liquidity: 38000,
    liquidityProgress: 76,
    volume: '$160',
    volumeValue: 160,
    volumeYes: '$80',
    volumeNo: '$80',
    volumeYesPercent: 50,
    status: 'active',
    description: 'League of Legends Worlds Championship match prediction: Gen.G Esports vs. KT Rolster.',
    createdAt: Date.now() - 8 * 60 * 60 * 1000,
  },
  {
    id: '8',
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
    expiresTimestamp: Date.now() + 55 * 60 * 60 * 1000,
    liquidity: 26000,
    liquidityProgress: 52,
    volume: '$80',
    volumeValue: 80,
    volumeYes: '$40',
    volumeNo: '$40',
    volumeYesPercent: 50,
    status: 'active',
    description: 'World Series Game 6: Toronto Blue Jays vs Los Angeles Dodgers.',
    createdAt: Date.now() - 9 * 60 * 60 * 1000,
  },
  {
    id: '9',
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
    expiresTimestamp: Date.now() + 103 * 60 * 60 * 1000,
    liquidity: 56000,
    liquidityProgress: 93,
    volume: '$31.5K',
    volumeValue: 31500,
    volumeYes: '$21.1K',
    volumeNo: '$10.4K',
    volumeYesPercent: 67,
    status: 'active',
    description: 'Final prediction for the 2025 MLB World Series championship winner.',
    createdAt: Date.now() - 5 * 24 * 60 * 60 * 1000,
  },
  {
    id: '10',
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
    expiresTimestamp: Date.now() + 152 * 60 * 60 * 1000,
    liquidity: 23000,
    liquidityProgress: 46,
    volume: '$8.6K',
    volumeValue: 8600,
    volumeYes: '$5.9K',
    volumeNo: '$2.7K',
    volumeYesPercent: 68,
    status: 'active',
    description: 'Will Mamdani win the New York City mayoral election?',
    createdAt: Date.now() - 42 * 24 * 60 * 60 * 1000,
  },
  {
    id: '11',
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
    expiresTimestamp: Date.now() + 175 * 60 * 60 * 1000,
    liquidity: 18000,
    liquidityProgress: 36,
    volume: 'N/A',
    volumeValue: 0,
    volumeYes: '$0',
    volumeNo: '$0',
    volumeYesPercent: 50,
    status: 'active',
    description: 'UEFA Champions League Group Stage match prediction: PSG vs Bayern Munich.',
    createdAt: Date.now() - 43 * 24 * 60 * 60 * 1000,
  },
];

const MarketsContainer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('table');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('active');
  const [sortOption, setSortOption] = useState<SortOption>('expiring');
  const [selectedCategories, setSelectedCategories] = useState<MarketCategory[]>([]);

  // Listen for search events from header
  useEffect(() => {
    const handleSearchEvent = (e: CustomEvent) => {
      setSearchQuery(e.detail);
    };

    window.addEventListener('market-search', handleSearchEvent as EventListener);
    return () => window.removeEventListener('market-search', handleSearchEvent as EventListener);
  }, []);

  // Filter and sort markets
  const filteredMarkets = INITIAL_MARKETS
    .filter(market => {
      // Search filter
      if (searchQuery && !market.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      
      // Status filter
      if (statusFilter !== 'all' && market.status !== statusFilter) {
        return false;
      }
      
      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(market.category)) {
        return false;
      }
      
      return true;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case 'expiring':
          return a.expiresTimestamp - b.expiresTimestamp;
        case 'volume':
          return b.volumeValue - a.volumeValue;
        case 'liquidity':
          return b.liquidity - a.liquidity;
        case 'newest':
          return b.createdAt - a.createdAt;
        default:
          return 0;
      }
    });

  return (
    <>
      <MarketsHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        sortOption={sortOption}
        onSortChange={setSortOption}
        selectedCategories={selectedCategories}
        onCategoriesChange={setSelectedCategories}
      />
      <MarketsTable
        markets={filteredMarkets}
        viewMode={viewMode}
      />
    </>
  );
};

export default MarketsContainer;