import type { NextPage } from "next";

import Head from "../components/Head";

const Slime: NextPage = () => {
	return (
		<>
			<Head title="Chris Leveille - Slime Volleyball" />
			<canvas id="gameScreen" className="absolute-centered" width={0} height={0} />
			<script src="app/slime/src/slime.min.js" type="module" defer></script>
		</>
	);
};

export default Slime;
