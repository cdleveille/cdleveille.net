import type { NextPage } from "next";
import NextHead from "next/head";
import { CSSProperties } from "react";

import Head from "../components/Head";

const Resume: NextPage = () => {
	const styles: CSSProperties = {
		width: "100%",
		maxWidth: "1200px",
		height: "100%",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translateX(-50%) translateY(-50%)"
	};

	return (
		<>
			<Head />
			<NextHead>
				<title>Chris Leveille - Resume</title>
			</NextHead>
			<iframe src="pdf/christopher_leveille_resume_public.pdf#zoom=FitH" style={styles} />
		</>
	);
};

export default Resume;
