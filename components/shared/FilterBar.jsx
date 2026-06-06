'use client'

import {  X } from "lucide-react";
import { useState } from "react";

const allCats = ["Sarees", "Kurtis", "Lehengas", "Suits", "Co-ord Sets"];
const allSizes = ["XS", "S", "M", "L", "XL"];

const FilterBar = ({open, setOpen}) => {

    const [sizes, setSizes] = useState([]);
    const [priceMax, setPriceMax] = useState(30000);
    const [inStockOnly, setInStockOnly] = useState(false);

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
                    className={`block py-1 text-sm ${"text-muted-foreground hover:text-foreground"
                        }`}
                >
                    All
                </button>

                {allCats.map((c) => (
                    <button
                        key={c}
                        onClick={() => setCategory(c)}
                        className={`block py-1 text-sm ${"text-muted-foreground hover:text-foreground"
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
    )
}

export default FilterBar

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