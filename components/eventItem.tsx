import { formatDateTime } from '../sanity/helper';

interface EventProps {
	date: string;
	name: string;
	location: string;
	index: number;
}

export default function EventItem(props: EventProps) {
	const { date, name, location, index } = props;

	const isPastEvent = new Date(date) < new Date();

	const longText = name.length > 49;

	return (
		<div
			className={`z-10 ${index % 2 === 0 ? '' : 'mt-40'} flex w-10/12 flex-col items-center ${
				index % 2 ? 'justify-end' : 'justify-start'
			} self-center md:mt-16 md:w-1/2 md:flex-row`}>
			<div
				className={`${
					index % 3 === 0 ? '0' : 'mt-40'
				} break-words rounded bg-white p-6 px-12 text-center text-black md:mt-8 ${longText ? 'md:w-7/12' : 'md:w-5/12'}`}>
				<p className='mb-4 uppercase tracking-wider'>{isPastEvent ? 'Past Events' : 'Upcoming Event'}</p>
				<p>{formatDateTime(date)}</p>
				<p className='break-normal text-3xl'>{name}</p>
				<p className='mt-1'>{location}</p>
			</div>
		</div>
	);
}
