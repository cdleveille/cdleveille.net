import { Link, Section } from "@components";
import { Href, Route } from "@constants";
import { Stack } from "@mui/material";

export const Experience = () => {
	return (
		<Section title="Experience" id="experience">
			<Stack spacing="1rem" className="align-left">
				<p>
					I currently work full-time for{" "}
					<Link href={Href.WINDSOR} newTab>
						Windsor Solutions
					</Link>{" "}
					of Northampton, MA. I have previously worked for{" "}
					<Link href={Href.FPI} newTab>
						Farm Credit Financial Partners
					</Link>{" "}
					and{" "}
					<Link href={Href.GDMS} newTab>
						General Dynamics Missions Systems
					</Link>
					, and before that attended{" "}
					<Link href={Href.UNION} newTab>
						Union College
					</Link>{" "}
					where I earned a Bachelor of Science in Computer Science.
				</p>
				<p>
					I am a full-stack engineer with professional programming experience primarily in JavaScript,
					TypeScript, C#, and SQL. I am also professionally{" "}
					<Link href={Href.SF_CERT} newTab>
						certified
					</Link>{" "}
					as a developer in the Salesforce Platform. Outside of work, I like to build things with technologies
					such as{" "}
					<Link href="https://nodejs.org" newTab>
						Node.js
					</Link>
					,{" "}
					<Link href="https://bun.sh" newTab>
						Bun
					</Link>
					,{" "}
					<Link href="https://socket.io" newTab>
						Socket.IO
					</Link>
					,{" "}
					<Link href="https://nextjs.org" newTab>
						Next.js
					</Link>
					, and{" "}
					<Link href="https://react.dev" newTab>
						React
					</Link>
					.
				</p>
				<p>
					For more information, check out my <Link href={Route.RESUME}>resume</Link>.
				</p>
			</Stack>
		</Section>
	);
};
