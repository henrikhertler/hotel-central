import * as React from 'react';
import { forwardRef, Ref, SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='currentColor'
		color='#000'
		viewBox='0 0 992.13 425.2'
		ref={ref}
		{...props}>
		<path
			d='m322.11 78.08c-4.15 6.5-5.42 13.37-5.42 26.01v71.53c0 12.64 1.27 19.69 5.42 26.19v.9h-36.31v-.9c4.34-6.5 5.42-13.55 5.42-26.19v-27.64h-58.35v27.64c0 12.64 1.08 19.69 5.42 26.19v.9h-36.31v-.9c4.15-6.5 5.42-13.55 5.42-26.19v-71.52c0-12.64-1.26-19.51-5.42-26.01v-.9h36.31v.9c-4.34 6.5-5.42 13.37-5.42 26.01v27.46h58.35v-27.46c0-12.64-1.08-19.51-5.42-26.01v-.9h36.31z' />
		<path
			d='m508.35 201.82c5.06-6.32 6.32-13.37 6.32-26.55v-81.83h-11.38c-15.71 0-24.02 3.25-28.18 9.57h-1.08v-25.83h106.76v25.83h-1.08c-4.34-6.32-12.46-9.57-28.18-9.57h-11.38v81.83c0 13.19 1.26 20.23 6.32 26.55v.9h-38.11v-.9z' />
		<path
			d='m688.8 175.09v27.64h-94.29v-.9c4.34-6.5 5.42-13.73 5.42-27.09v-70.81c0-12.28-1.26-19.51-5.42-25.83v-.9h91.58v25.11h-1.08c-5.24-6.14-11.92-8.67-27.82-8.67h-31.79v37.75h24.39c14.45 0 19.87-2.35 24.57-6.68h1.08v29.62h-1.08c-4.34-4.34-10.48-6.5-24.57-6.5h-24.39v38.48h34.68c14.09 0 22.04-2.17 27.64-11.2h1.08z' />
		<path
			d='m706.68 201.82c3.79-5.24 5.42-13.55 5.42-26.37v-70.45c0-11.38-.36-19.15-5.42-26.92v-.9h36.31v.9c-5.06 7.77-5.42 15.54-5.42 26.92v81.28h27.64c14.45 0 22.94-2.53 28-12.82h1.27v29.26h-87.79v-.9z' />
		<path
			d='m81.06 289.8c0-41.36 32.88-65.75 68.64-65.75 13.19 0 26.55 3.25 37.39 9.21v25.47h-1.08c-8.67-11.74-20.59-17.88-33.78-17.88-26.01 0-43.53 18.97-43.53 46.24 0 29.8 19.69 47.33 46.42 47.33 13.19 0 24.57-4.15 35.22-11.38l3.43 13.55c-12.82 12.46-27.46 18.06-44.26 18.06-37.92 0-68.45-24.21-68.45-64.85' />
		<path
			d='m302.52 324.48v27.64h-94.29v-.9c4.34-6.5 5.42-13.73 5.42-27.1v-70.81c0-12.28-1.26-19.51-5.42-25.83v-.9h91.58v25.11h-1.08c-5.24-6.14-11.92-8.67-27.82-8.67h-31.79v37.75h24.39c14.45 0 19.87-2.35 24.57-6.68h1.08v29.62h-1.08c-4.33-4.33-10.48-6.5-24.57-6.5h-24.39v38.48h34.68c14.09 0 22.04-2.17 27.64-11.2h1.08z' />
		<path
			d='m320.58 351.22c4.33-5.96 5.42-14.81 5.42-27.1v-89.96l-4.7-7.04v-.54h37.39l51.84 90.32h1.08v-62.68c0-12.28-1.08-20.77-5.42-26.73v-.9h29.8v.9c-4.52 5.96-5.42 14.45-5.42 26.73v97.9h-27.28l-57.26-98.45h-1.08v70.45c0 12.28.9 21.13 5.42 27.1v.9h-29.8v-.9z' />
		<path
			d='m483.69 351.22c5.06-6.32 6.32-13.37 6.32-26.55v-81.83h-11.38c-15.71 0-24.02 3.25-28.18 9.57h-1.08v-25.83h106.76v25.83h-1.08c-4.34-6.32-12.46-9.57-28.18-9.57h-11.38v81.83c0 13.19 1.26 20.23 6.32 26.55v.9h-38.11v-.9z' />
		<path
			d='m600.38 279.87h13.01c14.99 0 24.02-7.23 24.02-19.33 0-12.28-9.57-18.06-23.66-18.06h-13.37zm83.27 71.89v.36h-31.43l-42.45-56.36h-9.39v28.72c0 13.19 1.08 20.23 5.42 26.73v.9h-36.13v-.9c4.33-6.5 5.42-13.55 5.42-26.73v-71.17c0-11.74-.72-19.33-5.42-25.83v-.9h47.33c28.18 0 46.78 13.01 46.78 33.78 0 15.17-10.3 26.73-27.28 31.79z' />
		<path
			d='m727 302.08h35.77l-17.52-45.34h-1.08zm70.99 22.04c5.06 12.46 8.13 20.41 14.27 27.1v.9h-38.48v-.9c3.79-6.68 1.99-15.35-2.35-26.73l-2.35-5.96h-48.23l-2.17 5.6c-4.52 11.92-5.78 20.59-1.26 27.1v.9h-32.33v-.9c6.86-6.5 9.57-15.17 13.91-26.37l38.47-98.27h21.32z' />
		<path
			d='m823.27 351.22c3.79-5.24 5.42-13.55 5.42-26.37v-70.45c0-11.38-.36-19.15-5.42-26.91v-.9h36.31v.9c-5.06 7.77-5.42 15.54-5.42 26.91v81.29h27.64c14.45 0 22.94-2.53 28-12.83h1.27v29.26h-87.79v-.9z' />
		<path
			d='m399.1 70.55c-5.21 0-9.44 4.24-9.44 9.44 0 5.21 4.24 9.44 9.44 9.44s9.44-4.24 9.44-9.44c.01-5.21-4.23-9.44-9.44-9.44' />
		<path
			d='m399.1 190.47c-5.21 0-9.44 4.24-9.44 9.44 0 5.21 4.24 9.44 9.44 9.44s9.44-4.24 9.44-9.44c.01-5.2-4.23-9.44-9.44-9.44' />
		<path
			d='m366.68 97.15c.8.22 1.63.33 2.46.33 1.64 0 3.27-.44 4.71-1.27 4.51-2.6 6.06-8.39 3.46-12.9s-8.39-6.06-12.9-3.46c-2.18 1.26-3.74 3.3-4.4 5.73-.65 2.44-.32 4.98.94 7.17 1.26 2.18 3.29 3.74 5.73 4.4' />
		<path
			d='m431.53 182.76c-2.44-.65-4.98-.32-7.17.94-2.18 1.26-3.75 3.3-4.4 5.74s-.32 4.98.94 7.17c1.26 2.18 3.3 3.75 5.73 4.4.8.22 1.63.33 2.46.33 1.64 0 3.27-.44 4.71-1.27 4.51-2.6 6.06-8.39 3.46-12.9-1.26-2.2-3.29-3.76-5.73-4.41' />
		<path
			d='m351.9 101.79c-2.18-1.26-4.73-1.59-7.17-.94s-4.48 2.21-5.74 4.4c-2.6 4.51-1.05 10.3 3.46 12.9 1.44.83 3.07 1.27 4.71 1.27.83 0 1.65-.11 2.46-.32 2.44-.65 4.47-2.21 5.74-4.4 2.6-4.51 1.05-10.3-3.46-12.91' />
		<path
			d='m455.75 161.75c-2.18-1.26-4.73-1.59-7.17-.94s-4.48 2.21-5.74 4.4c-2.6 4.51-1.05 10.3 3.46 12.9 1.44.83 3.07 1.27 4.71 1.27.83 0 1.65-.11 2.46-.32 2.44-.65 4.47-2.21 5.74-4.4 2.6-4.52 1.05-10.3-3.46-12.91' />
		<path
			d='m348.59 139.95c0-5.21-4.24-9.44-9.44-9.44-5.21 0-9.44 4.24-9.44 9.44 0 5.21 4.24 9.44 9.44 9.44 5.2.01 9.44-4.23 9.44-9.44' />
		<path
			d='m459.06 130.51c-5.21 0-9.44 4.24-9.44 9.44 0 5.21 4.24 9.44 9.44 9.44s9.44-4.24 9.44-9.44c.01-5.21-4.23-9.44-9.44-9.44' />
		<path
			d='m342.46 161.75c-4.51 2.6-6.06 8.39-3.46 12.9 1.26 2.18 3.3 3.75 5.74 4.4.8.22 1.63.33 2.46.33 1.64 0 3.27-.44 4.71-1.27 4.51-2.6 6.06-8.39 3.46-12.9-2.62-4.51-8.4-6.06-12.91-3.46' />
		<path
			d='m448.59 119.09c.8.22 1.63.32 2.46.32 1.64 0 3.27-.44 4.71-1.27 4.51-2.6 6.06-8.39 3.46-12.9-1.26-2.18-3.3-3.75-5.73-4.4s-4.98-.32-7.17.94c-4.51 2.6-6.06 8.39-3.46 12.9 1.25 2.2 3.29 3.76 5.73 4.41' />
		<path
			d='m373.85 183.7c-2.19-1.26-4.73-1.6-7.17-.94-2.44.65-4.47 2.21-5.74 4.4-2.6 4.51-1.05 10.3 3.46 12.9 1.44.83 3.07 1.27 4.71 1.27.83 0 1.65-.11 2.46-.32 2.44-.65 4.47-2.22 5.74-4.4s1.6-4.73.94-7.17-2.22-4.48-4.4-5.74' />
		<path
			d='m424.36 96.2c1.44.83 3.07 1.27 4.71 1.27.83 0 1.65-.11 2.46-.33 2.44-.65 4.47-2.22 5.74-4.4 2.6-4.51 1.05-10.3-3.46-12.9-2.19-1.26-4.73-1.6-7.17-.94-2.44.65-4.47 2.22-5.74 4.4-2.6 4.51-1.05 10.3 3.46 12.9' />
	</svg>
);
const LogoHotelCentral = forwardRef(SvgComponent);
export default LogoHotelCentral;
