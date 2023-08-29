import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Link from 'next/link';

import MovileNavBar from '../components/MobileNavBar';
import Navbar from '../components/NavBar';
import GithubIcon from '../components/GithubIcon';
import LinkedinIcon from '../components/LinkedinIcon';
import MobileNavBar from '../components/MobileNavBar';

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
					<div className="px-8 lg:px-16 text-center lg:text-left">
						<h1 className="inline text-xl font-bold">Jordan Vink | Full Stack Web Developer</h1>
						<div className="inline-block lg:hidden float-right">
							<MobileNavBar />
						</div>
						<div className="hidden lg:block lg:inline lg:float-right">
							<Navbar />
						</div>
					</div>
				</header>
      			{children}
				<Analytics />
				<footer className="bg-slate-600">
					<div className="md:grid md:grid-cols-3 md:grid-rows-1 md:gap-4 md:place-items-center pb-6 pt-8 md:pb-8 text-center">
						<div className="hidden md:block">
							<p>Logo</p>
						</div>
						<div className="hidden sm:block">
							<Navbar />
						</div>
						<div className="sm:pt-6 md:pt-0">
							<div className="inline-block pr-2">
								<GithubIcon />
							</div>
							<div className="inline-block">
								<LinkedinIcon />
							</div>
						</div>
					</div>
					<div className="mx-16 lg:mx-32 border-t border-slate-400 py-8">
					<p className="text-center">&copy; {new Date().getFullYear()} Jordan Vink. All rights reserved.</p>
					</div>
				</footer>
      		</body>
    	</html>
  	);
};
