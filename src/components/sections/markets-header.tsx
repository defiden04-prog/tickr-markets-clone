"use client";

import {
  ArrowUpDown,
  ChevronDown,
  CircleCheckBig,
  Funnel,
  Grid3x3,
  LayoutGrid,
  List,
  Percent,
  Play,
  RefreshCw,
  SlidersHorizontal,
  Table,
} from "lucide-react";

const MarketsHeader = () => {
  return (
    <div className="flex items-center justify-between mb-4 px-1">
      <div className="flex items-center gap-3">
        <h1 className="text-lg font-mono font-bold text-foreground">
          PREDICTION_MARKETS
        </h1>
        <div className="flex items-center gap-2 text-xs font-mono">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-green-500">ONLINE</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-muted rounded transition-colors cursor-pointer">
          <RefreshCw className="w-4 h-4 text-foreground" />
        </button>

        {/* Desktop Controls */}
        <div className="hidden lg:flex items-center gap-2">
          <div className="inline-flex bg-secondary rounded-md p-0.5">
            <button className="flex items-center gap-1 px-2 py-1.5 text-xs font-mono font-medium transition-all duration-200 rounded-sm cursor-pointer text-muted-foreground hover:text-foreground">
              <Percent className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">ODDS</span>
            </button>
          </div>

          <div className="inline-flex bg-secondary rounded-md p-0.5">
            <button className="flex items-center gap-1.5 px-2 py-1.5 text-xs font-mono font-medium transition-all duration-200 rounded-sm cursor-pointer text-muted-foreground hover:text-foreground">
              <Funnel className="w-3.5 h-3.5" />
              <span>FILTER</span>
            </button>
          </div>

          <div className="inline-flex bg-secondary rounded-md p-0.5">
            <button className="inline-flex items-center gap-1 px-2 py-1.5 text-xs font-mono font-medium transition-all duration-200 rounded-sm cursor-pointer bg-primary text-primary-foreground shadow-sm">
              <Table className="w-3.5 h-3.5" />
              <span className="inline">TABLE</span>
            </button>
            <button className="inline-flex items-center gap-1 px-2 py-1.5 text-xs font-mono font-medium transition-all duration-200 rounded-sm cursor-pointer text-muted-foreground hover:text-foreground">
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="inline">CARDS</span>
            </button>
            <button className="inline-flex items-center gap-1 px-2 py-1.5 text-xs font-mono font-medium transition-all duration-200 rounded-sm cursor-pointer text-muted-foreground hover:text-foreground">
              <Grid3x3 className="w-3.5 h-3.5" />
              <span className="inline">GRID</span>
            </button>
          </div>

          <div className="inline-flex bg-secondary rounded-md p-0.5">
            <button className="inline-flex items-center gap-1 px-2 py-1.5 text-xs font-mono font-medium transition-all duration-200 rounded-sm cursor-pointer bg-primary text-primary-foreground shadow-sm">
              <Play className="w-3.5 h-3.5" />
              <span className="inline">ACTIVE</span>
            </button>
            <button className="inline-flex items-center gap-1 px-2 py-1.5 text-xs font-mono font-medium transition-all duration-200 rounded-sm cursor-pointer text-muted-foreground hover:text-foreground">
              <CircleCheckBig className="w-3.5 h-3.5" />
              <span className="inline">RESOLVED</span>
            </button>
            <button className="inline-flex items-center gap-1 px-2 py-1.5 text-xs font-mono font-medium transition-all duration-200 rounded-sm cursor-pointer text-muted-foreground hover:text-foreground">
              <List className="w-3.5 h-3.5" />
              <span className="inline">ALL</span>
            </button>
          </div>

          <div className="inline-flex bg-secondary rounded-md p-0.5">
            <div className="relative w-[152px]">
              <button className="flex items-center justify-between gap-2 px-2 py-1.5 text-xs font-mono font-medium transition-colors rounded cursor-pointer w-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground">
                <span>Expiring Soon</span>
                <div className="flex items-center gap-1">
                  <ArrowUpDown className="w-3 h-3" />
                  <ChevronDown className="w-3 h-3 transition-transform" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center gap-2">
          <div className="inline-flex bg-secondary rounded-md p-0.5">
            <button className="flex items-center gap-1.5 px-2 py-1.5 text-xs font-mono font-medium transition-all duration-200 rounded-sm cursor-pointer text-muted-foreground hover:text-foreground">
              <Funnel className="w-3.5 h-3.5" />
              <span>FILTER</span>
            </button>
          </div>
          <button className="p-2 hover:bg-muted rounded transition-colors cursor-pointer">
            <SlidersHorizontal className="w-4 h-4 text-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketsHeader;