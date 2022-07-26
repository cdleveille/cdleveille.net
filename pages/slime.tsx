import type { NextPage } from "next";
import NextHead from "next/head";
import { CSSProperties } from "react";

import Head from "../components/Head";

const Slime: NextPage = () => {
	const styles: CSSProperties = {
		border: "2px solid black",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translateX(-50%) translateY(-50%)"
	};

	return (
		<>
			<Head />
			<NextHead>
				<title>Slime Volleyball</title>
			</NextHead>
			<>
				<canvas id="gameScreen" width={0} height={0} style={styles} />
				<script src="app/slime/src/slime.min.js" type="module" defer></script>
			</>
		</>
	);
};

export default Slime;
