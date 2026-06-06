'use client'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"


const MobileNav = ({nav}) => {

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
                    {nav.map((item) => (
                        item.children ? (
                            <Collapsible key={item.label}>
                                <CollapsibleTrigger className="flex w-full text-foreground/80 items-center justify-between text-lg">
                                    {item.label}
                                    <ChevronDown className="h-4 w-4 ml-3" />
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <div className="mt-3 ml-4 flex flex-col gap-3">
                                        {item.children.map((child) => (
                                            <SheetClose key={child.href} asChild>
                                                <Link
                                                    href={child.href}
                                                    className={cn("text-muted-foreground hover:text-primary", isActive(child.href) ? "text-primary" : "text-muted-foreground")}>
                                                    {child.label}
                                                </Link>
                                            </SheetClose>
                                        ))}
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                        ) : (
                            <SheetClose key={item.href} asChild>
                                <Link href={item.href} className={cn("text-lg text-foreground/80 hover:text-primary", isActive(item.href) ? "text-primary" : "text-foreground/80")}>
                                    {item.label}
                                </Link>
                            </SheetClose>
                        )
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav