import Image from "next/image";

import { Link, Section } from "@components";
import { ProjectImg } from "@constants";
import { PROJECTS } from "@content";
import { Stack } from "@mui/material";

export const Projects = () => {
	return (
		<Section title="Projects" id="projects">
			<Stack spacing="2rem">
				{PROJECTS.map(({ name, description, linkLabel, linkHref, repoHref, imgSrc }, i) => (
					<Stack
						direction={{ s: "column", md: "row" }}
						spacing={{ s: "0rem", md: "2rem" }}
						className="project"
						key={i}
					>
						<Stack spacing="0.5rem" className="project-about">
							<h3 className="project-name">{name}</h3>
							<p>{description}</p>
							<Stack direction="row" spacing="2rem">
								<Link href={linkHref} newTab>
									{linkLabel}
								</Link>
								<Link href={repoHref} newTab>
									Repo
								</Link>
							</Stack>
						</Stack>
						<Link href={linkHref} newTab>
							<Image
								src={imgSrc}
								alt={name}
								width={ProjectImg.WIDTH}
								height={ProjectImg.HEIGHT}
								className="project-img"
							/>
						</Link>
					</Stack>
				))}
			</Stack>
		</Section>
	);
};
