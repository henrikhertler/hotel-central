import Link from 'next/link';
import React from 'react';

export default function HotelCentralFestival() {
    return (
        <div className='mt-8 p-4 bg-[#F5F5F5] text-black'>
            <div className='mb-4 text-2xl'>Festival Hotel Central</div>
            <div>
                Culture all inclusive! Das Hotel Central e.V. veranstaltet ein dreiwöchiges Festival und läd Kreative,
                Musiker*innen, Partygänger*innen und Interessierte ein, zu Live-Events, Workshops, Club-Nights,
                Ausstellungen und Paneltalks ins Hotel einzuchecken und Stadtkultur aktiv mitzugestalten.
                <br />
                <br />
                Das „Hotel Central“ ist eine junge, gemeinnützige Organisation mit dem Ziel, kreative Persönlichkeiten
                unterschiedlicher Disziplinen zu vernetzen und in ihrer Entwicklung zu unterstützen. Unseren Gästen
                stellen wir Räumlichkeiten, Ausstattung sowie Veranstaltungs- und Netzwerkplattformen zur Verfügung, um
                ihr kreatives Arbeiten zu unterstützen. Wir heißen in unserem imaginären Hotel die unterschiedlichsten
                Menschen aus allen denkbaren, kreativen Bereichen willkommen. Gemeinsam verbringen sie Zeit in unserem
                Haus, diskutieren ihre Ideen, arbeiten an interdisziplinären Projekten mit Bezug zu Musik, Kunst,
                Fotografie, Design und Kultur und schaffen kreativen Output mit nachhaltigem und relevanten Stellenwert.
                <br />
                <br />
                Gefördert wird das Festival mit freundlicher Unterstützung vom{' '}
                <Link target='_blank' href='https://www.instagram.com/popbuero/'>
                    Pop-Büro Region Stuttgart
                </Link>
                , der{' '}
                <Link target='_blank' href='https://www.instagram.com/initiativemusik/'>
                    Initiative Musik
                </Link>{' '}
                und dem Kulturamt der{' '}
                <Link target='_blank' href='https://www.instagram.com/stuttgart.meine.stadt/'>
                    Stadt Stuttgart
                </Link>
                . Weitere Partner:innen:{' '}
                <Link target='_blank' href='https://www.instagram.com/wetteristimmer/'>
                    Das Wetter Magazin
                </Link>
                ,{' '}
                <Link target='_blank' href='https://www.instagram.com/kessler_sekt/'>
                    Kessler
                </Link>
                ,{' '}
                <Link target='_blank' href='https://www.instagram.com/ritzling/'>
                    Weingut Karl Haidle
                </Link>
                ,{' '}
                <Link target='_blank' href='https://www.instagram.com/unibev_/'>
                    Unibev
                </Link>
                ,{' '}
                <Link target='_blank' href='https://www.instagram.com/ilovesushistuttgart/'>
                    IloveSushi
                </Link>
                ,{' '}
                <Link target='_blank' href='https://www.instagram.com/lemonaid.charitea/'>
                    Lemonaid & Charitea
                </Link>
                ,{' '}
                <Link target='_blank' href='https://www.instagram.com/doen.doen.kebap/'>
                    doen doen ® kebap
                </Link>
                ,{' '}
                <Link target='_blank' href='https://www.instagram.com/wilhelmkern1903'>
                    Wilhelm Kern
                </Link>
                ,{' '}
                <Link target='_blank' href='https://www.instagram.com/schweppes_de'>
                    Schweppes
                </Link>
                ,{' '}
                <Link target='_blank' href='https://www.instagram.com/beyerdynamic/'>
                    Beyerdynamic
                </Link>
                ,{' '}
                <Link target='_blank' href='https://www.instagram.com/arthausfilmtheaterstuttgart/'>
                    Arthaus Filmtheater Stuttgart
                </Link>
                ,{' '}
                <Link target='_blank' href='https://www.instagram.com/1.stock/'>
                    1.Stock
                </Link>
                ,{' '}
                <Link target='_blank' href='https://www.instagram.com/studiotillackknoell/'>
                    Studio Tillack Knöll
                </Link>
                ,{' '}
                <Link target='_blank' href='https://www.instagram.com/transit_bergamo_detroit/'>
                    Transit/Bergamo & Detroit Bar
                </Link>
                ,{' '}
                <Link target='_blank' href='https://www.instagram.com/roomservice.eu'>
                    Roomservice Europe GmbH
                </Link>
            </div>
        </div>
    );
}
