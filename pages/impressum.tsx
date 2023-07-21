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
                    Hotel Central e.V.
                    <br />
                    „Treffpunkt für Kreativität und Vernetzung in Stuttgart”
                    <br />
                    Steinstraße 13, 70173 Stuttgart
                    <br />
                    <br />
                    Vereinsregister: 726008
                    <br />
                    Registergericht: Stuttgart
                    <br />
                    <br />
                    Vertreten durch:
                    <br />
                    Anna Roß
                    <br />
                    Benjamin Straub
                    <br />
                    Colyn Heinz
                    <br />
                    Felix Göppel
                    <br />
                    Saeed Kakavand
                    <br />
                    <br />
                    <br />
                    Kontakt
                    <br />
                    E-Mail: hello[at]welcome-to-hotel-central.eu
                    <br />
                    <br />
                    Redaktionell verantwortlich
                    <br />
                    Saeed Kakavand
                    <br />
                    Colyn Heinze
                    <br />
                </p>
            </div>

            <div className='self-center mt-60 text-black mb-12 z-10'>
                <Link href={'/'}>Home</Link>
            </div>
        </section>
    );
}
