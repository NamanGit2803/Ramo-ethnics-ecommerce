"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavbarLinks from "./navbar/DesktopNav";
import Actions from "./navbar/Actions";
import MobileNav from "./navbar/MobileNav";
// import { useCart, useWishlist } from "@/lib/store";


export default function Navbar() {
  
    
    return (
        <nav className="relative border-b h-16 lg:h-20 flex items-center border-border/60 bg-background/85 backdrop-blur-md">
            <div className="container mx-auto flex  items-center justify-between px-4">
                {/* Mobile Menu */}
                <MobileNav/>

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
                    <NavbarLinks/>
                </div>

                {/* Actions */}
                <Actions/>
            </div>
        </nav>
    );
}