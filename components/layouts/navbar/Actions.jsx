'use client'

import { Heart, Search, ShoppingBag, User, Menu, X } from "lucide-react";
import Link from "next/link";

const Actions = () => {

    const cartCount = 0;
    const wishCount = 0;
    // const wishCount = useWishlist((s) => s.ids.length);

    // const cartCount = useCart((s) =>
    //     s.items.reduce((a, b) => a + b.qty, 0)
    // );


    return (
        <div className="flex items-center gap-1 sm:gap-2">
            <Link
                href="/shop"
                aria-label="Search"
                className="p-2 hover:text-primary"
            >
                <Search className="h-5 w-5" />
            </Link>
            <Link
                href="/account"
                aria-label="Account"
                className="hidden sm:block p-2 hover:text-primary">
                <User className="h-5 w-5" />
            </Link>
            <Link
                href="/wishlist"
                className="relative p-2 hover:text-primary">
                <Heart className="h-5 w-5" />
                {wishCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 grid place-items-center h-4 min-w-4 rounded-full bg-gold px-1 text-[10px]">
                        {wishCount}
                    </span>
                )}
            </Link>
            <Link
                href="/cart"
                className="relative p-2 hover:text-primary">
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 grid place-items-center h-4 min-w-4 rounded-full bg-primary px-1 text-[10px] text-primary-foreground">
                        {cartCount}
                    </span>
                )}
            </Link>
        </div>
    )
}

export default Actions