import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Jordan Vink',
  	description: 'Resume website of Jordan Vink',
}

export default function RootLayout({
  	children,
}: {
  	children: React.ReactNode
}) {
  	return (
    	<html lang="en">
      		<body className={`${inter.className} flex flex-col min-h-screen`}>
				<header className="py-4 bg-zinc-800">
					<div className="container mx-auto px-4">
						<h1 className="text-xl text-white font-bold">Jordan Vink</h1>
					</div>
				</header>
      			{children}
				<Analytics />
				<footer className="py-4 bg-zinc-100">
					<div className="container mx-auto px-4">
						<p className="text-center text-black">Footer</p>
					</div>
				</footer>
      		</body>
    	</html>
  	)
}
