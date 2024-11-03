import FestivalComponent from '@/components/festival2023';

export const metadata = {
	title: 'Hotel Central Festival | 01. – 19. November 2023',
	description:
		'Das „Hotel Central“ ist ein digitaler und realer Ort mit dem Ziel, kreative Persönlichkeiten unterschiedlicher Disziplinen zu vernetzen und in ihrer Entwicklung zu unterstützen.',
	openGraph: {
		images: '/og-festival.jpg',
		type: 'website',
		siteName: 'Hotel Central',
		url: 'https://www.welcome-to-hotel-central.eu/festival/2023'
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico'
	},
	metadataBase: new URL('https://www.welcome-to-hotel-central.eu'),
	twitter: {
		card: 'summary_large_image'
	},
	robots: {
		index: true,
		follow: true
	}
};

export default function Festival() {
	return (
		<main id='festival'>
			<FestivalComponent />
		</main>
	);
}
