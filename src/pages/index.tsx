import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

import ButtonLink from "../components/ButtonLink";
import Head from "../components/Head";
import ProfPic from "../components/ProfPic";
import Project from "../components/Project";
import Section from "../components/Section";
import Tooltip from "../components/Tooltip";
import { IResponse } from "../types/abstract";
import { Action, Img, Url } from "../types/constants";

const Index: NextPage = () => {
	const [age, setAge] = useState<number | undefined>(undefined);

	useEffect(() => {
		(async () => {
			const res = await fetch("/api/age");
			const json = (await res.json()) as IResponse<number>;
			setAge(json.data);
		})();
	}, []);

	return (
		<>
			<Head />
			<div className="container-outer">
				<div className="container-inner">
					<div className="spacer"></div>
					<Section
						id="header"
						className="centered"
						content={
							<>
								<h1>Chris Leveille</h1>
								<div id="title" className="muted">
									Software Engineer
								</div>
								<div>Hello! My name is Chris and I am a software engineer from Western Massachusetts.</div>
							</>
						}
					/>
					<Section
						id="pic"
						className="centered"
						content={
							<Link href="/pic">
								<a>
									<ProfPic id="prof-pic" />
								</a>
							</Link>
						}
					/>
					<Section
						id="links"
						className="centered"
						content={
							<div id="main-btn-layout">
								<div className="main-btn-container">
									<Tooltip
										title="Email"
										child={
											<ButtonLink
												className="main-btn"
												href={Url.MAILTO}
												label={<img src={Img.GMAIL} alt="Email" width="32" height="32" />}
											/>
										}
									/>
								</div>
								<div className="main-btn-container">
									<Tooltip
										title="Resume"
										child={
											<ButtonLink
												className="main-btn"
												href={Url.RESUME}
												label={<img style={{ marginLeft: "3px" }} src={Img.RESUME} alt="Resume" width="32" height="32" />}
												target="_self"
											/>
										}
									/>
								</div>
								<div className="main-btn-container">
									<Tooltip
										title="LinkedIn"
										child={
											<ButtonLink
												className="main-btn"
												href={Url.LINKEDIN}
												label={<img src={Img.LINKEDIN} alt="LinkedIn" width="32" height="32" />}
											/>
										}
									/>
								</div>
								<div className="main-btn-container">
									<Tooltip
										title="GitHub"
										child={
											<ButtonLink
												className="main-btn"
												href={Url.GITHUB}
												label={<img src={Img.GITHUB} alt="GitHub" width="32" height="32" />}
											/>
										}
									/>
								</div>
								<div className="main-btn-container">
									<Tooltip
										title="Trailblazer"
										child={
											<ButtonLink
												className="main-btn"
												href={Url.TRAILBLAZER}
												label={<img src={Img.SALESFORCE} alt="Trailblazer" width="32" height="32" />}
											/>
										}
									/>
								</div>
							</div>
						}
					/>
					<Section
						id="experience"
						content={
							<>
								<h2 className="centered">Experience</h2>
								<p>
									I currently work full-time for&nbsp;
									<a href={Url.WINDSOR} target="_blank" rel="noreferrer">
										Windsor Solutions
									</a>
									&nbsp;of Northampton, MA.
								</p>
								<p>
									In early 2022 I finished working as a contractor at&nbsp;
									<a href={Url.FPI} target="_blank" rel="noreferrer">
										Farm Credit Financial Partners
									</a>
									, where I previously held a full-time position as well. Prior to that I worked for&nbsp;
									<a href={Url.GD} target="_blank" rel="noreferrer">
										General Dynamics Mission Systems
									</a>
									, and before that attended&nbsp;
									<a href={Url.UNION} target="_blank" rel="noreferrer">
										Union College
									</a>
									&nbsp;where I earned a B.S. in Computer Science.
								</p>
								<p>
									I have professional programming experience primarily in SQL, C#, Java, and JavaScript, and have dedicated
									significant time to learning Node.js, TypeScript, and React among other technologies outside of work. I am also
									professionally&nbsp;
									<a href={Url.SF_CERT} target="_blank" rel="noreferrer">
										certified
									</a>
									&nbsp;as a developer in the Salesforce Platform.
								</p>
								<p style={{ marginBottom: "0" }}>
									For more information, feel free to check out my{" "}
									<a href={Url.RESUME} rel="noreferrer">
										resume
									</a>
									.
								</p>
							</>
						}
					/>
					<Section
						id="projects"
						className="centered"
						content={
							<>
								<h2>Projects</h2>
								<Project
									name="skifreejs"
									description="Fan remake of the classic PC game from Windows Entertainment Pack 3."
									linkHref={Url.SKIFREEJS}
									repoLinkHref={Url.SKIFREEJS_REPO}
									imgSrc={Img.SKI}
									action={Action.PLAY}
								/>
								<Project
									name="copterjs"
									description="Modern remake of the classic addicting flash game."
									linkHref={Url.COPTERJS}
									repoLinkHref={Url.COPTERJS_REPO}
									imgSrc={Img.COPTER}
									action={Action.PLAY}
								/>
								<Project
									name="discit"
									description="A responsive disc golf disc search engine."
									linkHref={Url.DISCIT}
									repoLinkHref={Url.DISCIT_REPO}
									imgSrc={Img.DISCIT}
									action={Action.LAUNCH}
								/>
								<Project
									name="discit-api"
									description="RESTful API for disc golf discs."
									linkHref={Url.DISCIT_API}
									repoLinkHref={Url.DISCIT_API_REPO}
									imgSrc={Img.DISCIT_API}
									action={Action.LAUNCH}
								/>
								<Project
									name="gamepad-helper"
									description="Lightweight wrapper class for the HTML5 Gamepad API. Check it out on the npm registry!"
									linkHref={Url.GAMEPAD_HELPER}
									repoLinkHref={Url.GAMEPAD_HELPER_REPO}
									imgSrc={Img.GAMEPAD_HELPER}
									action={Action.NPM}
								/>
								<Project
									name="slime-volleyball"
									description="A remake of the classic browser game."
									linkHref={Url.SLIME}
									repoLinkHref={Url.SLIME_REPO}
									imgSrc={Img.SLIME}
									action={Action.PLAY}
								/>
								<Project
									name="puttjs"
									description="2D minigolf game concept."
									linkHref={Url.PUTT}
									repoLinkHref={Url.PUTT_REPO}
									imgSrc={Img.PUTT}
									action={Action.PLAY}
								/>
								<Project
									name="pioholdem"
									description="Heads-up no-limit Texas Holdem bot. AI from multiple sources including PioSOLVER game trees and Nash Equilibrium push/fold charts."
									repoLinkHref={Url.PIOHOLDEM_REPO}
									imgSrc={Img.PIOHOLDEM}
								/>
							</>
						}
					/>
					<Section
						id="about"
						className="centered"
						content={
							<>
								<h2>About Me</h2>
								<div>
									{age ? `I am ${age} years old, and in` : "In"} my free time I enjoy playing guitar, singing, skiing, disc golf,
									pool, table tennis, and video games.
								</div>
							</>
						}
					/>
					<Section id="footer" className="centered muted" content={<div>© {new Date().getFullYear()} Christopher D. Leveille</div>} />
					<div className="spacer"></div>
				</div>
			</div>
		</>
	);
};

export default Index;
