"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChartNoAxesColumn,
  TrendingUp,
  Tag,
  Compass,
  Sun,
  Search,
} from "lucide-react";
import { useState, useEffect } from "react";

// A custom component for the X logo, as it's not in lucide-react and the original asset is not provided.
// This is to match the visual representation in the screenshots.
const XLogo = () => (
  <svg
    viewBox="0 0 1200 1227"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    className="w-4 h-4 fill-current"
  >
    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path>
  </svg>
);

const MainHeader = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !searchOpen) {
        e.preventDefault();
        setSearchOpen(true);
        setTimeout(() => {
          document.getElementById('market-search')?.focus();
        }, 100);
      }
      if (e.key === 'Escape' && searchOpen) {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen]);

  // Dispatch search event to communicate with MarketsContainer
  useEffect(() => {
    const event = new CustomEvent('market-search', { detail: searchQuery });
    window.dispatchEvent(event);
  }, [searchQuery]);

  return (
    <header className="bg-background border-t border-b border-border px-4 h-[49px]">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center gap-6">
          <Link href="/en/markets" className="flex items-center gap-1 cursor-pointer">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/31958a55-bbcd-436f-860f-f5169308fbf9-tickr-fi/assets/icons/favicon-32x32-2.png"
              alt="Tickr Logo"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="text-primary font-mono text-2xl font-bold leading-8">
              &gt;
            </span>
            <span className="text-primary font-mono text-2xl font-bold leading-8">
              _TICKR
            </span>
            <div className="w-0.5 h-6 bg-primary animate-cursor-flicker"></div>
          </Link>
          <nav className="hidden xl:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Link
                href="/en/markets"
                className="font-mono text-xs font-medium leading-4 transition-colors flex items-center gap-2 text-foreground"
              >
                <ChartNoAxesColumn className="w-3 h-3" />
                MARKETS
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/en/pre-markets"
                className="font-mono text-xs font-medium leading-4 transition-colors flex items-center gap-2 text-muted-foreground hover:text-primary"
              >
                <TrendingUp className="w-3 h-3" />
                PRE_MARKETS
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-medium leading-4 transition-colors flex items-center gap-2 text-muted-foreground cursor-default">
                <Tag className="w-3 h-3" />
                PORTFOLIO
              </span>
              <span className="bg-secondary text-muted-foreground text-[10px] px-1.5 py-0.5 rounded font-mono">
                COMING SOON
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-medium leading-4 transition-colors flex items-center gap-2 text-muted-foreground cursor-default">
                <Compass className="w-3 h-3" />
                DISCOVERY
              </span>
              <span className="bg-secondary text-muted-foreground text-[10px] px-1.5 py-0.5 rounded font-mono">
                COMING SOON
              </span>
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://x.com/TICKRfi"
            className="flex items-center justify-center w-6 h-6 rounded hover:bg-secondary transition-colors"
            aria-label="Follow TICKR on X"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XLogo />
          </a>
          <button
            className="inline-flex items-center justify-center w-10 h-[32px] rounded-md bg-secondary hover:bg-secondary/80 text-secondary-foreground border border-border transition-colors duration-200 focus:outline-none cursor-pointer"
            aria-label="Switch to light theme"
          >
            <Sun className="h-5 w-5" />
          </button>
          <div className="lg:hidden">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="inline-flex items-center justify-center w-10 h-[32px] rounded-md bg-secondary hover:bg-secondary/80 text-secondary-foreground border border-border transition-colors duration-200 focus:outline-none cursor-pointer"
              aria-label="Open search"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <input
                id="market-search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="font-mono text-xs transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed h-[32px] bg-secondary text-foreground placeholder-muted-foreground border border-border focus:border-primary px-4 rounded-md pr-10 w-60"
                placeholder="SEARCH MARKETS..."
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                <div className="w-6 h-6 flex items-center justify-center bg-secondary border border-border rounded -mr-2">
                  <kbd className="text-[10px] font-mono font-semibold text-muted-foreground leading-none">
                    /
                  </kbd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Overlay */}
      {searchOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/80 z-50" onClick={() => setSearchOpen(false)}>
          <div className="bg-background border-b border-border p-4" onClick={(e) => e.stopPropagation()}>
            <input
              id="market-search-mobile"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full font-mono text-xs transition-colors focus:outline-none h-[40px] bg-secondary text-foreground placeholder-muted-foreground border border-border focus:border-primary px-4 rounded-md"
              placeholder="SEARCH MARKETS..."
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default MainHeader;