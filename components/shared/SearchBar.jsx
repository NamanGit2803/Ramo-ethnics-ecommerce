"use client";

import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SearchBar({
    value,
    onChange,
    placeholder = "Search...",
    className = "",
}) {
    return (
        <div className={`relative ${className}`}>
            <Search
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="h-10 pl-10 pr-10 bg-secondary/40 border-border focus-visible:ring-1 focus-visible:ring-primary" />
            {value && (
                <button
                    type="button"
                    onClick={() => onChange("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary">
                    <X className="h-4 w-4" />
                </button>
            )}
        </div>
    );
}