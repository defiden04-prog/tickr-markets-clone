import { TrendingUp } from "lucide-react";
import Image from "next/image";

type TickerItem = {
  rank: number;
  title: string;
  change: string;
  volume: string;
  image: string;
};

const tickerData: TickerItem[] = [
  {
    rank: 1,
    title: "Will there be an Altseason in Q4 2025?",
    change: "+$11.6K",
    volume: "$10.9K",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/31958a55-bbcd-436f-860f-f5169308fbf9-tickr-fi/assets/images/images_22.png",
  },
  {
    rank: 2,
    title: "Who Will Win the MLB World Series Champion 2025?",
    change: "+$8.7K",
    volume: "$31.5K",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/31958a55-bbcd-436f-860f-f5169308fbf9-tickr-fi/assets/images/images_3.png",
  },
  {
    rank: 3,
    title: "Will PMX or Kled have a higher market cap by Oct 31, 2025",
    change: "+$3.4K",
    volume: "$2.8K",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/31958a55-bbcd-436f-860f-f5169308fbf9-tickr-fi/assets/images/images_2.png",
  },
  {
    rank: 4,
    title: "NBA: Houston Rockets vs Boston Celtics (Nov 1)",
    change: "+$2.3K",
    volume: "$1.9K",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/31958a55-bbcd-436f-860f-f5169308fbf9-tickr-fi/assets/images/images_4.png",
  },
];

const TickerItem = ({ item }: { item: TickerItem }) => (
  <div className="inline-flex items-center h-full">
    <div className="inline-flex items-center whitespace-nowrap flex-shrink-0 gap-2 h-full px-2 py-1 rounded-md hover:bg-secondary/40 hover:brightness-110 transition-all duration-200 cursor-pointer">
      <span className="text-primary font-mono text-xs font-bold">#{item.rank}</span>
      <Image
        src={item.image}
        alt={item.title}
        width={18}
        height={18}
        className="w-[18px] h-[18px] object-cover rounded-full flex-shrink-0"
      />
      <span className="text-foreground font-mono text-[11px] whitespace-nowrap">
        {item.title}
      </span>
      <span className="text-chart-1 font-mono text-[11px]">{item.change}</span>
      <span className="text-muted-foreground font-mono text-[11px]">
        {item.volume}
      </span>
    </div>
    <div className="w-px h-4 bg-border mx-2"></div>
  </div>
);

const TickerBanner = () => {
    // Duplicate data for seamless infinite scroll
  const displayData = [...tickerData, ...tickerData];

  return (
    <>
      <style>
        {`
          @keyframes ticker-scroll {
            from { transform: translateX(0%); }
            to { transform: translateX(-50%); }
          }
          .ticker-content {
            animation: ticker-scroll 40s linear infinite;
          }
        `}
      </style>
      <div className="bg-secondary border-t border-b border-border px-4 h-10 flex items-center">
        <div className="flex items-center flex-shrink-0 h-full">
          <TrendingUp className="w-3.5 h-3.5 text-primary lg:mr-2" />
          <span className="text-xs font-mono text-foreground font-semibold hidden lg:inline-block">
            24HR_VOL
          </span>
          <div className="w-px h-4 bg-border mx-2"></div>
        </div>
        <div className="flex-1 overflow-hidden whitespace-nowrap relative h-full">
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none"></div>
          <div className="ticker-content inline-flex whitespace-nowrap items-center h-full">
            {displayData.map((item, index) => (
              <TickerItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TickerBanner;