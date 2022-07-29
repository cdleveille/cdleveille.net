import type { NextPage } from "next";
import NextHead from "next/head";
import Link from "next/link";

import Head from "../components/Head";
import Divider from "../components/resume/Divider";
import Experience from "../components/resume/Experience";

const Resume: NextPage = () => {
	return (
		<>
			<Head />
			<NextHead>
				<title>Chris Leveille - Resume</title>
			</NextHead>
			<div id="resume-page">
				<div id="resume-page-inner">
					<div style={{ paddingTop: "1rem" }}></div>
					<h1 style={{ textAlign: "center" }}>
						<strong>Christopher D. Leveille</strong>
					</h1>
					<div style={{ textAlign: "center" }}>
						<Link href="mailto:cdleveille@gmail.com">
							<a target="_blank">cdleveille@gmail.com</a>
						</Link>
						<Divider />
						<Link href="https://www.linkedin.com/in/cdleveille">
							<a target="_blank">linkedin.com/in/cdleveille</a>
						</Link>
						<Divider />
						<Link href="https://github.com/cdleveille">
							<a target="_blank">github.com/cdleveille</a>
						</Link>
						<Divider />
						<Link href="/">
							<a>cdleveille.net</a>
						</Link>
					</div>
					<h2>
						<strong>Experience</strong>
					</h2>
					<Experience
						company="Windsor Solutions"
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
						company="Farm Credit Financial Partners, Inc."
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
						company="General Dynamics Mission Systems"
						location="Taunton, MA"
						roles={[
							{
								title: "Software Engineer",
								dateRange: "December 2014 - March 2017",
								description: [
									"Developed software modules for a dynamic military network management application.",
									"Worked tasks through requirements, design, implementation, testing, and maintenance phases of the development process.",
									"Presented regular progress reports and feature demonstrations to team members and relevant subject matter experts."
								]
							}
						]}
					/>
					<Experience
						company="Leantu LLC"
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
						Union College
						<Divider />
						Schenectady, NY
						<br />
						Bachelor of Science (B.S.), Computer Science
						<Divider /> Minor, Music
						<Divider />
						June 2014
					</p>
					<p className="resume-indent-1">
						<strong>Relevant Coursework: </strong>
						Game Development &#40;Intro to CS&#41;, Data Structures, Discrete Math for Computer Science, Algorithm Design &amp; Analysis,
						Large-Scale Software Development, Intro to Parallel Computing, User Interfaces, Web Programming, Programming Languages,
						Computer Organization, Intro to Robotics, Artificial Intelligence
					</p>
					<h2>
						<strong>Technical Skills</strong>
					</h2>
					<p className="resume-indent-1">
						<strong>Programming Languages:&nbsp;&nbsp;</strong>
						JavaScript, TypeScript, Python, SQL, C#, Java, Apex, SOQL, HTML, PHP, CSS
					</p>
					<p className="resume-indent-1">
						<strong>Software Proficiency:&nbsp;&nbsp;</strong>
						Node.js, Express, React, Next.js, Git, MongoDB, PostgreSQL, Docker, Salesforce Platform, .NET Framework, SQL Server Management
						Studio, Azure Data Studio, Microsoft Visual Studio, Eclipse, Ext JS, GitHub, Azure DevOps, Windows, MacOS, Linux, Microsoft
						Office
					</p>
					<h2>
						<strong>Certifications</strong>
					</h2>
					<p className="resume-indent-1">
						Salesforce Certified Platform Developer I<br />
						Issued March 2021
						<Divider />
						Credential ID 21953240
					</p>
					<div style={{ paddingBottom: "1rem" }}></div>
				</div>
			</div>
		</>
	);
};

export default Resume;
