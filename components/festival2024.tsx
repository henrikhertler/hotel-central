'use client';

import { createMouseSpinner, imageAroundMouse } from '../utility/animations';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import LogoHotelCentral from '@/components/icons/hotelCentral';
import SmileyRing from '@/components/icons/smiley';

export default function Festival2024() {
	const smileyRef = useRef<any>();

	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useLayoutEffect(() => {
		if (smileyRef.current) {
			createMouseSpinner(smileyRef.current);
		}
	}, [isMounted]);

	if (!isMounted) {
		return null;
	}

	return (
		<div className={'content pt-[80px]'}>
			<section className='flex h-full flex-col p-6 mb-[10rem]'
					 onMouseMove={e => imageAroundMouse(e, smileyRef.current)}>
				<div ref={smileyRef} className='pointer-events-none smiley'>
					<SmileyRing />
				</div>

				<div className='text-center text-black heroText text-[6rem]'>
					<p className={'italic leading-[4.4rem]'}>Festival<br />Hotel<br />Central</p>
					<p className={'leading-[4.2rem]'}>Inter<br />Change<br />05.–17.<br />Nov. 24</p>
				</div>
			</section>
			<section className={'w-full fixed bottom-0 flex justify-around h-[5rem]'}>
				<div className={'bubble w-2/12 p-2'}>
					<img src='/icon__initiative--musik.svg' alt='Initiative Musik'
						 className='self-center' />
				</div>
				<div className={'bubble w-2/12 p-2'}>
					<img src='/icon_stuttgart.svg' alt='Stadt Stuttgart' className='self-center' />
				</div>
				<div className={'bubble w-2/12 p-2'}>
					<img src='/icon_popbuero.png' alt='Pop-Büro Region Stuttgart'
						 className='self-center' />
				</div>
				<div className={'bubble w-4/12 py-2'}>
					<SmileyRing className={'self-center text-white'} />
					<SmileyRing className={'self-center text-white'} />
					<SmileyRing className={'self-center text-white'} />
					<SmileyRing className={'self-center text-white hidden sm:block'} />
					<SmileyRing className={'self-center text-white hidden md:block'} />
				</div>
				<div className={'bubble w-2/12 p-2'}>
					<LogoHotelCentral className={'self-center text-white'} />
				</div>
			</section>
		</div>
	);
}