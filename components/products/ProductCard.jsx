"use client";

import Link from "next/link";
import { Heart, Star } from "lucide-react";

import { discountPct } from "@/lib/products";
// import { useWishlist } from "@/lib/store";
import { cn } from "@/lib/utils";

export function ProductCard({ product }) {
  // const wish = useWishlist();
  // const liked = wish.ids.includes(product.id);
  const off = discountPct(product);

  return (
    <Link
      href={`/product/${product.id}`}
      className="group block"
    >
      <div className="relative overflow-hidden bg-secondary/40 aspect-[4/5] rounded-md">
        <img
          src={product.image.src}
          alt={product.name}
          loading="lazy"
          width={800}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 group-hover:opacity-0"
        />

        <img
          src={product.hoverImage.src}
          alt=""
          aria-hidden
          loading="lazy"
          width={800}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
        />

        {off > 0 && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] tracking-widest uppercase px-2 py-1 rounded">
            {off}% Off
          </span>
        )}

        {product.isNew && (
          <span className="absolute top-3 right-12 bg-gold text-gold-foreground text-[10px] tracking-widest uppercase px-2 py-1 rounded">
            New
          </span>
        )}

        <button
          onClick={(e) => {
            e.preventDefault();
            // wish.toggle(product.id);
          }}
          aria-label="Wishlist"
          className="absolute top-2.5 right-2.5 grid h-9 w-9 place-items-center rounded-full bg-background/90 backdrop-blur hover:bg-background transition"
        >
          <Heart
            className={cn(
              "h-4 w-4",
              // liked && "fill-primary text-primary"
            )}
          />
        </button>

        {!product.inStock && (
          <div className="absolute inset-0 grid place-items-center bg-background/60">
            <span className="text-xs uppercase tracking-widest">
              Out of stock
            </span>
          </div>
        )}
      </div>

      <div className="pt-4 space-y-1">
        <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
          {product.category}
        </p>

        <h3 className="font-serif text-base leading-tight group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="h-3 w-3 fill-gold text-gold" />
          <span>{product.rating}</span>
          <span>· {product.reviews} reviews</span>
        </div>

        <div className="flex items-baseline gap-2 pt-1">
          <span className="font-medium">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          {product.mrp > product.price && (
            <>
              <span className="text-xs line-through text-muted-foreground">
                ₹{product.mrp.toLocaleString("en-IN")}
              </span>

              <span className="text-xs text-primary">
                {off}% off
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}