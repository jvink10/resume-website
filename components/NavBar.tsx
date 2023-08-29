import Link from 'next/link';

export default function Navbar() {
    return (
        <div>
            <Link href="/">Home</Link>
			<Link href="/work" className="px-8">Work</Link>
			<Link href="/future">Future</Link>
			<Link href="/about" className="px-8">About</Link>
			<Link href="/contact">Contact</Link>
        </div>
    );
};
