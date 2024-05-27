import type { Metadata } from "next";

import { Page, Resume, ResumeLinks } from "@components";

const ResumePage = () => {
	return (
		<Page>
			<ResumeLinks />
			<Resume />
		</Page>
	);
};

export default ResumePage;

export const metadata: Metadata = {
	title: "Chris Leveille - Resume"
};
