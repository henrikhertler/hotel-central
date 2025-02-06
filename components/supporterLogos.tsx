export default function SupporterLogos({ color }: Readonly<{ color?: string }>) {
	return (
		<div className='self-center md:w-1/3 w-10/12 md:mt-60 text-center z-10'>
			<p style={{ color: color ?? 'black' }}>gefördert von</p>
			<div className='flex md:flex-row flex-col justify-between items-center mt-8'>
				<img src='/icon__initiative--musik.svg' alt='Initiative Musik' className='md:w-1/4 w-1/2 mb-4' />
				<img src='/icon_stuttgart.svg' alt='Stadt Stuttgart' className='md:w-1/4 w-1/2 mb-8' />
				<img src='/icon_popbuero.png' alt='Pop-Büro Region Stuttgart' className='md:w-1/4 w-1/2 mb-4' />
			</div>
		</div>
	);
}
