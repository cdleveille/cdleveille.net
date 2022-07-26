import type { NextPage } from "next";

import Head from "../components/Head";

const Index: NextPage = () => {
	return (
		<>
			<Head />
			<div className="container-outer">
				<div className="container-inner">
					<div id="header" className="section centered">
						<h1>Chris Leveille</h1>
						<div id="title" className="text-muted">
							Software Engineer
						</div>
						<p>Welcome! My name is Chris and I am a software engineer from Western Massachusetts.</p>
					</div>
					<div id="pic" className="centered">
						<img src="img/cdleveille.webp" id="prof-pic" alt="Chris Leveille" width="460" height="460" />
					</div>
					<div id="links" className="section centered">
						<a
							type="button"
							className="btn btn-dark"
							href="mailto:cdleveille@gmail.com"
							target="_blank"
							rel="noreferrer"
							onClick={(e) => e.currentTarget.blur()}
						>
							Email
						</a>
						<a type="button" className="btn btn-dark" href="/resume" target="_blank" onClick={(e) => e.currentTarget.blur()}>
							Resume
						</a>
						<a
							type="button"
							className="btn btn-dark"
							href="https://www.linkedin.com/in/cdleveille/"
							target="_blank"
							rel="noreferrer"
							onClick={(e) => e.currentTarget.blur()}
						>
							LinkedIn
						</a>
						<a
							type="button"
							className="btn btn-dark"
							href="https://github.com/cdleveille"
							target="_blank"
							rel="noreferrer"
							onClick={(e) => e.currentTarget.blur()}
						>
							GitHub
						</a>
						<a
							type="button"
							className="btn btn-dark"
							href="https://trailblazer.me/id/cdleveille"
							target="_blank"
							rel="noreferrer"
							onClick={(e) => e.currentTarget.blur()}
						>
							Trailblazer
						</a>
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
						<div id="skifreejs" className="row">
							<div className="column vert-flex">
								<div>
									<h3>skifreejs</h3>
									<p>
										A remake of the classic PC game from Windows Entertainment Pack 3. Written in JavaScript/HTML5 Canvas backed
										by Node.js.
									</p>
									<div>
										<a
											type="button"
											className="btn btn-dark"
											href="https://skifreejs.herokuapp.com"
											target="_blank"
											rel="noreferrer"
											onClick={(e) => e.currentTarget.blur()}
										>
											Play
										</a>
										<a
											type="button"
											className="btn btn-dark"
											href="https://github.com/cdleveille/skifreejs"
											target="_blank"
											rel="noreferrer"
											onClick={(e) => e.currentTarget.blur()}
										>
											Repo
										</a>
									</div>
								</div>
							</div>
							<div className="column">
								<a href="https://skifreejs.herokuapp.com" target="_blank" rel="noreferrer" onClick={(e) => e.currentTarget.blur()}>
									<img src="img/ski.webp" className="card-img project-img" alt="skifreejs" width="390" height="248" />
								</a>
							</div>
						</div>

						<div id="copterjs" className="row">
							<div className="column vert-flex">
								<div>
									<h3>copterjs</h3>
									<p>Modern remake of the classic addicting flash game. Written in TypeScript/HTML5 Canvas backed by Node.js.</p>
									<div>
										<a
											type="button"
											className="btn btn-dark"
											href="https://copterjs.herokuapp.com"
											target="_blank"
											rel="noreferrer"
											onClick={(e) => e.currentTarget.blur()}
										>
											Play
										</a>
										<a
											type="button"
											className="btn btn-dark"
											href="https://github.com/cdleveille/copterjs"
											target="_blank"
											rel="noreferrer"
											onClick={(e) => e.currentTarget.blur()}
										>
											Repo
										</a>
									</div>
								</div>
							</div>
							<div className="column">
								<a href="https://copterjs.herokuapp.com" target="_blank" rel="noreferrer" onClick={(e) => e.currentTarget.blur()}>
									<img src="img/copter.webp" className="card-img project-img" alt="copterjs" width="390" height="248" />
								</a>
							</div>
						</div>

						<div id="discit" className="row">
							<div className="column vert-flex">
								<div>
									<h3>discit</h3>
									<p>A responsive disc golf disc search engine. Written in TypeScript and React (Next.js).</p>
									<div>
										<a
											type="button"
											className="btn btn-dark"
											href="https://discit.vercel.app"
											target="_blank"
											rel="noreferrer"
											onClick={(e) => e.currentTarget.blur()}
										>
											Launch
										</a>
										<a
											type="button"
											className="btn btn-dark"
											href="https://github.com/cdleveille/discit"
											target="_blank"
											rel="noreferrer"
											onClick={(e) => e.currentTarget.blur()}
										>
											Repo
										</a>
									</div>
								</div>
							</div>
							<div className="column">
								<a href="https://discit.vercel.app" target="_blank" rel="noreferrer" onClick={(e) => e.currentTarget.blur()}>
									<img src="img/discit.webp" className="card-img project-img" alt="discit" width="390" height="248" />
								</a>
							</div>
						</div>

						<div id="discit-api" className="row">
							<div className="column vert-flex">
								<div>
									<h3>discit-api</h3>
									<p>RESTful API for disc golf discs. Written in TypeScript, Node.js, Express, MikroORM and PostgreSQL.</p>
									<div>
										<a
											type="button"
											className="btn btn-dark"
											href="https://discitapi.herokuapp.com/"
											target="_blank"
											rel="noreferrer"
											onClick={(e) => e.currentTarget.blur()}
										>
											Launch
										</a>
										<a
											type="button"
											className="btn btn-dark"
											href="https://github.com/cdleveille/discit-api"
											target="_blank"
											rel="noreferrer"
											onClick={(e) => e.currentTarget.blur()}
										>
											Repo
										</a>
									</div>
								</div>
							</div>
							<div className="column">
								<a href="https://discitapi.herokuapp.com/" target="_blank" rel="noreferrer" onClick={(e) => e.currentTarget.blur()}>
									<img src="img/discit-api.webp" className="card-img project-img" alt="discit-api" width="390" height="248" />
								</a>
							</div>
						</div>

						<div id="slime" className="row">
							<div className="column vert-flex">
								<div>
									<h3>slime-volleyball</h3>
									<p>A remake of the classic browser game. Python (desktop) & JavaScript (web) versions.</p>
									<div>
										<a
											type="button"
											className="btn btn-dark"
											href="/slime"
											target="_blank"
											onClick={(e) => e.currentTarget.blur()}
										>
											Play
										</a>
										<a
											type="button"
											className="btn btn-dark"
											href="https://github.com/cdleveille/slime-volleyball"
											target="_blank"
											rel="noreferrer"
											onClick={(e) => e.currentTarget.blur()}
										>
											Repo
										</a>
									</div>
								</div>
							</div>
							<div className="column">
								<a href="/slime" target="_blank" rel="noreferrer" onClick={(e) => e.currentTarget.blur()}>
									<img src="img/slime.webp" className="card-img project-img" alt="slime-volleyball" width="390" height="248" />
								</a>
							</div>
						</div>
						<div id="putt" className="row">
							<div className="column vert-flex">
								<div>
									<h3>puttjs</h3>
									<p>2D minigolf game concept written in JavaScript/HTML5 Canvas.</p>
									<div>
										<a
											type="button"
											className="btn btn-dark"
											href="/putt"
											target="_blank"
											onClick={(e) => e.currentTarget.blur()}
										>
											Play
										</a>
										<a
											type="button"
											className="btn btn-dark"
											href="https://github.com/cdleveille/puttjs"
											target="_blank"
											rel="noreferrer"
											onClick={(e) => e.currentTarget.blur()}
										>
											Repo
										</a>
									</div>
								</div>
							</div>
							<div className="column">
								<a href="/putt" target="_blank" rel="noreferrer" onClick={(e) => e.currentTarget.blur()}>
									<img src="img/putt.webp" className="card-img project-img" alt="puttjs" width="390" height="248" />
								</a>
							</div>
						</div>
						<div id="pioholdem" className="row">
							<div className="column vert-flex">
								<div>
									<h3>pioholdem</h3>
									<p>
										Heads-up no-limit Texas Holdem bot written in .NET C# - AI from multiple sources including PioSOLVER game
										trees and Nash Equilibrium push/fold charts.
									</p>
									<a
										type="button"
										className="btn btn-dark"
										href="https://github.com/cdleveille/pioholdem"
										target="_blank"
										rel="noreferrer"
										onClick={(e) => e.currentTarget.blur()}
									>
										Repo
									</a>
								</div>
							</div>
							<div className="column">
								<a
									href="https://github.com/cdleveille/pioholdem"
									target="_blank"
									rel="noreferrer"
									onClick={(e) => e.currentTarget.blur()}
								>
									<img src="img/pioholdem.webp" className="card-img project-img" alt="pioholdem" width="390" height="248" />
								</a>
							</div>
						</div>
					</div>
					<div id="about" className="section centered">
						<h2 className="centered">About Me</h2>
						<p>In my free time I enjoy playing guitar, singing, skiing, disc golf, pool, table tennis, and video games.</p>
					</div>
					<div id="footer" className="section centered">
						<p id="copyright" className="text-muted">
							© {new Date().getFullYear()} Christopher D. Leveille
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Index;
