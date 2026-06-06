"use client";

import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

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


export default function NavbarLinks() {

    const pathName = usePathname()

    const isActive = (href) => {
        return pathName === href;
    };

    return (
        <NavigationMenu>
            <NavigationMenuList>
                {nav.map((item) => (
                    <NavigationMenuItem key={item.label} className='mx-1'>
                        {item.children ? (
                            <>
                                <NavigationMenuTrigger className='text-foreground/80'>
                                    {item.label}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid min-w-65 grid-cols-1 p-4">
                                        {item.children.map((child) => (
                                            <NavigationMenuLink asChild key={child.href}>
                                                <Link
                                                    href={child.href}
                                                    className="block rounded-md hover:text-primary transition">
                                                    <div className="text-sm font-medium">
                                                        {child.label}
                                                    </div>
                                                </Link>
                                            </NavigationMenuLink>
                                        ))}
                                    </div>
                                </NavigationMenuContent>
                            </>
                        ) : (
                            <NavigationMenuLink asChild>
                                <Link
                                    href={item.href}
                                    className={`relative transition-colors px-1 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-primary after:transition-transform after:duration-300 ${isActive(item.href)
                                        ? "text-primary after:scale-x-100"
                                        : "text-foreground/80 after:scale-x-0"} after:origin-left hover:text-primary hover:after:scale-x-100`}>
                                    {item.label}
                                </Link>
                            </NavigationMenuLink>
                        )}
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}