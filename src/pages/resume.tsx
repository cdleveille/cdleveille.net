import type { NextPage } from "next";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import ButtonLink from "../components/ButtonLink";
import Head from "../components/Head";
import ResumeContent from "../components/resume/ResumeContent";
import { Url } from "../types/constants";

const Resume: NextPage = () => {
	const refToPrint = useRef<HTMLDivElement>(null);

	const handlePrint = useReactToPrint({
		content: () => refToPrint.current,
		pageStyle:
			"@page{ margin: 1rem; margin-bottom: 0; size: portrait;  } * { color: black !important; } div > h1 { font-size: 1.5rem; } div > h2 { font-size: 1.2rem; }",
		documentTitle: "christopher_leveille_resume.pdf"
	});

	return (
		<>
			<Head title="Chris Leveille - Resume" />
			<div style={{ marginTop: "2rem", marginBottom: "1.5rem", textAlign: "center" }}>
				<ButtonLink href={Url.HOME} label="Home" target="_self" />
				<ButtonLink
					label="Print"
					target="_self"
					onClick={(e: MouseEvent) => {
						e.preventDefault();
						handlePrint();
					}}
				/>
			</div>
			<div id="resume-page">
				<div id="resume-page-inner">
					<div style={{ paddingTop: "1rem" }}></div>
					<ResumeContent refToPrint={refToPrint} />
					<div style={{ paddingBottom: "1rem" }}></div>
				</div>
			</div>
		</>
	);
};

export default Resume;
