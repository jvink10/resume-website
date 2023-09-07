'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div>
            <Link href="/" className={`px-4 py-6 ${pathname === "/" ? "text-malibu hover:text-malibu-500 active:text-malibu-700" : "hover:text-malibu-200 active:text-malibu-500"}`}>Home</Link>
			<Link href="/work" className={`px-4 py-6 ${pathname === "/work" ? "text-malibu hover:text-malibu-500 active:text-malibu-700" : "hover:text-malibu-200 active:text-malibu-500"}`}>Work</Link>
			<Link href="/about" className={`px-4 py-6 ${pathname === "/about" ? "text-malibu hover:text-malibu-500 active:text-malibu-700" : "hover:text-malibu-200 active:text-malibu-500"}`}>About</Link>
			<Link href="/contact" className={`px-4 py-6 ${pathname === "/contact" ? "text-malibu hover:text-malibu-500 active:text-malibu-700" : "hover:text-malibu-200 active:text-malibu-500"}`}>Contact</Link>
        </div>
    );
};
