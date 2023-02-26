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
                <p className='uppercase tracking-wider mb-4'>Impressum</p>
                <p>
                    Angaben gemäß § 5 TMG
                    <br />
                    <br />
                    Room Service Europe GmbH – Marienstraße 37 – 70178 Stuttgart
                    <br />
                    <br />
                    Geschäftsführer/-in: Anna Ross, Saeed Kakavand
                    <br />
                    <br />
                    Sitz und Registergericht: Stuttgart HRB 756204
                    <br />
                    <br />
                    Umsatzsteuer-ID: Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: DE277299459
                    <br />
                    <br />
                    Mitglied Industrie- und Handelskammer Stuttgart
                    <br />
                    <br />
                    Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Anna Ross, Saeed Kakavand Marienstraße 37 –
                    70178 Stuttgart
                    <br />
                    <br />
                    Kontakt: saeed@call-roomservice.eu
                </p>
            </div>

            <div className='self-center mt-60 text-black mb-12 z-10'>
                <Link href={'/'}>Home</Link>
            </div>
        </section>
    );
}
