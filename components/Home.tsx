import React from "react";

const Home: React.FC = () => {
	return (
		<>
			<div className="container-outer">
				<div className="container-inner">
					<div id="header" className="section centered">
						<h1>Chris Leveille</h1>
						<h5 className="text-muted">Software Engineer</h5>
						<p>Welcome! My name is Chris and I am a software engineer from Western Massachusetts.</p>
					</div>
					<div id="pic" className="section centered">
						<img src="/img/cdleveille.jpg" id="prof-pic" className="rounded-circle" />
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
							Résumé
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
						<p>I am currently looking for new opportunities!</p>
						<p>
							I recently finished working as contractor at&nbsp;
							<a href="https://www.financialpartners.com/" target="_blank" rel="noreferrer">
								Farm Credit Financial Partners
							</a>
							, where I previously held a full-time position as well. I also used to work for&nbsp;
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
							I have experience with many programming languages and technologies, but am most proficient in SQL, C#, Node.js,
							JavaScript, and TypeScript. I am also professionally&nbsp;
							<a
								href="https://trailhead.salesforce.com/credentials/certification-detail-print?searchString=lI01VISrcHRWF+rA/h9A4dipkjUutddgtd6X9RIuOTJs72Y6ykIDVowxSOLeWYVa"
								target="_blank"
								rel="noreferrer"
							>
								certified
							</a>
							&nbsp;in the Salesforce Platform.
						</p>
					</div>
					<div id="projects" className="section">
						<h2 className="centered">Projects</h2>
						<div id="skifreejs" className="row">
							<div className="column vert-flex">
								<div>
									<h4>skifreejs</h4>
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
								<img src="/img/ski.png" className="card-img project-img" />
							</div>
						</div>

						<div id="discit" className="row">
							<div className="column vert-flex">
								<div>
									<h4>discit-api</h4>
									<p>RESTful API for disc golf discs.</p>
									<div>
										<a
											type="button"
											className="btn btn-dark"
											href="https://discitapi.herokuapp.com/"
											target="_blank"
											rel="noreferrer"
											onClick={(e) => e.currentTarget.blur()}
										>
											Use
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
								<img src="/img/discit.png" className="card-img project-img" />
							</div>
						</div>

						<div id="slime" className="row">
							<div className="column vert-flex">
								<div>
									<h4>slime-volleyball</h4>
									<p>A remake of the classic browser game. Python (desktop) & JavaScript (web) versions.</p>
									<div>
										<a type="button" className="btn btn-dark" href="/slime" target="_blank">
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
								<img src="/img/slime.png" className="card-img project-img" />
							</div>
						</div>
						<div id="putt" className="row">
							<div className="column vert-flex">
								<div>
									<h4>puttjs</h4>
									<p>2D minigolf game written in JavaScript/HTML5 Canvas.</p>
									<div>
										<a type="button" className="btn btn-dark" href="/putt" target="_blank">
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
								<img src="/img/putt.png" className="card-img project-img" />
							</div>
						</div>
						<div id="pioholdem" className="row">
							<div className="column vert-flex">
								<div>
									<h4>pioholdem</h4>
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
								<img src="/img/pioholdem.png" className="card-img project-img" />
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

export default Home;
