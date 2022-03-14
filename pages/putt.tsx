import type { NextPage } from "next";
import Head from "next/head";

import HeadContent from "../components/HeadContent";
import Putt from "../components/Putt";

const PuttPage: NextPage = () => {
	return (
		<>
			<HeadContent />
			<Head>
				<title>PuttJS</title>
			</Head>
			<Putt />
		</>
	);
};

export default PuttPage;
