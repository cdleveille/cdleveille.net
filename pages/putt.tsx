import type { NextPage } from "next";
import NextHead from "next/head";

import Head from "../components/Head";

const Putt: NextPage = () => {
	return (
		<>
			<Head />
			<NextHead>
				<title>PuttJS</title>
			</NextHead>
			<>
				<canvas
					id="gameScreen"
					className="absolute-centered"
					width={0}
					height={0}
					style={{
						cursor: "crosshair"
					}}
				/>
				<script src="/app/putt/src/putt.min.js" type="module" defer></script>
			</>
		</>
	);
};

export default Putt;
