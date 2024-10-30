import '@/styles/main.css';
import '@/styles/chrome-bug.css';
import { ReactNode } from 'react';

export default function FestivalLayout({ children }: { children: ReactNode }) {
	return (
		<html>
		<body>{children}</body>
		</html>
	);
}
