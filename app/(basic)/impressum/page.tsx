import Imprint from '@/components/impressum';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Impressum – Hotel Central',
};

export default function ImpressumPage() {
	return <Imprint />;
}
