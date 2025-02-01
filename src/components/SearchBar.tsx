import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const SearchBar = ({ value, onChange, className }: SearchBarProps) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8E9196] dark:text-gray-400" />
      <Input
        type="search"
        placeholder="Search FAQs..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "pl-10 h-12 text-base transition-all duration-200 focus-visible:ring-[#9b87f5]",
          className
        )}
      />
    </div>
  );
};

export default SearchBar;