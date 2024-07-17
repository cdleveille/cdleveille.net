"use client";

import { Section } from "@components";

export const About = () => {
	return (
		<Section title="About Me" id="about">
			I am {getAge()} years old, and in my free time I enjoy playing guitar, singing, skiing, disc golf, pool,
			table tennis, and video games.
		</Section>
	);
};

const getAge = () => {
	const today = new Date();
	const age =
		today.getFullYear() -
		1992 -
		(today.getMonth() > 5 || (today.getMonth() === 5 && today.getDate() >= 18) ? 0 : 1);
	return age;
};
