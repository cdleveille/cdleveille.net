import type { Metadata } from "next";

import { Slime } from "@components";

export const metadata: Metadata = {
	title: "Chris Leveille - Slime Volleyball"
};

const SlimePage = () => {
	return (
		<main>
			<Slime />
		</main>
	);
};

export default SlimePage;
