'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import SupporterLogos from '@/components/supporterLogos';

export default function Frontpage() {
    const [small, setSmall] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => setSmall(window.scrollY > 32));
        }
    }, []);

    return (
        <section id='frontpage' className='flex flex-col content-center'>
            <div
                className={`flex mt-4 justify-center text-black self-center ${
                    small ? 'md:w-1/5 w-1/2' : ' md:w-1/3 w-1/2'
                } fixed z-0 ease-in-out duration-300`}>
                <img src='/wordmark-round.svg' alt='Hotel Central Logo' className='inline-block' />
            </div>

            <div className='flex flex-col self-center p-6 bg-white content-center text-black text-center rounded md:mt-56 mt-40 md:max-w-md w-10/12 z-10'>
                <p className='uppercase tracking-wider mb-4'>PUBLIC ANNOUNCEMENT</p>
                <p>
                    Das „Hotel Central“ ist ein digitaler und realer Ort mit dem Ziel, kreative Persönlichkeiten
                    unterschiedlicher Disziplinen zu vernetzen und in ihrer Entwicklung zu unterstützen. Unseren Gästen
                    stellen wir Räumlichkeiten, Ausstattung sowie Veranstaltungs- und Netzwerkplattformen zur Verfügung,
                    um ihr kreatives Arbeiten zu unterstützen. Wir heißen in unserem imaginären Hotel die
                    unterschiedlichsten Menschen aus allen denkbaren, kreativen Bereichen willkommen. Gemeinsam
                    verbringen sie Zeit in unserem Haus, diskutieren ihre Ideen, arbeiten an interdisziplinären
                    Projekten mit Bezug zu Musik, Kunst, Fotografie, Design und Kultur und schaffen kreativen Output mit
                    nachhaltigem und relevanten Stellenwert.
                    <br />
                    <br />
                    JEDER GAST BRINGT SEINE GESCHICHTE UND SEIN TALENT MIT. SO ENTSTEHEN NEUE ETAGEN UND DAS HOTEL
                    CENTRAL ERWACHT ZUM LEBEN.
                    <br />
                    <br />
                    Der Austausch zwischen bekannten Professionals und jungen, aufstrebenden Kreativen ist ein wichtiger
                    Bestandteil unserer Idee. Hierbei greifen wir auf unsere langjährige Erfahrung und Kenntnisse über
                    die ansässige Subkultur zurück und bringen etablierte Protagonist:innen mit jungen Talenten
                    zusammen. Wir glauben nicht nur daran, dass kreative Projekte besser werden, wenn verschiedene
                    Menschen mit unterschiedlichem Background daran arbeiten. Wir glauben auch daran, dass die Welt eine
                    bessere ist, wenn sich Menschen gegenseitig inspirieren, unterstützen und gemeinsam an der
                    Realisierung arbeiten.
                    <br />
                    <br />
                    <br />
                    Hotel Central e.V. ist ein Verein, der alle dazu einlädt, Teil unserer Vision und Idee zu werden.
                </p>
            </div>

            <div className='flex md:flex-row flex-col md:items-start items-center justify-between md:mt-16 mt-40 self-center md:w-1/2 w-10/12 z-10'>
                <div>
                    <div className='bg-white text-black rounded p-6 px-8 text-center'>
                        <p className='uppercase tracking-wider mb-4'>Folge uns</p>
                        <a className='text-2xl' target='_blank' href='https://www.instagram.com/hotel__central/'>
                            @hotel__central
                        </a>
                    </div>
                    <div className='bg-white text-black rounded p-6 px-8 text-center mt-20'>
                        <p className='uppercase tracking-wider mb-4'>Werde Mitglied!</p>
                        <a className='text-2xl' target='_blank' href='/HotelCentral_230719_Mitgliedschaftsantrag.pdf'>
                            Download Antrag
                        </a>
                    </div>
                </div>
                <Link href='/festival'>
                    <div className='text-white md:mt-8 mt-40 rounded p-6 px-8 text-center bg-[#ffa3b5]'>
                        <p className='pt-3 uppercase tracking-wider mb-4'>
                            Hotel Central
                            <br />
                            Festival
                        </p>
                    </div>
                </Link>
            </div>

            <div className='flex md:flex-row flex-col items-center justify-end md:mt-16 mt-40 self-center md:w-1/2 w-10/12 z-10'>
                <a href={'https://soundcloud.com/lobby-radio'} target={'_blank'}>
                    <div className='flex flex-col items-center bg-black text-white md:mt-8 mt-40 rounded p-6 px-12 text-center mr-14'>
                        <p className='uppercase tracking-wider mb-4'>
                            Folge unserem <br /> lobby radio
                        </p>
                        <img src={'/icon__lobby--radio.svg'} alt={'lobby radio'} width='100px' />
                    </div>
                </a>
            </div>

            <div className='flex md:flex-row flex-col items-center justify-start md:mt-16 mt-40 self-center md:w-1/2 w-10/12 z-10'>
                <div className='bg-white text-black md:mt-8 mt-40 rounded p-6 px-12 text-center md:w-5/12 break-words'>
                    <p className='uppercase tracking-wider mb-4'>Past Events</p>
                    <p>19. Juli | 19 Uhr</p>
                    <p className='text-3xl'>
                        Wie geht …
                        <br />
                        Kulturelle
                        <br />
                        Zwischennutzung
                    </p>
                    <p className='mt-1'>1. März | Steinstr. 13</p>
                </div>
            </div>

            <div className='flex md:flex-row flex-col items-center justify-end md:mt-16 mt-40 self-center md:w-1/2 w-10/12 z-10'>
                <div className='bg-white text-black md:mt-8 mt-40 rounded p-6 px-12 text-center md:w-5/12 mr-14'>
                    <p className='uppercase tracking-wider mb-4'>Past Events</p>
                    <p>27. April | 19 Uhr</p>
                    <p className='text-3xl'>
                        Panel Talk:
                        <br />
                        Frauen* in
                        <br />
                        der Musik
                    </p>
                    <p className='mt-1'>1. März | Steinstr. 13</p>
                </div>
            </div>

            <div className='flex md:flex-row flex-col md:items-start items-center justify-between md:mt-16 mt-40 self-center md:w-1/2 w-10/12 z-10'>
                <div className='bg-white text-black md:mt-8 mt-40 rounded p-6 px-8 text-center md:w-5/12'>
                    <p className='uppercase tracking-wider mb-4'>Past Events</p>
                    <p>29. März bis 16. Mai</p>
                    <p className='text-3xl'>
                        Workshop
                        <br />
                        Suite
                        <br />
                        Pt. 1
                    </p>
                    <p className='mt-1'>1. März | Steinstr. 13</p>
                </div>
                <div className='bg-white text-black mt-56 rounded p-6 px-8 text-center md:w-5/12'>
                    <p className='uppercase tracking-wider mb-4'>Past Events</p>
                    <p>01. März | 19 Uhr</p>
                    <p className='text-3xl'>
                        Hotel-Central:
                        <br />
                        Check-In
                        <br />
                        with
                        <br />
                        Surprise Guests
                    </p>
                    <p className='mt-1'>1. März | Steinstr. 13</p>
                </div>
            </div>

            <div className='self-center md:w-1/6 w-1/2 mt-60 mb-60 z-10'>
                <img src='/icon-smiley.svg' alt='Smileys Logo' className='inline-block' />
            </div>

            <SupporterLogos />

            <div className='self-center mt-60 text-black mb-12 z-10'>
                <Link href={'/impressum'}>Impressum</Link>
            </div>
        </section>
    );
}
