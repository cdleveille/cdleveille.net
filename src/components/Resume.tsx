import { Link } from "@components";
import { RESUME } from "@content";
import { Stack } from "@mui/material";
import { displayDateMonthYear, getDateDifference } from "@util";

export const Resume = () => {
	const { name, links, experience, education, skills, certifications } = RESUME;

	return (
		<Stack spacing="0.5rem" className="resume align-left">
			<div className="resume-name align-center">{name}</div>
			<div className="resume-links">
				{links.map(({ label, href }, i) => (
					<Link href={href} className="resume-link" newTab key={i}>
						{label}
					</Link>
				))}
			</div>
			<div>
				<div className="resume-section-title">Experience</div>
				<Stack spacing="1rem">
					{experience.map(({ company, link, location, positions }, i) => {
						return (
							<div key={i}>
								<Stack
									direction="row"
									spacing="0.5rem"
									divider={<Divider />}
									style={{ marginLeft: Indent.L1 }}
								>
									<Link href={link} className="resume-link" newTab key={i}>
										{nonBreaking(company)}
									</Link>
									<div>{nonBreaking(location)}</div>
								</Stack>
								{positions.map(({ title, startDate, endDate, description }, j) => {
									return (
										<div key={j}>
											<Stack
												direction="row"
												spacing="0.5rem"
												divider={<Divider />}
												style={{ marginLeft: Indent.L2, marginTop: "0.25rem" }}
											>
												<div>{nonBreaking(title)}</div>
												<div>
													{nonBreaking(
														`${displayDateMonthYear(startDate)} - ${endDate ? displayDateMonthYear(endDate) : "Present"} (${getDateDifference(startDate, endDate)})`
													)}
												</div>
											</Stack>
											<ul style={{ marginLeft: Indent.L3 }}>
												{description.map((desc, k) => (
													<li key={k}>{desc}</li>
												))}
											</ul>
										</div>
									);
								})}
							</div>
						);
					})}
				</Stack>
			</div>
			<div>
				<div className="resume-section-title">Education</div>
				<Stack spacing="1rem" style={{ marginLeft: Indent.L1 }}>
					<div>
						<Stack direction="row" spacing="0.5rem" divider={<Divider />}>
							<Link href={education.link} className="resume-link" newTab>
								{education.school}
							</Link>
							<div>{education.location}</div>
						</Stack>
						<Stack direction="row" spacing="0.5rem" divider={<Divider />}>
							<div>{education.degree}</div>
							<div>Minor, {education.minor}</div>
							<div>{education.graduationDate}</div>
						</Stack>
					</div>
					<div>
						<b>Relevant Coursework:&nbsp;</b>
						{education.relevantCoursework.join(", ")}
					</div>
				</Stack>
			</div>
			<div>
				<div className="resume-section-title">Skills</div>
				<Stack spacing="1rem" style={{ marginLeft: Indent.L1 }}>
					<div>
						<b>Programming Languages:&nbsp;</b>
						{skills.programmingLanguages.join(", ")}
					</div>
					<div>
						<b>Software Proficiencies:&nbsp;</b>
						{skills.softwareProficiencies.join(", ")}
					</div>
				</Stack>
			</div>
			<div>
				<div className="resume-section-title">Certifications</div>
				<Stack spacing="1rem" style={{ marginLeft: Indent.L1 }}>
					{certifications.map(({ name, dateIssued, credentialId, link }, i) => {
						return (
							<div key={i}>
								<div>{name}</div>
								<Stack direction="row" spacing="0.5rem" divider={<Divider />}>
									<div>Issued {dateIssued}</div>
									<Link href={link} className="resume-link" newTab key={i}>
										{credentialId}
									</Link>
								</Stack>
							</div>
						);
					})}
				</Stack>
			</div>
		</Stack>
	);
};

const Divider = () => <span className="divider">|</span>;

const nonBreaking = (text: string) => text.replace(/ /g, "\u00a0");

enum Indent {
	L1 = "1.5rem",
	L2 = "3rem",
	L3 = "4.2rem"
}
