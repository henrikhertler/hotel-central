'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { client, sanityOptions } from '../sanity/client';
import { defineQuery } from 'groq';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { PageContent } from '../types/pageContent';
import Image from 'next/image';

const components: PortableTextComponents = {
	block: {
		normal: ({ children }) => <p>{children}</p>,
	},
};

export default function Imprint() {
	const [small, setSmall] = useState(false);
	const [content, setContent] = useState<PageContent | undefined>(undefined);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', () => setSmall(window.scrollY > 32));
		}
		void getContent();

		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('scroll', () => setSmall(window.scrollY > 32));
			}
		};
	}, []);

	const getContent = async () => {
		const CONTENT_QUERY = defineQuery(`*[_type == 'page' && name == 'Impressum'][0]{name, content}`);
		setContent(await client.fetch<PageContent>(CONTENT_QUERY, {}, sanityOptions));
	};

	return (
		<section className='flex flex-col content-center'>
			<div
				className={`flex mt-4 justify-center text-black self-center ${
					small ? 'md:w-1/5 w-1/2' : ' md:w-1/3 w-1/2'
				} fixed z-0 ease-in-out duration-300`}>
				<Link href={'/'}>
					<Image
						src='/wordmark-round.svg'
						width={483}
						height={207}
						alt='Hotel Central Logo'
						className='inline-block'
						unoptimized
					/>
				</Link>
			</div>

			<div className='flex flex-col self-center p-6 bg-white content-center text-black text-center rounded md:mt-56 mt-40 md:max-w-md w-10/12 z-10'>
				{content && (
					<>
						<p className='uppercase tracking-wider mb-4'>{content.headline}</p>
						<PortableText value={content.content} components={components} />
					</>
				)}
			</div>

			<div className='self-center mt-60 text-black mb-12 z-10'>
				<Link href={'/'}>Home</Link>
			</div>
		</section>
	);
}
