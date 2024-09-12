'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';
import SmileyRing from '@/components/icons/smiley';
import LogoSmiley from '@/components/icons/logoSmiley';
import RosaGraph from '@/components/icons/rosaGraph';
import SupporterLogos from '@/components/supporterLogos';
import Link from 'next/link';
import { creatMouseSpinner, imageAroundMouse, triaAnimation, welcomeTextAnimation } from '../utility/animations';
import Workshops from '@/components/festival/workshops';
import Marathon from '@/components/festival/marathon';
import HotelCentralFestival from '@/components/festival/hotelCentral';
import FestivalPeople from '@/components/festival/festivalPeople';

enum PROG_STATE {
	workshop = 'workshop',
	festival = 'festival',
	hotel = 'hotel',
}

export default function FestivalComponent() {
	const smileyRef = useRef<any>();
	const tria_1 = useRef<any>();
	const tria_2 = useRef<any>();
	const tria_3 = useRef<any>();
	const word_1 = useRef<any>();
	const word_2 = useRef<any>();
	const word_3 = useRef<any>();
	const word_4 = useRef<any>();
	const word_5 = useRef<any>();
	const word_6 = useRef<any>();

	const [progState, setProgState] = useState(PROG_STATE.workshop);

	useLayoutEffect(() => {
		if (smileyRef.current) {
			creatMouseSpinner(smileyRef.current);
		}

		if (tria_1.current && tria_2.current && tria_3.current) {
			triaAnimation(tria_1.current, tria_2.current, tria_3.current);
		}

		if (word_1.current && word_2.current && word_3.current && word_4.current && word_5.current && word_6.current) {
			welcomeTextAnimation(
				word_1.current,
				word_2.current,
				word_3.current,
				word_4.current,
				word_5.current,
				word_6.current,
			);
		}
	}, [smileyRef.current]);

	return (
		<section className='flex flex-col content-center' onMouseMove={e => imageAroundMouse(e, smileyRef.current)}>
			<div ref={smileyRef} className='smiley pointer-events-none'>
				<SmileyRing />
			</div>
			<div className='big-text relative text-center text-[5rem] leading-[5.5rem] md:text-[8rem] md:leading-[7.5rem] overflow-hidden'>
				<div
					ref={tria_1}
					className='triangle top-[0] md:top-[80px] w-[250%] left-[-75%] md:w-[100%] md:left-[0]'
				/>
				<div
					ref={tria_2}
					className='triangle top-[75px] md:top-[210px] w-[250%] left-[-75%] md:w-[100%] md:left-[0]'
				/>
				<div
					ref={tria_3}
					className='triangle top-[175px] md:top-[340px] w-[250%] left-[-75%] md:w-[100%] md:left-[0]'
				/>
				<div className='text'>
					<p ref={word_1}>Culture</p>
					<p className='hidden' ref={word_4}>
						Hotel
					</p>
				</div>
				<br />
				<div className='text'>
					<p ref={word_2} className='relative'>
						all
					</p>
					<p className='hidden relative' ref={word_5}>
						Central
					</p>
				</div>
				<br />
				<div className='text'>
					<p ref={word_3}>inclusive</p>
					<p className='hidden' ref={word_6}>
						Festival
					</p>
				</div>
			</div>

			<div className='description md:mt-[-4px]'>
				<div className='location flex'>
					<span>Hotel Central Steinstraße 13, 70173 Stuttgart</span>
				</div>
				<div className='info'>
					<span>Festival für Musik,</span>
					<br />
					<span>Kultur & Austausch</span>
					<br />
					<span>in Stuttgart</span>
				</div>
			</div>

			<div className='date flex flex-col'>
				<span className='text-[1.5rem] md:text-[2.5rem]'>01. – 19. November 2023</span>
				<span className='self-end'>
					für Kreative, Musiker*innen, <br />
					Partygänger*innen und Interessierte
				</span>
			</div>

			<div className='w-full flex flex-col justify-center items-center pt-[340px] md:pt-[220px] p-6'>
				<LogoSmiley className='w-[80%] md:w-[40%] text-white' />
				<RosaGraph className='w-[30%] absolute left-[-20px]' />
			</div>

			<div className='w-3/4 self-center'>
				<div className='flex flex-col md:flex-row self-center bg-[#F5F5F5] text-[#ffa3b5] text-2xl cursor-pointer'>
					<div
						onClick={() => setProgState(PROG_STATE.workshop)}
						className={`w-full md:w-1/2 p-2 ${
							progState === PROG_STATE.workshop ? 'text-black bg-[#ffa3b5]' : ''
						}`}>
						Workshop Suite
					</div>
					<div
						onClick={() => setProgState(PROG_STATE.festival)}
						className={`w-full md:w-1/2 p-2 ${
							progState === PROG_STATE.festival ? 'text-black bg-[#ffa3b5]' : ''
						}`}>
						Festival Marathon
					</div>
					<div
						onClick={() => setProgState(PROG_STATE.hotel)}
						className={`w-full md:w-1/2 p-2 ${
							progState === PROG_STATE.hotel ? 'text-black bg-[#ffa3b5]' : ''
						}`}>
						Hotel Central
					</div>
				</div>
				{progState === PROG_STATE.workshop && (
					<>
						<Workshops />
						<FestivalPeople />
					</>
				)}
				{progState === PROG_STATE.festival && <Marathon />}
				{progState === PROG_STATE.hotel && <HotelCentralFestival />}
			</div>

			<div className='flex justify-center pt-[220px] md:pt-[20px] pb-[100px]'>
				<SupporterLogos />
			</div>

			<div className='self-center text-black mb-12 z-10'>
				<Link href={'/impressum'}>Impressum</Link>
			</div>
		</section>
	);
}
