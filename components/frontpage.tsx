'use client';

import { useEffect, useState } from 'react';
import { PageContent } from '../types/pageContent';
import { defineQuery } from 'groq';
import { client, sanityOptions } from '../sanity/client';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';
import { getImageDimensions, SanityImageSource } from '@sanity/asset-utils';
import Image from 'next/image';

const components: PortableTextComponents = {
	block: {
		normal: ({ children }) => <p>{children}</p>
	},
	types: {
		image: ({ value, renderNode }) => {
			const urlFor = (source: SanityImageSource) => builder.image(source);
			const builder = imageUrlBuilder(client);
			const { width, height } = getImageDimensions(value);
			return <Image width={width} height={height} src={urlFor(value).url()} alt={value.alt ?? 'Hotel Central'} className={'self-center'} />;
		}
	}
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

	return (
		<div
			className='z-10 flex w-10/12 flex-col content-center self-center rounded bg-white p-6 text-center text-black md:max-w-xl'>
			<p className='mb-4 uppercase tracking-wider'>{content?.headline}</p>
			{content && <PortableText value={content.content} components={components} />}
		</div>
	);
}
