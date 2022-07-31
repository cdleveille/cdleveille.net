import type { NextPage } from "next";
import Link from "next/link";

import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

import ButtonLink from "../components/ButtonLink";
import Head from "../components/Head";
import ProfPic from "../components/ProfPic";
import Project from "../components/Project";
import Section from "../components/Section";
import { Action, Img, Url } from "../types/constants";

const Index: NextPage = () => {
	return (
		<>
			<Head />
			<div className="container-outer">
				<div className="container-inner">
					<Section
						id="header"
						classes="centered"
						content={
							<>
								<h1>Chris Leveille</h1>
								<div id="title" className="muted">
									Software Engineer
								</div>
								<p>Hello! My name is Chris and I am a software engineer from Western Massachusetts.</p>
							</>
						}
					/>
					<Section
						id="pic"
						classes="centered"
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
						classes="centered"
						content={
							<div id="main-btn-layout">
								<Tooltip title="Email" placement="top" arrow={true} disableInteractive TransitionComponent={Zoom}>
									<div>
										<ButtonLink className="main-btn" href={Url.MAILTO} label={<img src={Img.GMAIL} width="32" />} />
									</div>
								</Tooltip>
								<Tooltip title="Resume" placement="top" arrow={true} disableInteractive TransitionComponent={Zoom}>
									<div>
										<ButtonLink
											className="main-btn"
											href={Url.RESUME}
											label={<img style={{ marginLeft: "3px" }} src={Img.RESUME} width="32" />}
											target="_self"
										/>
									</div>
								</Tooltip>
								<Tooltip title="LinkedIn" placement="top" arrow={true} disableInteractive TransitionComponent={Zoom}>
									<div>
										<ButtonLink className="main-btn" href={Url.LINKEDIN} label={<img src={Img.LINKEDIN} width="32" />} />
									</div>
								</Tooltip>
								<Tooltip title="GitHub" placement="top" arrow={true} disableInteractive TransitionComponent={Zoom}>
									<div>
										<ButtonLink className="main-btn" href={Url.GITHUB} label={<img src={Img.GITHUB} width="32" />} />
									</div>
								</Tooltip>
								<Tooltip title="Trailblazer" placement="top" arrow={true} disableInteractive TransitionComponent={Zoom}>
									<div>
										<ButtonLink className="main-btn" href={Url.TRAILBLAZER} label={<img src={Img.SALESFORCE} width="40" />} />
									</div>
								</Tooltip>
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
							</>
						}
					/>
					<Section
						id="projects"
						classes="centered"
						content={
							<>
								<h2>Projects</h2>
								<Project
									name="skifreejs"
									description="A remake of the classic PC game from Windows Entertainment Pack 3. Written in JavaScript/HTML5 Canvas backed by Node.js."
									linkHref={Url.SKIFREEJS}
									repoLinkHref={Url.SKIFREEJS_REPO}
									imgSrc={Img.SKI}
									action={Action.PLAY}
								/>
								<Project
									name="copterjs"
									description="Modern remake of the classic addicting flash game. Written in TypeScript/HTML5 Canvas backed by Node.js."
									linkHref={Url.COPTERJS}
									repoLinkHref={Url.COPTERJS_REPO}
									imgSrc={Img.COPTER}
									action={Action.PLAY}
								/>
								<Project
									name="discit"
									description="A responsive disc golf disc search engine. Built with Next.js and TypeScript."
									linkHref={Url.DISCIT}
									repoLinkHref={Url.DISCIT_REPO}
									imgSrc={Img.DISCIT}
									action={Action.LAUNCH}
								/>
								<Project
									name="discit-api"
									description="RESTful API for disc golf discs. Written in TypeScript, Node.js, Express, MikroORM and PostgreSQL."
									linkHref={Url.DISCIT_API}
									repoLinkHref={Url.DISCIT_API_REPO}
									imgSrc={Img.DISCIT_API}
									action={Action.LAUNCH}
								/>
								<Project
									name="gamepad-helper"
									description="Lightweight wrapper class for the HTML5 Gamepad API. Written in TypeScript. Check it out on the npm registry!"
									linkHref={Url.GAMEPAD_HELPER}
									repoLinkHref={Url.GAMEPAD_HELPER_REPO}
									imgSrc={Img.GAMEPAD_HELPER}
									action={Action.NPM}
								/>
								<Project
									name="slime-volleyball"
									description="A remake of the classic browser game. Python (desktop) & JavaScript (web) versions."
									linkHref={Url.SLIME}
									repoLinkHref={Url.SLIME_REPO}
									imgSrc={Img.SLIME}
									action={Action.PLAY}
								/>
								<Project
									name="puttjs"
									description="2D minigolf game concept written in JavaScript/HTML5 Canvas."
									linkHref={Url.PUTT}
									repoLinkHref={Url.PUTT_REPO}
									imgSrc={Img.PUTT}
									action={Action.PLAY}
								/>
								<Project
									name="pioholdem"
									description="Heads-up no-limit Texas Holdem bot written in .NET C# - AI from multiple sources including PioSOLVER game
										trees and Nash Equilibrium push/fold charts."
									repoLinkHref={Url.PIOHOLDEM_REPO}
									imgSrc={Img.PIOHOLDEM}
								/>
							</>
						}
					/>
					<Section
						id="about"
						classes="centered"
						content={
							<>
								<h2>About Me</h2>
								<p>In my free time I enjoy playing guitar, singing, skiing, disc golf, pool, table tennis, and video games.</p>
							</>
						}
					/>
					<Section id="footer" classes="centered muted" content={<p>© {new Date().getFullYear()} Christopher D. Leveille</p>} />
				</div>
			</div>
		</>
	);
};

export default Index;
