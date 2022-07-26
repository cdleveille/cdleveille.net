import type { NextPage } from "next";
import NextHead from "next/head";
import { CSSProperties } from "react";

import Head from "../components/Head";

const Putt: NextPage = () => {
	const styles: CSSProperties = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translateX(-50%) translateY(-50%)",
		cursor: "crosshair"
	};

	return (
		<>
			<Head />
			<NextHead>
				<title>PuttJS</title>
			</NextHead>
			<>
				<canvas id="gameScreen" width={0} height={0} style={styles} />
				<script src="/app/putt/src/putt.min.js" type="module" defer></script>
			</>
		</>
	);
};

export default Putt;
