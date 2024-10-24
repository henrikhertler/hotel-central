'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
	const pathname = usePathname();

	const [small, setSmall] = useState(false);

	const active = (pageSlug: string) => pathname === pageSlug;

	const menuItems = [
		{ name: 'Der Verein', href: '/' },
		{ name: 'Vision', href: '/vision' },
		{
			name: 'Festival', href: '/festival/2024', subItems: [
				{ name: '2023', href: '/festival/2024' },
				{ name: '2024', href: '/festival/2024' },
			]
		},
		{ name: 'Mitglied werden', href: '/mitglied-werden' }
	];

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', () => setSmall(window.scrollY > 32));
		}

		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('scroll', () => setSmall(window.scrollY > 32));
			}
		};
	}, []);

	return (
		<div className={'fixed w-full'}>
			<div className='m-auto flex max-w-screen-lg flex-col'>
				<div
					className={`flex mt-4 justify-center text-black self-center ${
						small ? 'md:w-1/5 w-1/2' : ' md:w-1/3 w-1/2'
					} z-0 ease-in-out duration-300 max-w-xl`}>
					<Link href={'/'} className={'height-100'}>
						<Image
							src='/wordmark-round.svg'
							width={483}
							height={207}
							alt='Hotel Central Logo'
							className='inline-block'
							unoptimized
						/>
					</Link>
				</div>

				<nav>
					<div className='mx-auto flex max-w-screen-xl justify-center p-4'>
						<button type='button' className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500
								hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden'>
							<span className='sr-only'>Open main menu</span>
							<svg className='h-5 w-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none'
								 viewBox='0 0 17 14'>
								<path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
									  d='M1 1h15M1 7h15M1 13h15' />
							</svg>
						</button>
						<div className='hidden w-full md:block md:w-auto'>
							<ul className='mt-4 flex flex-col rounded-lg p-4 font-medium rtl:space-x-reverse md:space-x-8 md:mt-0
							md:flex-row md:border-0 md:p-0'>
								{menuItems.map((item, index) => {
									if (item.subItems) {
										return (
											<li key={item.name}
												className={'group relative dropdown flex w-full items-center justify-between ' +
													'rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:w-auto md:border-0 md:p-0 ' +
													'md:pb-1 md:hover:bg-transparent md:hover:text-[#ffa3b5] cursor-pointer'}
											>
												{item.name}
												<svg
													className='w-2.5 h-2.5 ms-2.5' aria-hidden='true'
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 10 6'>
													<path stroke='currentColor' strokeLinecap='round'
														  strokeLinejoin='round'
														  strokeWidth='2'
														  d='m1 1 4 4 4-4' />
												</svg>

												<div className='group-hover:block dropdown-menu absolute hidden h-auto top-8 -left-1/3'>
													<div className={`z-10 rounded-lg bg-white font-normal shadow divide-y divide-gray-100`}>
														<ul className='flex flex-row text-sm text-gray-700'>
															{item.subItems.map((subItem) => {
																return (<li key={subItem.name}>
																	<Link href={subItem.href}
																		  className='block px-4 py-2 hover:bg-[#fbe5e9]'>{subItem.name}</Link>
																</li>);
															})}
														</ul>
													</div>
												</div>
											</li>
									);
									} else {
										return (
											<li key={item.name}>
												<Link href={item.href}
													  className={`block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0
													  md:p-0 md:hover:bg-transparent md:hover:text-[#ffa3b5] ${active(item.href) ? 'underline underline-offset-8' : ''}`}>
													{item.name}
												</Link>
											</li>
										);
									}
								})}
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
}