import type { NextPage } from "next";

import Resume from "./";

const Print: NextPage = () => {
	return <Resume doPrint={true} />;
};

export default Print;
