'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { client, sanityOptions } from '../sanity/client';
import { defineQuery } from 'groq';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { PageContent } from '../types/pageContent';

const components: PortableTextComponents = {
	block: {
		normal: ({ children }) => <p>{children}</p>,
	},
};

export default function Imprint() {
	const [content, setContent] = useState<PageContent | undefined>(undefined);

	useEffect(() => {
		void getContent();
	}, []);

	const getContent = async () => {
		const CONTENT_QUERY = defineQuery(`*[_type == 'page' && name == 'Impressum'][0]{headline, content}`);
		setContent(await client.fetch<PageContent>(CONTENT_QUERY, {}, sanityOptions));
	};

	return (
		<section className='flex flex-col content-center'>
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
