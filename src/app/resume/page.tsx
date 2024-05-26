import type { Metadata } from "next";

import { Resume } from "@components";

export const metadata: Metadata = {
	title: "Chris Leveille - Resume"
};

const ResumePage = () => {
	return (
		<main className="page-container">
			<Resume />
		</main>
	);
};

export default ResumePage;
