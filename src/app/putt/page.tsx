import type { Metadata } from "next";

import { Putt } from "@components";

const PuttPage = () => {
	return (
		<main>
			<Putt />
		</main>
	);
};

export default PuttPage;

export const metadata: Metadata = {
	title: "Chris Leveille - PuttJS"
};
