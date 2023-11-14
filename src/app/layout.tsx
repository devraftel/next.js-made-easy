import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Intercepting Routes',
	description: 'Created using nex.js by DevRaftel',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			className={inter.className}
		>
			<body className='bg-slate-950'>
				<Nav />
				{children}
			</body>
		</html>
	);
}
