'use client';

import React, { useLayoutEffect, useRef } from 'react';
import SmileyRing from '@/components/icons/smiley';
import LogoSmiley from '@/components/icons/logoSmiley';
import RosaGraph from '@/components/icons/rosaGraph';
import SupporterLogos from '@/components/supporterLogos';
import Link from 'next/link';
import { creatMouseSpinner, imageAroundMouse, triaAnimation, welcomeTextAnimation } from '../utility/animations';

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
        <section className='flex flex-col content-center' onMouseMove={(e) => imageAroundMouse(e, smileyRef.current)}>
            <div ref={smileyRef} className='smiley'>
                <SmileyRing />
            </div>
            <div className='big-text text-center text-[5rem] leading-[5.5rem] md:text-[8rem] md:leading-[7.5rem]'>
                <div ref={tria_1} className='triangle top-[80px]' />
                <div ref={tria_2} className='triangle top-[210px]' />
                <div ref={tria_3} className='triangle top-[340px]' />
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

            <div className='description md:mt-[-10px]'>
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
                <span className='text-[2rem] md:text-[2.5rem]'>01. – 19. November 2023</span>
                <span className='self-end'>
                    für Kreative, Musiker*innen, <br />
                    Partygänger*innen und Interessierte
                </span>
            </div>

            <div className='w-full flex flex-col justify-center items-center pt-[120px] md:pt-[220px] p-6'>
                <LogoSmiley className='w-[40%] text-white' />
                <RosaGraph className='w-[30%] absolute left-[-20px]' />
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
