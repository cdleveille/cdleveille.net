import type { NextPage } from "next";
import Link from "next/link";

import ButtonLink from "../components/ButtonLink";
import Head from "../components/Head";
import ProfPic from "../components/ProfPic";
import Project from "../components/Project";
import Section from "../components/Section";

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
							<>
								<ButtonLink href="mailto:cdleveille@gmail.com" label="Email" />
								<ButtonLink href="/resume" label="Resume" target="_self" />
								<ButtonLink href="https://www.linkedin.com/in/cdleveille/" label="LinkedIn" />
								<ButtonLink href="https://github.com/cdleveille" label="GitHub" />
								<ButtonLink href="https://trailblazer.me/id/cdleveille" label="Trailblazer" />
							</>
						}
					/>
					<Section
						id="experience"
						content={
							<>
								<h2 className="centered">Experience</h2>
								<p>
									I currently work full-time for&nbsp;
									<a href="https://www.windsorsolutions.com/" target="_blank" rel="noreferrer">
										Windsor Solutions
									</a>
									&nbsp;of Northampton, MA.
								</p>
								<p>
									In early 2022 I finished working as a contractor at&nbsp;
									<a href="https://www.financialpartners.com/" target="_blank" rel="noreferrer">
										Farm Credit Financial Partners
									</a>
									, where I previously held a full-time position as well. Prior to that I worked for&nbsp;
									<a href="https://gdmissionsystems.com/" target="_blank" rel="noreferrer">
										General Dynamics Mission Systems
									</a>
									, and before that attended&nbsp;
									<a href="https://www.union.edu/" target="_blank" rel="noreferrer">
										Union College
									</a>
									&nbsp;where I earned a B.S. in Computer Science.
								</p>
								<p>
									I have professional programming experience primarily in SQL, C#, Java, and JavaScript, and have dedicated
									significant time to learning Node.js, TypeScript, and React among other technologies outside of work. I am also
									professionally&nbsp;
									<a
										href="https://trailhead.salesforce.com/credentials/certification-detail-print?searchString=lI01VISrcHRWF+rA/h9A4dipkjUutddgtd6X9RIuOTJs72Y6ykIDVowxSOLeWYVa"
										target="_blank"
										rel="noreferrer"
									>
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
									linkHref="https://skifreejs.herokuapp.com"
									repoLinkHref="https://github.com/cdleveille/skifreejs"
									imgSrc="/img/ski.webp"
									action="Play"
								/>
								<Project
									name="copterjs"
									description="Modern remake of the classic addicting flash game. Written in TypeScript/HTML5 Canvas backed by Node.js."
									linkHref="https://copterjs.herokuapp.com"
									repoLinkHref="https://github.com/cdleveille/copterjs"
									imgSrc="/img/copter.webp"
									action="Play"
								/>
								<Project
									name="discit"
									description="A responsive disc golf disc search engine. Built with Next.js and TypeScript."
									linkHref="https://discit.vercel.app"
									repoLinkHref="https://github.com/cdleveille/discit"
									imgSrc="/img/discit.webp"
									action="Launch"
								/>
								<Project
									name="discit-api"
									description="RESTful API for disc golf discs. Written in TypeScript, Node.js, Express, MikroORM and PostgreSQL."
									linkHref="https://discitapi.herokuapp.com/"
									repoLinkHref="https://github.com/cdleveille/discit-api"
									imgSrc="/img/discit-api.webp"
									action="Launch"
								/>
								<Project
									name="gamepad-helper"
									description="Lightweight wrapper class for the HTML5 Gamepad API. Written in TypeScript. Check it out on the npm registry!"
									linkHref="https://www.npmjs.com/package/gamepad-helper"
									repoLinkHref="https://github.com/cdleveille/gamepad-helper"
									imgSrc="/img/gamepad-helper.webp"
									action="npm"
								/>
								<Project
									name="slime-volleyball"
									description="A remake of the classic browser game. Python (desktop) & JavaScript (web) versions."
									linkHref="/slime"
									repoLinkHref="https://github.com/cdleveille/slime-volleyball"
									imgSrc="/img/slime.webp"
									action="Play"
								/>
								<Project
									name="puttjs"
									description="2D minigolf game concept written in JavaScript/HTML5 Canvas."
									linkHref="/putt"
									repoLinkHref="https://github.com/cdleveille/puttjs"
									imgSrc="/img/putt.webp"
									action="Play"
								/>
								<Project
									name="pioholdem"
									description="Heads-up no-limit Texas Holdem bot written in .NET C# - AI from multiple sources including PioSOLVER game
										trees and Nash Equilibrium push/fold charts."
									repoLinkHref="https://github.com/cdleveille/pioholdem"
									imgSrc="/img/pioholdem.webp"
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
