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
					as a developer in the Salesforce Platform. Outside of work, I like to spend time on personal
					projects using technologies such as Node.js, Bun, Socket.IO, Next.js, and React.
				</p>
				<p>
					For more information, check out my <Link href={Route.RESUME}>resume</Link>.
				</p>
			</Stack>
		</Section>
	);
};
