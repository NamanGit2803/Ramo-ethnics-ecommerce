'use client'

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { SlidersHorizontal, X } from "lucide-react";
import FilterBar from "../shared/FilterBar";
import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/lib/products";
import SearchBar from "../shared/SearchBar";


const sortOptions = [
    "Featured",
    "Price: Low to High",
    "Price: High to Low",
    "Newest",
    "Rating",
];

export default function ShopContent({ category, q }) {

    const router = useRouter();
    const [sort, setSort] = useState("Featured");
    const [priceMax, setPriceMax] = useState(30000);
    const [sizes, setSizes] = useState([]);
    const [inStockOnly, setInStockOnly] = useState(false);
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState(q ?? "");

    const filtered = useMemo(() => {
        let list = [...products];

        if (category) {
            list = list.filter((p) => p.category === category);
        }

        if (search) {
            const s = search.toLowerCase();

            list = list.filter((p) =>
                [p.name, p.category, p.fabric, p.occasion].some((f) =>
                    f.toLowerCase().includes(s)
                )
            );
        }

        list = list.filter((p) => p.price <= priceMax);

        if (sizes.length) {
            list = list.filter((p) =>
                p.sizes.some((size) => sizes.includes(size))
            );
        }

        if (inStockOnly) {
            list = list.filter((p) => p.inStock);
        }

        switch (sort) {
            case "Price: Low to High":
                list.sort((a, b) => a.price - b.price);
                break;

            case "Price: High to Low":
                list.sort((a, b) => b.price - a.price);
                break;

            case "Newest":
                list.sort(
                    (a, b) => Number(!!b.isNew) - Number(!!a.isNew)
                );
                break;

            case "Rating":
                list.sort((a, b) => b.rating - a.rating);
                break;
        }

        return list;
    }, [category, search, priceMax, sizes, inStockOnly, sort]);



    return (
        <div className="container mx-auto px-4 py-10 lg:py-16">
            <div className="mb-10 text-center">
                <p className="mb-2 text-xs uppercase tracking-[0.3em] text-primary">
                    The Collection
                </p>

                <h1 className="font-serif text-4xl sm:text-5xl">
                    {category ?? "All Pieces"}
                </h1>

                <p className="mt-2 text-sm text-muted-foreground">
                    {filtered.length} pieces
                </p>
            </div>

            <div className="mb-6 flex items-center justify-between gap-3">
                <button
                    onClick={() => setOpen(true)}
                    className="flex items-center gap-2 border border-border px-4 py-2 text-sm lg:hidden"
                >
                    <SlidersHorizontal className="h-4 w-4" />
                    Filters
                </button>

                <SearchBar
                    value={search}
                    onChange={setSearch}
                    placeholder="Search sarees, fabrics, occasions..."
                    className="w-md"
                />

                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="border border-border bg-background px-3 py-2 text-sm"
                >
                    {sortOptions.map((o) => (
                        <option key={o}>{o}</option>
                    ))}
                </select>
            </div>

            <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
                <FilterBar open={open} setOpen={setOpen} />

                <div>
                    {filtered.length === 0 ? (
                        <p className="py-20 text-center text-muted-foreground">
                            No pieces match your filters.
                        </p>
                    ) : (
                        <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-3">
                            {filtered.map((p) => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}


