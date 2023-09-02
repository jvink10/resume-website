import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

import MobileNavBar from '../components/nav/MobileNavBar';
import Navbar from '../components/nav/NavBar';
import GithubIcon from '../components/nav/GithubIcon';
import LinkedinIcon from '../components/nav/LinkedinIcon';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Jordan Vink',
  	description: 'Web development and design - Jordan Vink',
};

export default function RootLayout({
  	children,
}: {
  	children: React.ReactNode
}) {
  	return (
    	<html lang="en">
      		<body className={`${inter.className} flex flex-col min-h-screen text-white`}>
				<header className="bg-slate-800">
					<div className="px-8 lg:px-16 text-center lg:text-left">
						<h1 className="inline-block py-6 text-xl font-bold">
							<p className="sm:inline">Jordan Vink</p>
							<p className="hidden sm:inline"> | </p>
							<p className="sm:inline">Full Stack Web Developer</p>
						</h1>
						<div className="inline-block lg:hidden float-left">
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
