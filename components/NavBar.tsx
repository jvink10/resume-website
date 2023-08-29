import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="space-x-8">
            <Link href="/">Home</Link>
			<Link href="/work">Work</Link>
			<Link href="/future">Future</Link>
			<Link href="/about">About</Link>
			<Link href="/contact">Contact</Link>
        </div>
    );
};
