'use client';
import { useEffect, useState } from 'react';
import { client, sanityOptions } from '../sanity/client';
import { defineQuery } from 'groq';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { PageContent } from '../types/pageContent';

const components: PortableTextComponents = {
	block: {
		normal: ({ children }) => <p>{children}</p>,
	},
};

export default function Vision() {
	const [content, setContent] = useState<PageContent | undefined>(undefined);

	useEffect(() => {
		void getContent();
	}, []);

	const getContent = async () => {
		const CONTENT_QUERY = defineQuery(`*[_type == 'page' && name == 'Vision'][0]{headline, content}`);
		setContent(await client.fetch<PageContent>(CONTENT_QUERY, {}, sanityOptions));
	};

	return (
			<div
				className='z-10 flex w-10/12 flex-col content-center self-center rounded bg-white p-6 text-center text-black md:max-w-md'>
				<p className='mb-4 uppercase tracking-wider'>{content?.headline}</p>
				{content && <PortableText value={content.content} components={components} />}
			</div>
	);
}
