import SupporterLogos from '@/components/supporterLogos';
import Link from 'next/link';

export default function Footer() {
	return <>
		<div
			className='z-10 mt-60 flex w-10/12 flex-col items-center justify-between self-center md:mt-16 md:w-1/2 md:flex-row md:items-start'>
			<div>
				<div className='rounded bg-white p-6 px-8 text-center text-black'>
					<p className='mb-4 uppercase tracking-wider'>Folge uns</p>
					<Link className='text-2xl' target='_blank' href='https://www.instagram.com/hotel__central/'>
						@hotel__central
					</Link>
				</div>
			</div>
		</div>

		<div className='z-10 mt-40 mb-60 w-1/2 self-center md:w-1/6'>
			<img src='/icon-smiley.svg' alt='Smileys Logo' className='inline-block' />
		</div>

		<SupporterLogos />

		<div className='z-10 mt-60 mb-12 self-center text-black'>
			<Link href={'/impressum'}>Impressum</Link>
		</div>
	</>;
}