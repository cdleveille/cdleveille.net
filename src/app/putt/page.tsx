import type { Metadata } from "next";

import { Putt } from "@components";

export const metadata: Metadata = {
	title: "Chris Leveille - PuttJS"
};

const PuttPage = () => {
	return (
		<main>
			<Putt />
		</main>
	);
};

export default PuttPage;
