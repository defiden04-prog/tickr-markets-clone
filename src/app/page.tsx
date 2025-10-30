import TopStatusBar from "@/components/sections/top-status-bar";
import MainHeader from "@/components/sections/main-header";
import TickerBanner from "@/components/sections/ticker-banner";
import MarketsContainer from "@/components/sections/markets-container";
import ActivityFeedSidebar from "@/components/sections/activity-feed-sidebar";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono antialiased">
      <TopStatusBar />
      <MainHeader />
      <TickerBanner />
      
      <div className="flex">
        <main className="flex-1 p-4">
          <MarketsContainer />
        </main>
        <ActivityFeedSidebar />
      </div>
    </div>
  );
}