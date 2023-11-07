'use client';
import { Accordion } from '@/components/festival/accordion';
import { marathonData } from '@/components/festival/festivalData';
import React from 'react';

export default function Marathon() {
    return (
        <>
            {marathonData.map((data, index) => {
                return (
                    <div key={`marathon-${index}`} className='mt-8'>
                        <div className='inline-block ml-10 py-1 pl-4 pr-20 text-2xl text-black festivalDay'>
                            {data.day}
                        </div>
                        {data.workshops.map((workshop, index) => {
                            return (
                                <React.Fragment key={`marathon-event-${index}`}>
                                    {index >= 1 && <div className='border-b border-[#ffa3b5]' />}
                                    <Accordion
                                        time={workshop.time}
                                        title={workshop.title}
                                        pills={workshop.pills}
                                        subline={workshop.person?.name ?? ''}
                                        content={
                                            <>
                                                <div className='flex text-black flex-col md:flex-row'>
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
                                                            __html: workshop.price ?? '',
                                                        }}
                                                    />
                                                </div>
                                            </>
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
