"use client";

import Link from "next/link";
import { Heart, Search, ShoppingBag, User, Menu, X } from "lucide-react";
import Image from "next/image";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { usePathname } from "next/navigation";

// import { useCart, useWishlist } from "@/lib/store";

const nav = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/shop?category=Sarees", label: "Sarees" },
    { href: "/shop?category=Lehengas", label: "Lehengas" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    // const cartCount = useCart((s) =>
    //     s.items.reduce((a, b) => a + b.qty, 0)
    // );
    const cartCount = 0;
    const wishCount = 0;
    const pathName = usePathname()
console.log(pathName===nav[0].href)
    // const wishCount = useWishlist((s) => s.ids.length);

    return (
        <header className="sticky top-0 z-50  border-b border-border/60 bg-background/85 backdrop-blur-md">
            <div className="border-b border-border/40 bg-primary text-primary-foreground">
                <p className="container mx-auto px-4 py-2 text-center text-xs tracking-[0.18em] uppercase">
                    Festive Edit · Flat 20% Off · Free Shipping over ₹1999
                </p>
            </div>

            <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:h-20">
                <Sheet>
                    <SheetTrigger asChild className="lg:hidden">
                        <Menu className="h-5 w-5" />
                    </SheetTrigger>

                    <SheetContent side="left" className="[&>button]:border-0 [&>button]:ring-0 [&>button]:outline-none [&>button]:shadow-none [&>button]:focus:ring-0 [&>button:focus:outline-none w-72 bg-background lg:hidden">
                        <div className=" p-6 shadow-luxe">
                            <SheetTitle className="mb-8 flex items-center justify-between">
                                <Image src='/assets/logo.png' width={50} height={50} className="h-12 w-28" alt="Ramo"/>
                            </SheetTitle>

                            <nav className="flex flex-col gap-4">
                                {nav.map((n, i) => (
                                    <SheetClose key={i} asChild>
                                        <Link
                                            href={n.href}
                                            className={`text-lg ${pathName===n.href ? 'text-primary' : 'text-foreground/80'} hover:text-primary`}
                                        >
                                            {n.label}
                                        </Link>
                                    </SheetClose>
                                ))}

                                <SheetClose asChild>
                                    <Link
                                        href="/account"
                                        className="text-lg"
                                    >
                                        Account
                                    </Link>
                                </SheetClose>
                            </nav>
                        </div>
                    </SheetContent>
                </Sheet>

                <Link
                    href="/"
                    className="font-serif text-2xl tracking-wider lg:text-3xl"
                >
                    <Image src="/assets/logo.png" width={100} height={100} className="h-12 w-30 lg:h-16 lg:w-36" alt="Ramo" />
                </Link>

                <nav className="hidden lg:flex items-center gap-8 text-sm">
                    {nav.map((n, i) => (
                        <Link
                            key={i}
                            href={n.href}
                           className={`${pathName===n.href ? 'text-primary' : 'text-foreground/80'} hover:text-primary transition-colors`}
                        >
                            {n.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-1 sm:gap-2">
                    <Link
                        href="/shop"
                        className="p-2 hover:text-primary"
                        aria-label="Search"
                    >
                        <Search className="h-5 w-5" />
                    </Link>

                    <Link
                        href="/account"
                        className="p-2 hover:text-primary hidden sm:block"
                        aria-label="Account"
                    >
                        <User className="h-5 w-5" />
                    </Link>

                    <Link
                        href="/wishlist"
                        className="relative p-2 hover:text-primary"
                        aria-label="Wishlist"
                    >
                        <Heart className="h-5 w-5" />

                        {wishCount > 0 && (
                            <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-medium text-gold-foreground">
                                {wishCount}
                            </span>
                        )}
                    </Link>

                    <Link
                        href="/cart"
                        className="relative p-2 hover:text-primary"
                        aria-label="Cart"
                    >
                        <ShoppingBag className="h-5 w-5" />

                        {cartCount > 0 && (
                            <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-medium text-primary-foreground">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
}