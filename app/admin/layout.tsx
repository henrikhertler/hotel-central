import { ReactNode } from 'react';

export const metadata = {
	title: 'Admin Area – Hotel Central',
	description: 'Content management for Hotel Central',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
