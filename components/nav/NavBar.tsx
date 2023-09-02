'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div>
            <Link href="/" className={`px-4 py-6 ${pathname === "/" ? "font-bold" : ""}`}>Home</Link>
			<Link href="/work" className={`px-4 py-6 ${pathname === "/work" ? "font-bold" : ""}`}>Work</Link>
			<Link href="/about" className={`px-4 py-6 ${pathname === "/about" ? "font-bold" : ""}`}>About</Link>
			<Link href="/contact" className={`px-4 py-6 ${pathname === "/contact" ? "font-bold" : ""}`}>Contact</Link>
        </div>
    );
};
