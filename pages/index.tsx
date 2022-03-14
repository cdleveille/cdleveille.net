import type { NextPage } from "next";

import HeadContent from "../components/HeadContent";
import Index from "../components/Index";

const IndexPage: NextPage = () => {
	return (
		<>
			<HeadContent />
			<Index />
		</>
	);
};

export default IndexPage;
