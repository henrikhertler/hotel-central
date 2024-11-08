import SupporterLogos from '@/components/supporterLogos';
import Link from 'next/link';

export default function Footer() {
	return <>
		<div className='z-10 mt-60 mb-60 w-1/2 self-center md:w-1/6'>
			<img src='/icon-smiley.svg' alt='Smileys Logo' className='inline-block' />
		</div>

		<SupporterLogos />

		<div className='z-10 mt-60 mb-12 self-center text-black'>
			<Link href={'/impressum'}>Impressum</Link>
		</div>
	</>;
}