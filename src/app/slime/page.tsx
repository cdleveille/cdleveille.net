import type { Metadata } from "next";

import { Slime } from "@components";

const SlimePage = () => {
	return (
		<main>
			<Slime />
		</main>
	);
};

export default SlimePage;

export const metadata: Metadata = {
	title: "Chris Leveille - Slime Volleyball"
};
