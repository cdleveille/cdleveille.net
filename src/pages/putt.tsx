import type { NextPage } from "next";

import Head from "../components/Head";

const Putt: NextPage = () => {
	return (
		<>
			<Head title="Chris Leveille - PuttJS" />
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
	);
};

export default Putt;
