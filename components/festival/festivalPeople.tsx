import Image from 'next/image';

export default function FestivalPeople() {
    const people = [
        {
            id: 1,
            image: '/festival/FHC_231025_SocialMedia_Workshops-Einzeln_1080x1080px_01-02-min.jpeg',
            name: 'Elias',
        },
        {
            id: 2,
            image: '/festival/FHC_231025_SocialMedia_Workshops-Einzeln_1080x1080px_03-02-min.jpeg',
            name: 'Yota',
        },
        {
            id: 3,
            image: '/festival/FHC_231025_SocialMedia_Workshops-Einzeln_1080x1080px_04-02-min.jpeg',
            name: 'Saeed',
        },
        {
            id: 4,
            image: '/festival/FHC_231025_SocialMedia_Workshops-Einzeln_1080x1080px_06-02-min.jpeg',
            name: 'Benny & Jakob',
        },
        {
            id: 5,
            image: '/festival/FHC_231025_SocialMedia_Workshops-Einzeln_1080x1080px_02-02-min.jpeg',
            name: 'Roman',
        },
        {
            id: 6,
            image: '/festival/FHC_231025_SocialMedia_Workshops-Einzeln_1080x1080px_05-02-min.jpeg',
            name: 'Melina',
        },
        {
            id: 7,
            image: '/festival/fhc_231025_socialmedia_workshops-einzeln_1080x1080px_07-02-min.jpeg',
            name: 'Roman Wagner',
        },
    ];

    return (
        <div className='mt-16'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {people.map((peep, index) => (
                    <div className={`flex justify-${index % 3 === 0 ? 'start' : index % 3 === 1 ? 'center' : 'end'}`}>
                        <div key={peep.id} className='text-black bg-[#F5F5F5] w-[240px]'>
                            <Image src={peep.image} alt={peep.name} width={240} height={240} />
                            <div className='p-4 py-6'>{peep.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
