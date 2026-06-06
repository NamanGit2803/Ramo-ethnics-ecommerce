"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavbarLinks from "./navbar/DesktopNav";
import Actions from "./navbar/Actions";
import MobileNav from "./navbar/MobileNav";
// import { useCart, useWishlist } from "@/lib/store";

const nav = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/shop",
        label: "Shop",
    },
    {
        label: "Ethnic",
        children: [
            {
                href: "/category/new-arrival",
                label: "Suits",
            },
            {
                href: "/category/new-arriva",
                label: "Lehengas",
            },
            {
                href: "/category/new-arriv",
                label: "Indo Western",
            },
            {
                href: "/category/new-arr",
                label: "Co-ord Sets",
            },
            {
                href: "/category/new",
                label: "Drop Sarees",
            },
        ]
    },
    {
        label: "Night Wears",
        children: [
            {
                href: "/category/new1",
                label: "Night-gown",
            },
        ]
    },
    {
        label: "Cosmetic",
        children: [
            {
                href: "/category/new2",
                label: "Lips",
            },
            {
                href: "/category/new9",
                label: "Eyes",
            },
            {
                href: "/category/new8",
                label: "Face",
            },
            {
                href: "/category/new4",
                label: "Nails",
            },
            {
                href: "/category/new5",
                label: "Hairs",
            },
        ]
    },
    {
        label: "Collections",
        children: [
            {
                href: "/collections/new-arrivals",
                label: "New Arrivals",
            },
            {
                href: "/collections/festive-wear",
                label: "Festive Wear",
            },
            {
                href: "/collections/wedding",
                label: "Wedding Collection",
            },
            {
                href: "/collections/bestsellers",
                label: "Best Sellers",
            },
        ],
    },
];


export default function Navbar() {


    return (
        <nav className="relative border-b h-16 lg:h-20 flex items-center border-border/60 bg-background/85 backdrop-blur-md">
            <div className="container mx-auto flex  items-center justify-between px-4">
                {/* Mobile Menu */}
                <MobileNav nav={nav}/>

                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/assets/logo.png"
                        width={150}
                        height={80}
                        alt="Ramo"
                        priority
                        className="h-12 w-30 lg:h-16 lg:w-36" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8 text-sm">
                    <NavbarLinks nav={nav}/>
                </div>

                {/* Actions */}
                <Actions />
            </div>
        </nav>
    );
}