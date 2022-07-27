import type { NextPage } from "next";

import ButtonLink from "../components/ButtonLink";
import Head from "../components/Head";
import Project from "../components/Project";

const Index: NextPage = () => {
	return (
		<>
			<Head />
			<div className="container-outer">
				<div className="container-inner">
					<div id="header" className="section centered">
						<h1>Chris Leveille</h1>
						<div id="title" className="muted">
							Software Engineer
						</div>
						<p>Hello! My name is Chris and I am a software engineer from Western Massachusetts.</p>
					</div>
					<div id="pic" className="centered">
						<a href="img/cdleveille.webp">
							<img src="img/cdleveille.webp" id="prof-pic" alt="Chris Leveille" width="460" height="460" />
						</a>
					</div>
					<div id="links" className="section centered">
						<ButtonLink href="mailto:cdleveille@gmail.com" label="Email" />
						<ButtonLink href="/resume" label="Resume" />
						<ButtonLink href="https://www.linkedin.com/in/cdleveille/" label="LinkedIn" />
						<ButtonLink href="https://github.com/cdleveille" label="GitHub" />
						<ButtonLink href="https://trailblazer.me/id/cdleveille" label="Trailblazer" />
					</div>
					<div id="experience" className="section">
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
							I have professional programming experience primarily in SQL, C#, Java, and JavaScript, and have dedicated significant time
							to learning Node.js, TypeScript, and React among other technologies outside of work. I am also professionally&nbsp;
							<a
								href="https://trailhead.salesforce.com/credentials/certification-detail-print?searchString=lI01VISrcHRWF+rA/h9A4dipkjUutddgtd6X9RIuOTJs72Y6ykIDVowxSOLeWYVa"
								target="_blank"
								rel="noreferrer"
							>
								certified
							</a>
							&nbsp;as a developer in the Salesforce Platform.
						</p>
					</div>
					<div id="projects" className="section">
						<h2 className="centered">Projects</h2>
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
							linkHref="https://discit-api.herokuapp.com/"
							repoLinkHref="https://github.com/cdleveille/discit-api"
							imgSrc="/img/discit-api.webp"
							action="Launch"
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
					</div>
					<div id="about" className="section centered">
						<h2 className="centered">About Me</h2>
						<p>In my free time I enjoy playing guitar, singing, skiing, disc golf, pool, table tennis, and video games.</p>
					</div>
					<div id="footer" className="section centered">
						<p id="copyright" className="muted">
							© {new Date().getFullYear()} Christopher D. Leveille
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Index;
