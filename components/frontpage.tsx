'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import SupporterLogos from '@/components/supporterLogos';
import { PageContent } from '../types/pageContent';
import { defineQuery } from 'groq';
import { client, sanityOptions } from '../sanity/client';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { EventContent } from '../types/eventContent';
import EventItem from '@/components/eventItem';

const components: PortableTextComponents = {
	block: {
		normal: ({ children }) => <p>{children}</p>,
	},
};

export default function Frontpage() {
	const [content, setContent] = useState<PageContent | undefined>(undefined);
	const [events, setEvents] = useState<EventContent[] | undefined>(undefined);

	useEffect(() => {
		void getContent();
		void getEvents();
	}, []);

	const getContent = async () => {
		const CONTENT_QUERY = defineQuery(`*[_type == 'page' && name == 'Frontpage'][0]{headline, content}`);
		setContent(await client.fetch<PageContent>(CONTENT_QUERY, {}, sanityOptions));
	};

	const getEvents = async () => {
		const EVENT_QUERY = defineQuery(`*[_type == 'event'] | order(date desc) {date, name, location}`);
		setEvents(await client.fetch<EventContent[]>(EVENT_QUERY, {}, sanityOptions));
	};

	return (
		<section id='frontpage' className='flex flex-col content-center'>
			<div className='z-10 mt-36 flex w-10/12 flex-col content-center self-center rounded bg-white p-6 text-center text-black md:mt-64 md:max-w-md'>
				<p className='mb-4 uppercase tracking-wider'>{content?.headline}</p>
				{content && <PortableText value={content.content} components={components} />}
			</div>

			<div className='z-10 mt-40 flex w-10/12 flex-col items-center justify-between self-center md:mt-16 md:w-1/2 md:flex-row md:items-start'>
				<div>
					<div className='rounded bg-white p-6 px-8 text-center text-black'>
						<p className='mb-4 uppercase tracking-wider'>Folge uns</p>
						<Link className='text-2xl' target='_blank' href='https://www.instagram.com/hotel__central/'>
							@hotel__central
						</Link>
					</div>
					<div className='mt-20 rounded bg-white p-6 px-8 text-center text-black'>
						<p className='mb-4 uppercase tracking-wider'>Werde Mitglied!</p>
						<Link className='text-2xl' target='_blank' href='/HotelCentral_230719_Mitgliedschaftsantrag.pdf'>
							Download Antrag
						</Link>
					</div>
				</div>
				<Link href='/festival/2024'>
					<div className='text-white md:mt-8 mt-40 rounded p-6 px-8 text-center bg-[var(--violet)]'>
						<p className='mb-4 pt-3 uppercase tracking-wider'>
							Festival
							<br />
							Hotel Central
						</p>
					</div>
				</Link>
			</div>

			<div className='z-10 mb-20 mt-40 flex w-10/12 flex-col items-center justify-end self-center md:mt-16 md:w-1/2 md:flex-row'>
				<Link href={'https://soundcloud.com/lobby-radio'} target={'_blank'}>
					<div className='mt-40 mr-14 flex flex-col items-center rounded bg-black p-6 px-12 text-center text-white md:mt-8'>
						<p className='mb-4 uppercase tracking-wider'>
							Folge unserem <br /> lobby radio
						</p>
						<img src={'/icon__lobby--radio.svg'} alt={'lobby radio'} width='100px' />
					</div>
				</Link>
			</div>

			{events?.map(({ date, name, location }, index) => (
				<EventItem key={name} index={index} date={date} name={name} location={location} />
			))}

			<div className='z-10 mt-60 mb-60 w-1/2 self-center md:w-1/6'>
				<img src='/icon-smiley.svg' alt='Smileys Logo' className='inline-block' />
			</div>

			<SupporterLogos />

			<div className='z-10 mt-60 mb-12 self-center text-black'>
				<Link href={'/impressum'}>Impressum</Link>
			</div>
		</section>
	);
}
