'use client';
import { Accordion } from '@/components/festival/accordion';
import { workshopData } from '@/components/festival/festivalData';
import React from 'react';
import Link from 'next/link';

export default function Workshops() {
    return (
        <>
            {workshopData.map((data, index) => {
                return (
                    <div className='mt-8' key={`workshop-${index}`}>
                        <div className='inline-block ml-10 py-1 pl-4 pr-20 text-2xl text-black festivalDay'>
                            {data.day}
                        </div>
                        {data.workshops.map((workshop, index) => {
                            return (
                                <React.Fragment key={`workshop-event-${index}`}>
                                    {index >= 1 && <div className='border-b border-[#ffa3b5]' />}
                                    <Accordion
                                        time={workshop.time}
                                        title={workshop.title}
                                        pills={workshop.pills}
                                        subline={workshop.person.name}
                                        content={
                                            <div className='flex flex-col'>
                                                <div className='flex text-black flex-col md:flex-row'>
                                                    <div className='w-[150px]'>
                                                        <span
                                                            dangerouslySetInnerHTML={{
                                                                __html: workshop.person.description ?? '',
                                                            }}
                                                        />
                                                    </div>
                                                    <div className='grow'>
                                                        <span
                                                            dangerouslySetInnerHTML={{
                                                                __html: workshop.description,
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='text-black mt-2'>
                                                    <span
                                                        dangerouslySetInnerHTML={{
                                                            __html: workshop.price,
                                                        }}
                                                    />
                                                    <br />
                                                    <Link href={workshop.registerHref}>Jetzt anmelden</Link>
                                                </div>
                                            </div>
                                        }
                                    />
                                </React.Fragment>
                            );
                        })}
                    </div>
                );
            })}
        </>
    );
}
