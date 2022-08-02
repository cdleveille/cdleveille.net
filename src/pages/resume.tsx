import type { NextPage } from "next";
import Link from "next/link";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import ButtonLink from "../components/ButtonLink";
import Head from "../components/Head";
import Divider from "../components/resume/Divider";
import Experience from "../components/resume/Experience";
import { Url } from "../types/constants";

const Resume: NextPage = () => {
	const refToPrint = useRef<HTMLDivElement>(null);

	const handlePrint = useReactToPrint({
		content: () => refToPrint.current,
		pageStyle:
			"@page{ margin: 1rem; margin-bottom: 0; size: portrait; } * { color: black !important; font-family: Arial, Helvetica, sans-serif; }" +
			"div h1 { font-size: 1.3rem; } div h2 { font-size: 1.1rem; } div p { margin: 0.5rem; }",
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
					<div ref={refToPrint}>
						<h1 style={{ textAlign: "center" }}>
							<strong>Christopher D. Leveille</strong>
						</h1>
						<div style={{ textAlign: "center" }}>
							<Link href={Url.MAILTO}>
								<a target="_blank">cdleveille@gmail.com</a>
							</Link>
							<Divider />
							<Link href={Url.LINKEDIN}>
								<a target="_blank">linkedin.com/in/cdleveille</a>
							</Link>
							<Divider />
							<Link href={Url.GITHUB}>
								<a target="_blank">github.com/cdleveille</a>
							</Link>
							<Divider />
							<Link href={Url.HOME}>
								<a>cdleveille.net</a>
							</Link>
						</div>
						<h2>
							<strong>Experience</strong>
						</h2>
						<Experience
							company={
								<Link href={Url.WINDSOR}>
									<a target="_blank">Windsor Solutions</a>
								</Link>
							}
							location="Northampton, MA"
							roles={[
								{
									title: "Software Engineer",
									dateRange: "April 2022 - Present",
									description: ["Develop and maintain an electronic forms solution used by state environmental agencies."]
								}
							]}
						/>
						<Experience
							company={
								<Link href={Url.FPI}>
									<a target="_blank">Farm Credit Financial Partners, Inc.</a>
								</Link>
							}
							location="Springfield, MA"
							roles={[
								{
									title: "Contract Software Engineer",
									dateRange: "November 2021 - February 2022",
									description: ["Processed farmer-borrower data for year end tax form distribution and reporting."]
								},
								{
									title: "Software Engineer II",
									dateRange: "April 2017 - October 2021",
									description: [
										"Produced and supported loan origination/customer relationship management software used by Agricultural Credit Associations of the Farm Credit System.",
										"Supported production environments of multiple retail lending institutions, designed/developed/reviewed release work items."
									]
								}
							]}
						/>
						<Experience
							company={
								<Link href={Url.FPI}>
									<a target="_blank">General Dynamics Missions Systems</a>
								</Link>
							}
							location="Taunton, MA"
							roles={[
								{
									title: "Software Engineer",
									dateRange: "December 2014 - March 2017",
									description: ["Developed software modules for a dynamic military network management application."]
								}
							]}
						/>
						<Experience
							company={
								<Link href={Url.LEANTU}>
									<a target="_blank">Leantu LLC</a>
								</Link>
							}
							location="Hadley, MA"
							roles={[
								{
									title: "Web Developer",
									dateRange: "July - November 2014",
									description: [
										"Assisted in the development and inventory management of web stores for regional bicycle, ski, and outerwear vendors including Valley Bike & Ski Werks, J Skis, and Orage."
									]
								}
							]}
						/>
						<h2>
							<strong>Education</strong>
						</h2>
						<p className="resume-indent-1">
							<Link href={Url.UNION}>
								<a target="_blank">Union College</a>
							</Link>
							<Divider />
							Schenectady, NY
							<br />
							Bachelor of Science (B.S.), Computer Science
							<Divider /> Minor, Music
							<Divider />
							June 2014
						</p>
						<p className="resume-indent-1">
							<strong>Relevant Coursework:&nbsp; </strong>
							Game Development &#40;Intro to CS&#41;, Data Structures, Discrete Math for Computer Science, Algorithm Design &amp;
							Analysis, Large-Scale Software Development, Intro to Parallel Computing, User Interfaces, Web Programming, Programming
							Languages, Computer Organization, Intro to Robotics, Artificial Intelligence
						</p>
						<h2>
							<strong>Technical Skills</strong>
						</h2>
						<p className="resume-indent-1">
							<strong>Programming Languages:&nbsp; </strong>
							JavaScript, TypeScript, Python, SQL, C#, Java, Apex, SOQL, HTML, PHP, CSS
						</p>
						<p className="resume-indent-1">
							<strong>Software Proficiency:&nbsp; </strong>
							Node.js, Express, React, Next.js, Git, MongoDB, PostgreSQL, Docker, Salesforce Platform, .NET Framework, SQL Server
							Management Studio, Azure Data Studio, Microsoft Visual Studio, Eclipse, Ext JS, GitHub, Azure DevOps, Windows, MacOS,
							Linux, Microsoft Office
						</p>
						<h2>
							<strong>Certifications</strong>
						</h2>
						<p className="resume-indent-1">
							Salesforce Certified Platform Developer I<br />
							Issued March 2021
							<Divider />
							<Link href={Url.SF_CERT}>
								<a target="_blank">Credential ID 21953240</a>
							</Link>
						</p>
					</div>
					<div style={{ paddingBottom: "1rem" }}></div>
				</div>
			</div>
		</>
	);
};

export default Resume;
