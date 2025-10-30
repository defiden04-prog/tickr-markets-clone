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
  X,
} from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { ViewMode, StatusFilter, SortOption, MarketCategory } from "./markets-container";

interface MarketsHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  statusFilter: StatusFilter;
  onStatusFilterChange: (status: StatusFilter) => void;
  sortOption: SortOption;
  onSortChange: (option: SortOption) => void;
  selectedCategories: MarketCategory[];
  onCategoriesChange: (categories: MarketCategory[]) => void;
}

const categories: MarketCategory[] = ['Crypto', 'Science', 'World Events', 'Sports', 'Politics'];

const MarketsHeader = ({
  searchQuery,
  onSearchChange,
  viewMode,
  onViewModeChange,
  statusFilter,
  onStatusFilterChange,
  sortOption,
  onSortChange,
  selectedCategories,
  onCategoriesChange,
}: MarketsHeaderProps) => {
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);

  const toggleCategory = (category: MarketCategory) => {
    if (selectedCategories.includes(category)) {
      onCategoriesChange(selectedCategories.filter(c => c !== category));
    } else {
      onCategoriesChange([...selectedCategories, category]);
    }
  };

  const sortOptions = [
    { value: 'expiring' as SortOption, label: 'Expiring Soon' },
    { value: 'volume' as SortOption, label: 'Highest Volume' },
    { value: 'liquidity' as SortOption, label: 'Highest Liquidity' },
    { value: 'newest' as SortOption, label: 'Newest' },
  ];

  const currentSortLabel = sortOptions.find(opt => opt.value === sortOption)?.label || 'Expiring Soon';

  const handleRefresh = () => {
    window.location.reload();
  };

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
        <button 
          onClick={handleRefresh}
          className="p-2 hover:bg-muted rounded transition-colors cursor-pointer"
        >
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

          <Dialog open={filterDialogOpen} onOpenChange={setFilterDialogOpen}>
            <DialogTrigger asChild>
              <div className="inline-flex bg-secondary rounded-md p-0.5">
                <button className="flex items-center gap-1.5 px-2 py-1.5 text-xs font-mono font-medium transition-all duration-200 rounded-sm cursor-pointer text-muted-foreground hover:text-foreground">
                  <Funnel className="w-3.5 h-3.5" />
                  <span>FILTER</span>
                  {selectedCategories.length > 0 && (
                    <span className="ml-1 bg-primary text-primary-foreground rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                      {selectedCategories.length}
                    </span>
                  )}
                </button>
              </div>
            </DialogTrigger>
            <DialogContent className="font-mono">
              <DialogHeader>
                <DialogTitle>FILTER_MARKETS</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold mb-2 text-muted-foreground">CATEGORIES</p>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => toggleCategory(category)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors ${
                          selectedCategories.includes(category)
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'bg-secondary text-foreground border-border hover:bg-muted'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                {selectedCategories.length > 0 && (
                  <button
                    onClick={() => onCategoriesChange([])}
                    className="w-full px-3 py-2 text-xs font-medium rounded-md bg-secondary text-foreground border border-border hover:bg-muted transition-colors"
                  >
                    CLEAR_ALL
                  </button>
                )}
              </div>
            </DialogContent>
          </Dialog>

          <div className="inline-flex bg-secondary rounded-md p-0.5">
            <button 
              onClick={() => onViewModeChange('table')}
              className={`inline-flex items-center gap-1 px-2 py-1.5 text-xs font-mono font-medium transition-all duration-200 rounded-sm cursor-pointer ${
                viewMode === 'table' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span className="inline">TABLE</span>
            </button>
            <button 
              onClick={() => onViewModeChange('cards')}
              className={`inline-flex items-center gap-1 px-2 py-1.5 text-xs font-mono font-medium transition-all duration-200 rounded-sm cursor-pointer ${
                viewMode === 'cards' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="inline">CARDS</span>
            </button>
            <button 
              onClick={() => onViewModeChange('grid')}
              className={`inline-flex items-center gap-1 px-2 py-1.5 text-xs font-mono font-medium transition-all duration-200 rounded-sm cursor-pointer ${
                viewMode === 'grid' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Grid3x3 className="w-3.5 h-3.5" />
              <span className="inline">GRID</span>
            </button>
          </div>

          <div className="inline-flex bg-secondary rounded-md p-0.5">
            <button 
              onClick={() => onStatusFilterChange('active')}
              className={`inline-flex items-center gap-1 px-2 py-1.5 text-xs font-mono font-medium transition-all duration-200 rounded-sm cursor-pointer ${
                statusFilter === 'active' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Play className="w-3.5 h-3.5" />
              <span className="inline">ACTIVE</span>
            </button>
            <button 
              onClick={() => onStatusFilterChange('resolved')}
              className={`inline-flex items-center gap-1 px-2 py-1.5 text-xs font-mono font-medium transition-all duration-200 rounded-sm cursor-pointer ${
                statusFilter === 'resolved' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <CircleCheckBig className="w-3.5 h-3.5" />
              <span className="inline">RESOLVED</span>
            </button>
            <button 
              onClick={() => onStatusFilterChange('all')}
              className={`inline-flex items-center gap-1 px-2 py-1.5 text-xs font-mono font-medium transition-all duration-200 rounded-sm cursor-pointer ${
                statusFilter === 'all' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span className="inline">ALL</span>
            </button>
          </div>

          <div className="inline-flex bg-secondary rounded-md p-0.5 relative">
            <button
              onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
              className="flex items-center justify-between gap-2 px-2 py-1.5 text-xs font-mono font-medium transition-colors rounded cursor-pointer w-[152px] bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground"
            >
              <span>{currentSortLabel}</span>
              <div className="flex items-center gap-1">
                <ArrowUpDown className="w-3 h-3" />
                <ChevronDown className={`w-3 h-3 transition-transform ${sortDropdownOpen ? 'rotate-180' : ''}`} />
              </div>
            </button>
            {sortDropdownOpen && (
              <div className="absolute top-full right-0 mt-1 w-[180px] bg-background border border-border rounded-md shadow-lg z-50">
                {sortOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => {
                      onSortChange(option.value);
                      setSortDropdownOpen(false);
                    }}
                    className={`w-full px-3 py-2 text-left text-xs font-mono hover:bg-secondary transition-colors ${
                      sortOption === option.value ? 'bg-secondary text-primary' : 'text-foreground'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center gap-2">
          <Dialog open={filterDialogOpen} onOpenChange={setFilterDialogOpen}>
            <DialogTrigger asChild>
              <div className="inline-flex bg-secondary rounded-md p-0.5">
                <button className="flex items-center gap-1.5 px-2 py-1.5 text-xs font-mono font-medium transition-all duration-200 rounded-sm cursor-pointer text-muted-foreground hover:text-foreground">
                  <Funnel className="w-3.5 h-3.5" />
                  <span>FILTER</span>
                </button>
              </div>
            </DialogTrigger>
            <DialogContent className="font-mono">
              <DialogHeader>
                <DialogTitle>FILTER_MARKETS</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold mb-2 text-muted-foreground">CATEGORIES</p>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => toggleCategory(category)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors ${
                          selectedCategories.includes(category)
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'bg-secondary text-foreground border-border hover:bg-muted'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <button className="p-2 hover:bg-muted rounded transition-colors cursor-pointer">
            <SlidersHorizontal className="w-4 h-4 text-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketsHeader;