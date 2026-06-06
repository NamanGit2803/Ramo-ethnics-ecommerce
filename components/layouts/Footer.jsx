import Link from "next/link";
import { FiFacebook, FiYoutube, FiInstagram } from "react-icons/fi";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="mt-24 border-t border-border bg-secondary/40">
            <div className="container mx-auto px-4 py-16">
                <div className="grid gap-12 md:grid-cols-4">
                    <div>
                        <Link href='/'>
                        <Image src='/assets/logo.png' width={50} height={50} className="h-12 w-1/2" alt={process.env.NEXT_PUBLIC_BRAND_NAME}/>
                        </Link>

                        <p className="text-sm leading-relaxed text-muted-foreground lg:mt-3">
                            Premium women's ethnic wear, crafted with care and timeless
                            elegance.
                        </p>

                        <div className="mt-5 flex gap-3 text-muted-foreground">
                            <FiInstagram className="h-4 w-4 cursor-pointer hover:text-primary" />
                            <FiFacebook className="h-4 w-4 cursor-pointer hover:text-primary" />
                            <FiYoutube className="h-4 w-4 cursor-pointer hover:text-primary" />
                        </div>
                    </div>

                    <FooterCol
                        title="Shop"
                        links={[
                            { href: "/shop", label: "All Collections" },
                            { href: "/shop", label: "New Arrivals" },
                            { href: "/shop", label: "Festive Edit" },
                            { href: "/shop", label: "Bestsellers" },
                        ]}
                    />

                    <FooterCol
                        title="Help"
                        links={[
                            { href: "/contact", label: "Contact Us" },
                            { href: "/contact", label: "Shipping" },
                            { href: "/contact", label: "Returns" },
                            { href: "/contact", label: "Size Guide" },
                        ]}
                    />

                    <FooterCol
                        title="Company"
                        links={[
                            { href: "/about", label: "About" },
                            { href: "/privacy", label: "Privacy Policy" },
                            { href: "/terms", label: "Terms & Conditions" },
                        ]}
                    />
                </div>

                <div className="mt-12 flex flex-col justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
                    <p>
                        © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_BRAND_NAME}. Handcrafted in India.
                    </p>

                    <p>Made with care</p>
                </div>
            </div>
        </footer>
    );
}

function FooterCol({ title, links }) {
    return (
        <div>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-widest">
                {title}
            </h4>

            <ul className="space-y-2 text-sm text-muted-foreground">
                {links.map((l, i) => (
                    <li key={i}>
                        <Link
                            href={l.href}
                            className="transition-colors hover:text-primary"
                        >
                            {l.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}