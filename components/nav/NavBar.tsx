'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className="space-x-8">
            <Link href="/" className={pathname === "/" ? "font-bold" : ""}>Home</Link>
			<Link href="/work" className={pathname === "/work" ? "font-bold" : ""}>Work</Link>
			<Link href="/future" className={pathname === "/future" ? "font-bold" : ""}>Future</Link>
			<Link href="/about" className={pathname === "/about" ? "font-bold" : ""}>About</Link>
			<Link href="/contact" className={pathname === "/contact" ? "font-bold" : ""}>Contact</Link>
        </div>
    );
};
