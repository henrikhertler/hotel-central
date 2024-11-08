'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { PageContent } from '../types/pageContent';
import { defineQuery } from 'groq';
import { client, sanityOptions } from '../sanity/client';
import { PortableText, PortableTextComponents } from '@portabletext/react';

const components: PortableTextComponents = {
	block: {
		normal: ({ children }) => <p>{children}</p>,
	},
};

export default function Frontpage() {
	const [content, setContent] = useState<PageContent | undefined>(undefined);

	useEffect(() => {
		void getContent();
	}, []);

	const getContent = async () => {
		const CONTENT_QUERY = defineQuery(`*[_type == 'page' && name == 'Frontpage'][0]{headline, content}`);
		setContent(await client.fetch<PageContent>(CONTENT_QUERY, {}, sanityOptions));
	};

	return (<>
			<div className='z-10 flex w-10/12 flex-col content-center self-center rounded bg-white p-6 text-center text-black md:max-w-md'>
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
		</>
	);
}
