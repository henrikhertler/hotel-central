import { Metadata } from 'next';
import Events from '@/components/events';

export const metadata: Metadata = {
	title: 'Events – Hotel Central',
};

export default function EventsPage() {
	return <Events />
}
