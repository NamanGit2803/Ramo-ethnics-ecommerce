'use client'

import { useMemo, useState } from "react";
import { useRouter} from "next/navigation";
import { SlidersHorizontal, X } from "lucide-react";

import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/lib/products";

const allCats = ["Sarees", "Kurtis", "Lehengas", "Suits", "Co-ord Sets"];
const allSizes = ["XS", "S", "M", "L", "XL"];

const sortOptions = [
    "Featured",
    "Price: Low to High",
    "Price: High to Low",
    "Newest",
    "Rating",
];

export default function ShopContent({category, q}) {

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

    const toggleSize = (size) => {
        setSizes((curr) =>
            curr.includes(size)
                ? curr.filter((x) => x !== size)
                : [...curr, size]
        );
    };

    const setCategory = (cat) => {
        const params = new URLSearchParams();

        if (cat) params.set("category", cat);
        if (search) params.set("q", search);

        router.push(`/shop?${params.toString()}`);
    };

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

                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search sarees, fabrics, occasions…"
                    className="hidden max-w-md flex-1 rounded border border-border bg-secondary/40 px-4 py-2 text-sm focus:border-primary focus:outline-none sm:block"
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
                <aside
                    className={`${open
                        ? "fixed inset-0 z-50 overflow-auto bg-background p-6"
                        : "hidden"
                        } lg:relative lg:block lg:bg-transparent lg:p-0`}
                >
                    {open && (
                        <div className="mb-6 flex items-center justify-between lg:hidden">
                            <span className="font-serif text-xl">Filters</span>

                            <button onClick={() => setOpen(false)}>
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                    )}

                    <FilterGroup title="Category">
                        <button
                            onClick={() => setCategory(undefined)}
                            className={`block py-1 text-sm ${!category
                                ? "text-primary"
                                : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            All
                        </button>

                        {allCats.map((c) => (
                            <button
                                key={c}
                                onClick={() => setCategory(c)}
                                className={`block py-1 text-sm ${category === c
                                    ? "text-primary"
                                    : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {c}
                            </button>
                        ))}
                    </FilterGroup>

                    <FilterGroup title="Size">
                        <div className="flex flex-wrap gap-2">
                            {allSizes.map((s) => (
                                <button
                                    key={s}
                                    onClick={() => toggleSize(s)}
                                    className={`h-9 w-9 border text-xs ${sizes.includes(s)
                                        ? "border-primary bg-primary text-primary-foreground"
                                        : "border-border hover:border-primary"
                                        }`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </FilterGroup>

                    <FilterGroup title="Price">
                        <input
                            type="range"
                            min={500}
                            max={30000}
                            step={500}
                            value={priceMax}
                            onChange={(e) =>
                                setPriceMax(Number(e.target.value))
                            }
                            className="w-full accent-primary"
                        />

                        <p className="mt-2 text-sm text-muted-foreground">
                            Up to ₹{priceMax.toLocaleString("en-IN")}
                        </p>
                    </FilterGroup>

                    <FilterGroup title="Availability">
                        <label className="flex cursor-pointer items-center gap-2 text-sm">
                            <input
                                type="checkbox"
                                checked={inStockOnly}
                                onChange={(e) =>
                                    setInStockOnly(e.target.checked)
                                }
                                className="accent-primary"
                            />
                            In stock only
                        </label>
                    </FilterGroup>
                </aside>

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



function FilterGroup({ title, children }) {
    return (
        <div className="mb-8">
            <h3 className="mb-3 text-xs uppercase tracking-widest">
                {title}
            </h3>

            <div className="space-y-1">{children}</div>
        </div>
    );
}