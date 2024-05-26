"use client";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import { Link } from "@components";
import { RESUME } from "@content";
import { Stack } from "@mui/material";

export const Resume = () => {
	const printRef = useRef(null);

	const print = useReactToPrint({
		content: () => printRef.current,
		pageStyle:
			"@page{ margin: 0; size: portrait; } * { font-family: Arial, Helvetica, sans-serif; } .resume-links { background-color: cyan; }",
		documentTitle: "christopher_leveille_resume.pdf"
	});

	const { name, links, experience, education, skills, certifications } = RESUME;

	return (
		<Stack spacing="3rem" className="page-content align-left">
			<Stack direction="row" spacing="2rem">
				<Link href="/">Home</Link>
				<Link onClick={() => print()}>Print</Link>
			</Stack>
			<Stack spacing="1rem" className="resume" ref={printRef}>
				<div className="resume-name align-center">{name}</div>
				<div className="resume-links">
					{links.map(({ label, href }, i) => (
						<Link href={href ?? label} className="resume-link" newTab key={i}>
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
										style={{ marginLeft: "1rem" }}
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
													style={{ marginLeft: "3rem", marginTop: "0.5rem" }}
												>
													<div>{nonBreaking(title)}</div>
													<div>{nonBreaking(`${startDate} - ${endDate}`)}</div>
												</Stack>
												<ul style={{ marginLeft: "6rem" }}>
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
					<Stack spacing="1rem" style={{ marginLeft: "1rem" }}>
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
							<b>Relevant Coursework:&nbsp;&nbsp;</b>
							{education.relevantCoursework.join(", ")}
						</div>
					</Stack>
				</div>
				<div>
					<div className="resume-section-title">Skills</div>
					<Stack spacing="1rem" style={{ marginLeft: "1rem" }}>
						<div>
							<b>Programming Languages:&nbsp;&nbsp;</b>
							{skills.programmingLanguages.join(", ")}
						</div>
						<div>
							<b>Software Proficiencies:&nbsp;&nbsp;</b>
							{skills.softwareProficiencies.join(", ")}
						</div>
					</Stack>
				</div>
				<div>
					<div className="resume-section-title">Certifications</div>
					<Stack spacing="1rem" style={{ marginLeft: "1rem" }}>
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
		</Stack>
	);
};

const Divider = () => <span style={{ userSelect: "none" }}>|</span>;

const nonBreaking = (text: string) => text.replace(/ /g, "\u00a0");
