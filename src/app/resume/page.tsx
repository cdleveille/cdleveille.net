import type { Metadata } from "next";

import { Link, Page, Print, Resume } from "@components";
import { Route } from "@constants";
import { Stack } from "@mui/material";

const ResumePage = () => {
	return (
		<Page>
			<Stack direction="row" spacing="2rem" className="no-print">
				<Link href={Route.HOME}>Home</Link>
				<Print />
			</Stack>
			<Resume />
		</Page>
	);
};

export default ResumePage;

export const metadata: Metadata = {
	title: "Chris Leveille - Resume"
};
