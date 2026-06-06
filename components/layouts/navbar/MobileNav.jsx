'use client'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

const nav = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/collections/sarees", label: "Sarees" },
    { href: "/shop?category=Lehengas", label: "Lehengas" },
    // {
    //     label: "Collections", children: [
    //         {
    //             href: "/collections/new-arrivals",
    //             label: "New Arrivals",
    //         },

    //         {
    //             href: "/collections/festive-wear",
    //             label: "Festive Wear",
    //         },

    //         {
    //             href: "/collections/wedding",
    //             label: "Wedding Collection",
    //         },

    //         {
    //             href: "/collections/bestsellers",
    //             label: "Best Sellers",
    //         },
    //     ]
    // },
    { href: "/contact", label: "Contact" },
];

const MobileNav = () => {

    const pathName = usePathname()
    const [open, setOpen] = useState(false);

    const isActive = (href) => {
        return pathName === href;
    };

    const openMenu = () => {

        window.scrollTo({
            top: 60,
            behavior: "smooth",
        });

        setTimeout(() => {
            setOpen(true);
        }, 200);

    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <button
                    className="lg:hidden"
                    aria-label="Menu"
                    onClick={(e) => { e.preventDefault(); openMenu() }}
                >
                    <Menu className="h-5 w-5" />
                </button>
            </SheetTrigger>

            <SheetContent
                side="left"
                className="w-auto! top-16! bg-background p-4 h-[calc(100vh-4rem)] [&>button]:border-0 [&>button]:ring-0 [&>button:focus:ring-0">
                <SheetTitle />

                <nav className="flex flex-col gap-5">
                    {nav.map((item, i) => (
                        <SheetClose key={i} asChild>
                            <Link
                                href={item.href}
                                className={`text-lg transition-colors ${isActive(item.href) ? "text-primary" : "text-foreground/80"} hover:text-primary`}>{item.label}
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
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav