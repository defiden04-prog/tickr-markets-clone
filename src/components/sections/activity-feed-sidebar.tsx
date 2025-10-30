"use client";

import React from 'react';
import Image from 'next/image';
import { ExternalLink, X } from 'lucide-react';

type ActivityItemData = {
  user: string;
  avatar: string;
  action: 'sold' | 'bought';
  primaryAmount: string;
  primaryToken: string;
  secondaryAmount: string;
  secondaryToken: string;
  marketTitle: string;
  time: string;
};

const activityData: ActivityItemData[] = [
  {
    user: 'CapSu',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/31958a55-bbcd-436f-860f-f5169308fbf9-tickr-fi/assets/images/images_2.png',
    action: 'sold',
    primaryAmount: '15.4K',
    primaryToken: 'BlueJays',
    secondaryAmount: '9.34',
    secondaryToken: 'USDC',
    marketTitle: 'MLB: Blue Jays vs Dodgers 10/31 Game 6',
    time: '48m',
  },
  {
    user: 'CapSu',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/31958a55-bbcd-436f-860f-f5169308fbf9-tickr-fi/assets/images/images_2.png',
    action: 'sold',
    primaryAmount: '27.0K',
    primaryToken: 'Dodgers',
    secondaryAmount: '50.20',
    secondaryToken: 'USDC',
    marketTitle: 'Who Will Win the MLB World Serie...',
    time: '48m',
  },
  {
    user: 'CapSu',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/31958a55-bbcd-436f-860f-f5169308fbf9-tickr-fi/assets/images/images_2.png',
    action: 'bought',
    primaryAmount: '55.4K',
    primaryToken: 'BlueJays',
    secondaryAmount: '28.00',
    secondaryToken: 'USDC',
    marketTitle: 'Who Will Win the MLB World Serie...',
    time: '49m',
  },
  {
    user: 'CapSu',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/31958a55-bbcd-436f-860f-f5169308fbf9-tickr-fi/assets/images/images_2.png',
    action: 'bought',
    primaryAmount: '24.5K',
    primaryToken: 'Dodgers',
    secondaryAmount: '10.00',
    secondaryToken: 'USDC',
    marketTitle: 'Who Will Win the MLB World Serie...',
    time: '50m',
  },
  {
    user: 'CapSu',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/31958a55-bbcd-436f-860f-f5169308fbf9-tickr-fi/assets/images/images_2.png',
    action: 'sold',
    primaryAmount: '6.1K',
    primaryToken: 'DET',
    secondaryAmount: '4.78',
    secondaryToken: 'USDC',
    marketTitle: 'NFL: Minnesota Vikings vs Detroi...',
    time: '54m',
  },
  {
    user: 'CapSu',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/31958a55-bbcd-436f-860f-f5169308fbf9-tickr-fi/assets/images/images_2.png',
    action: 'sold',
    primaryAmount: '109.5K',
    primaryToken: 'MIN',
    secondaryAmount: '32.93',
    secondaryToken: 'USDC',
    marketTitle: 'NFL: Minnesota Vikings vs Detroi...',
    time: '55m',
  },
  {
    user: 'CapSu',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/31958a55-bbcd-436f-860f-f5169308fbf9-tickr-fi/assets/images/images_2.png',
    action: 'bought',
    primaryAmount: '121.9K',
    primaryToken: 'MIN',
    secondaryAmount: '25.00',
    secondaryToken: 'USDC',
    marketTitle: 'NFL: Minnesota Vikings vs Detroi...',
    time: '1h',
  },
  {
    user: 'CapSu',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/31958a55-bbcd-436f-860f-f5169308fbf9-tickr-fi/assets/images/images_2.png',
    action: 'bought',
    primaryAmount: '24.2K',
    primaryToken: 'MIN',
    secondaryAmount: '5.00',
    secondaryToken: 'USDC',
    marketTitle: 'NFL: Minnesota Vikings vs Detroi...',
    time: '1h',
  },
];

const ActivityItem = ({ item }: { item: ActivityItemData }) => {
  const isBought = item.action === 'bought';
  const textColor = isBought ? 'text-chart-4' : 'text-chart-1';

  return (
    <div className="relative p-3 transition-colors duration-200 rounded-md cursor-pointer hover:bg-secondary">
      <a href="#" className="absolute top-2 right-2 text-muted-foreground hover:text-foreground">
        <ExternalLink className="w-3 h-3" />
      </a>
      <div className="flex items-start gap-3">
        <Image
          src={item.avatar}
          alt={`${item.user}'s avatar`}
          width={32}
          height={32}
          className="rounded-full w-8 h-8 object-cover flex-shrink-0"
        />
        <div className="flex-1 overflow-hidden">
          <div className="flex items-baseline justify-between mb-0.5">
            <div className="flex items-center gap-1.5 text-sm-custom">
              <span className="font-semibold text-foreground">{item.user}</span>
              <span className="text-muted-foreground">{item.action}</span>
            </div>
            <span className="text-xs-custom font-mono text-muted-foreground">{item.time}</span>
          </div>
          <p className={`font-semibold ${textColor} text-lg-custom`}>
            {item.primaryAmount} {item.primaryToken} &gt; {item.secondaryAmount} {item.secondaryToken}
          </p>
          <p className="text-xs-custom text-muted-foreground truncate">{item.marketTitle}</p>
        </div>
      </div>
    </div>
  );
};

const ActivityFeedSidebar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    // In a real app, you'd likely sync this with screen size via a hook.
    // For this clone, we'll just toggle the state.
    const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <aside className="hidden lg:w-[350px] lg:flex-shrink-0 lg:block border-l border-border bg-background transition-all duration-300">
        <div className="h-full p-4 overflow-y-auto">
          <div className="mb-4">
            <h2 className="flex items-center gap-2 text-base font-bold font-mono text-foreground uppercase">
              ACTIVITY FEED
              <div className="flex items-center gap-1 text-[10px] font-mono text-red-500 normal-case">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                LIVE
              </div>
            </h2>
          </div>
          <div className="space-y-3">
            {activityData.map((item, index) => (
              <ActivityItem key={index} item={item} />
            ))}
          </div>
        </div>
      </aside>
      <button 
        onClick={toggleSidebar}
        className="fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors lg:hidden"
      >
        <X className="w-6 h-6" />
      </button>
    </>
  );
};

export default ActivityFeedSidebar;