import type { NextPage } from "next";

import Head from "../components/Head";
import ProfPic from "../components/ProfPic";

const Pic: NextPage = () => {
	return (
		<>
			<Head />
			<ProfPic className="absolute-centered" />
		</>
	);
};

export default Pic;