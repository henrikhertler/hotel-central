'use client';
import React, { useRef, useState } from 'react';

interface AccordionProps {
    time: string;
    title: string;
    subline: string;
    content: React.ReactNode;
    pills: string[];
}

export const Accordion: React.FC<AccordionProps> = ({ time, title, pills, subline, content }) => {
    const [active, setActive] = useState(false);
    const [height, setHeight] = useState('0px');
    const [rotate, setRotate] = useState('transform duration-700 ease');

    const contentSpace = useRef(null);

    function toggleAccordion() {
        setActive((prevState) => !prevState);
        // @ts-ignore
        setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`);
        setRotate(active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-180');
    }

    return (
        <div className='flex flex-col bg-[#F5F5F5] px-4'>
            <div className='py-6 box-border appearance-none focus:outline-none flex flex-col md:flex-row items-center'>
                <p className='inline-block text-left text-black md:w-[150px] md:mt-[12px] pb-4 md:pb-0'>{time}</p>
                <div className='flex flex-col md:flex-row justify-center items-center grow'>
                    <div className='flex flex-col items-start grow'>
                        <div>
                            {pills.map((pill, index) => {
                                return (
                                    <span key={index} className='pill inline-block text-xs px-2 py-1 mr-2'>
                                        {pill}
                                    </span>
                                );
                            })}
                        </div>
                        <p className='inline-block text-black'>{title}</p>
                        <p className='inline-block text-black text-xs'>
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: subline,
                                }}
                            />
                        </p>
                    </div>
                    <div
                        onClick={toggleAccordion}
                        className={`cursor-pointer bg-[#ffa3b5] rounded-full inline-block ${rotate}`}>
                        <svg
                            className='fill-current text-white'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            width='24'
                            height='24'>
                            <path fill='none' d='M0 0h24v24H0z' />
                            <path fill='currentColor' d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z' />
                        </svg>
                    </div>
                </div>
            </div>
            <div
                ref={contentSpace}
                style={{ maxHeight: `${height}` }}
                className='overflow-auto transition-max-height duration-700 ease-in-out'>
                <div className='pb-10'>{content}</div>
            </div>
        </div>
    );
};
