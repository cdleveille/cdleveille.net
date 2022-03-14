import type { NextPage } from "next";
import Head from "next/head";

import HeadContent from "../components/HeadContent";
import Resume from "../components/Resume";

const ResumePage: NextPage = () => {
	return (
		<>
			<HeadContent />
			<Head>
				<title>Chris Leveille - Resume</title>
			</Head>
			<Resume />
		</>
	);
};

export default ResumePage;
