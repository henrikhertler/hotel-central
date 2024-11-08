import { Metadata } from 'next';
import Vision from '@/components/vision';

export const metadata: Metadata = {
	title: 'Vision – Hotel Central',
};

export default function VisionPage() {
	return <Vision />;
}
