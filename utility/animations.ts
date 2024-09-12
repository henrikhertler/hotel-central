import gsap from 'gsap';
import React from 'react';
import { Expo } from 'gsap/gsap-core';

const radius = 250 / 2;

export function creatMouseSpinner(cursor: HTMLDivElement) {
	let rotate = gsap.timeline({ repeat: -1 });

	gsap.set(cursor, {
		transformOrigin: 'center center',
		rotation: 0,
		width: radius * 2,
		height: radius * 2,
	});

	rotate.to(cursor, { rotation: 360, duration: 3, ease: 'none' });
}

export function imageAroundMouse(e: React.MouseEvent<HTMLElement, MouseEvent>, ref: HTMLDivElement | undefined) {
	const { pageX, pageY } = e;
	const t1 = gsap.timeline();

	if (ref) {
		t1.to(ref, {
			duration: 2,
			x: pageX - radius,
			y: pageY - radius - 100,
			ease: Expo.easeOut,
		});
	}
}

export function triaAnimation(tria_1: HTMLDivElement, tria_2: HTMLDivElement, tria_3: HTMLDivElement) {
	let t1 = gsap.timeline({ yoyo: true, repeat: 1, repeatDelay: 0.5 });

	t1.to(tria_3, { duration: 0.5, opacity: 1, y: -130, ease: 'power1.inOut' });
	t1.to(tria_3, { opacity: 0, ease: 'power1.inOut' });
	t1.to(tria_2, { duration: 0.5, opacity: 1, y: -130, ease: 'power1.inOut' });
	t1.to(tria_2, { opacity: 0, ease: 'power1.inOut' });
	t1.to(tria_1, { duration: 0.5, opacity: 1, y: -130, ease: 'power1.inOut' });
}

export function welcomeTextAnimation(
	word_1: HTMLDivElement,
	word_2: HTMLDivElement,
	word_3: HTMLDivElement,
	word_4: HTMLDivElement,
	word_5: HTMLDivElement,
	word_6: HTMLDivElement,
) {
	let tl = gsap.timeline();

	const stateOne = {
		color: 'transparent',
	};
	const stateTwo = {
		color: 'white',
		duration: 1,
		ease: 'power4.out',
	};

	[word_1, word_2, word_3].forEach(word => {
		tl.fromTo(word, stateOne, stateTwo);
	});

	tl.set(word_1, { display: 'none' });
	tl.fromTo(word_4, { color: 'transparent' }, { duration: 1, color: '#FFF', display: 'block' });
	tl.set(word_2, { display: 'none' });
	tl.fromTo(word_5, { color: 'transparent' }, { duration: 1, color: '#FFF', display: 'block' });
	tl.set(word_3, { display: 'none' });
	tl.fromTo(word_6, { color: 'transparent' }, { duration: 1, color: '#FFF', display: 'block' });
}
