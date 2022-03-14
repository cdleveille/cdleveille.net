import type { NextPage } from "next";
import Head from "next/head";

import HeadContent from "../components/HeadContent";
import Slime from "../components/Slime";

const SlimePage: NextPage = () => {
	return (
		<>
			<HeadContent />
			<Head>
				<title>Slime Volleyball</title>
			</Head>
			<Slime />
		</>
	);
};

export default SlimePage;
