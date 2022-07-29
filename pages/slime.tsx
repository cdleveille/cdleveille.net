import type { NextPage } from "next";
import NextHead from "next/head";

import Head from "../components/Head";

const Slime: NextPage = () => {
	return (
		<>
			<Head />
			<NextHead>
				<title>Slime Volleyball</title>
			</NextHead>
			<>
				<canvas id="gameScreen" className="absolute-centered" width={0} height={0} />
				<script src="app/slime/src/slime.min.js" type="module" defer></script>
			</>
		</>
	);
};

export default Slime;
