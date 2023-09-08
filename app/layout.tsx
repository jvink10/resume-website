import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Image from 'next/image';

import MobileNavBar from '../components/nav/MobileNavBar';
import Navbar from '../components/nav/NavBar';
import GithubIcon from '../components/nav/GithubIcon';
import LinkedinIcon from '../components/nav/LinkedinIcon';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Jordan Vink',
  	description: 'Jordan Vink - Vink Web Development - Web Development And Design Portfolio',
};

export default function RootLayout({
  	children,
}: {
  	children: React.ReactNode
}) {
  	return (
    	<html lang="en">
      		<body className={`${inter.className} flex flex-col min-h-screen text-white`}>
				<header className="border-b border-white border-opacity-25 bg-malibu-700">
					<div className="flex flex-row-reverse lg:flex-row justify-between px-8 lg:px-16">
						<h1 className="inline-block py-6 text-xl font-bold">
							<p className="inline">Jordan Vink</p>
							<p className="hidden sm:inline"> | </p>
							<p className="hidden sm:inline">Full Stack Web Developer</p>
						</h1>
						<div className="block lg:hidden">
							<MobileNavBar />
						</div>
						<div className="hidden lg:block mt-6">
							<Navbar />
						</div>
					</div>
				</header>
      			{children}
				<Analytics />
				<footer className="bg-malibu-700">
					<div className="md:grid md:grid-cols-3 md:grid-rows-1 md:gap-4 md:place-items-center text-center">
						<div className="pt-8 sm:pt-6 md:pt-0 pb-6 sm:pb-0">
							<Image src="/brand/logo-transparent-no-slogan.png" alt="Vink Web Development logo" width={200} height={56} />
						</div>
						<div className="hidden sm:block md:pt-6 pb-6">
							<Navbar />
						</div>
						<div className="hidden md:block py-6">
							<div className="inline-block pr-2">
								<GithubIcon />
							</div>
							<div className="inline-block">
								<LinkedinIcon />
							</div>
						</div>
					</div>
					<div className="mx-16 lg:mx-32 border-t border-white border-opacity-25 py-8">
						<p className="text-center">&copy; {new Date().getFullYear()} Jordan Vink. All rights reserved.</p>
					</div>
				</footer>
      		</body>
    	</html>
  	);
};
