import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function IndexPage() {
    const [small, setSmall] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => setSmall(window.scrollY > 32));
        }
    }, []);

    return (
        <section className='flex flex-col content-center'>
            <div
                className={`flex mt-4 justify-center text-black self-center ${
                    small ? 'md:w-1/5 w-1/2' : ' md:w-1/3 w-1/2'
                } fixed z-0 ease-in-out duration-300`}>
                <img src='/wordmark-round.svg' alt='Hotel Central Logo' className='inline-block' />
            </div>

            <div className='flex flex-col self-center p-6 bg-white content-center text-black text-center rounded md:mt-56 mt-40 md:max-w-md w-10/12 z-10'>
                <p className='uppercase tracking-wider mb-4'>PUBLIC ANNOUNCEMENT</p>
                <p>
                    Hier entsteht der neue
                    <br />
                    Webauftritt des Hotel Centrals.
                    <br />
                    <br />
                    Das „Hotel Central“ ist ein digitaler und realer Ort mit dem Ziel, kreative Persönlichkeiten
                    unterschiedlicher Disziplinen zu vernetzen und in ihrer Entwicklung zu unterstützen.
                    <br />
                    <br />
                    Unseren Gästen stellen wir Räumlichkeiten, Ausstattung sowie Veranstaltungs- und Netzwerkplattformen
                    zur Verfügung, um ihr kreatives Arbeiten zu unterstützen.
                    <br />
                    <br />
                    Wir heißen in unserem imaginären Hotel die unterschiedlichsten Menschen aus allen denkbaren
                    kreativen Bereichen willkommen. Gemeinsam verbringen sie Zeit in unserem Haus, diskutieren ihre
                    Ideen, arbeiten an interdisziplinären Projekten mit Bezug zu Musik, Kunst, Fotografie, Design und
                    Kultur und schaffen kreativen Output mit nachhaltigem und relevanten Stellenwert.
                </p>
            </div>

            <div className='flex md:flex-row flex-col md:items-start items-center justify-between md:mt-16 mt-40 self-center md:w-1/2 w-10/12 z-10'>
                <div className='bg-white text-black rounded p-6 px-8 text-center'>
                    <p className='uppercase tracking-wider mb-4'>Folge uns</p>
                    <a className='text-2xl' target='_blank' href='https://www.instagram.com/hotel__central/'>
                        @hotel__central
                    </a>
                </div>
                <div className='bg-white text-black md:mt-8 mt-40 rounded p-6 px-8 text-center'>
                    <p className='uppercase tracking-wider mb-4'>Upcoming Events</p>
                    <p>1. März | 19 Uhr</p>
                    <p className='text-3xl'>
                        Hotel-Central:
                        <br />
                        Check-In
                        <br />
                        with
                        <br />
                        Surprise Guest
                    </p>
                    <p className='mt-1'>1. März | Steinstr. 13</p>
                </div>
            </div>

            <div className='self-center md:w-1/6 w-1/2 mt-60 mb-60 z-10'>
                <img src='/icon-smiley.svg' alt='Smileys Logo' className='inline-block' />
            </div>

            <div className='self-center md:w-1/3 w-10/12 md:mt-60 text-center z-10'>
                <p className='text-black'>gefördert von</p>
                <div className='flex md:flex-row flex-col items-start justify-between items-center mt-8'>
                    <img src='/icon_initiative.png' alt='Initiative Musik' className='md:w-1/4 w-1/2 mb-4' />
                    <img src='/icon_stuttgart.svg' alt='Stadt Stuttgart' className='md:w-1/4 w-1/2 mb-8' />
                    <img src='/icon_popbuero.png' alt='Pop-Büro Region Stuttgart' className='md:w-1/4 w-1/2 mb-4' />
                </div>
            </div>

            <div className='self-center mt-60 text-black mb-12 z-10'>
                <Link href={'/impressum'}>Impressum</Link>
            </div>
        </section>
    );
}
