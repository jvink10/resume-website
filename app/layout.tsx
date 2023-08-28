import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Link from 'next/link';

import LinkedinIcon from '../components/LinkedinIcon';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Jordan Vink',
  	description: 'Resume website of Jordan Vink',
};

export default function RootLayout({
  	children,
}: {
  	children: React.ReactNode
}) {
  	return (
    	<html lang="en">
      		<body className={`${inter.className} flex flex-col min-h-screen text-white`}>
				<header className="py-6 bg-slate-800">
					<div className="container mx-auto px-4">
						<h1 className="text-xl font-bold">Jordan Vink | Full Stack Web Developer</h1>
					</div>
				</header>
      			{children}
				<Analytics />
				<footer className="bg-slate-600">
					<div className="grid grid-cols-3 grid-rows-1 gap-4 place-items-center py-8">
						<div>
							<p>Logo</p>
						</div>
						<div>
							<Link href="/">Home</Link>
						</div>
						<div>
							<LinkedinIcon />
						</div>
					</div>
					<div className="mx-32 border-t border-slate-400 py-8">
					<p className="text-center">&copy; {new Date().getFullYear()} Jordan Vink. All rights reserved.</p>
					</div>
				</footer>
      		</body>
    	</html>
  	);
};
