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


export default function NavbarLinks({nav}) {

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