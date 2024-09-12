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
						{data.events.map((event, index) => {
							return (
								<React.Fragment key={`marathon-event-${index}`}>
									{index >= 1 && <div className='border-b border-[#ffa3b5]' />}
									<Accordion
										time={event.time}
										title={event.title}
										pills={event.pills}
										subline={event.person?.name ?? ''}
										content={
											<>
												<div className='flex text-black flex-col md:flex-row'>
													<div className='grow'>
														<span
															dangerouslySetInnerHTML={{
																__html: event.description,
															}}
														/>
													</div>
												</div>
												<div className='text-black mt-2'>
													<span
														dangerouslySetInnerHTML={{
															__html: event.price ?? '',
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
