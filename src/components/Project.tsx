import Link from "next/link";

import ButtonLink from "./ButtonLink";

interface IProjectProps {
	name: string;
	description: string;
	linkHref?: string;
	repoLinkHref: string;
	imgSrc: string;
	action?: string;
}

const Project: React.FC<IProjectProps> = ({ name, description, linkHref, repoLinkHref, imgSrc, action }) => {
	return (
		<div className="row">
			<div className="column vert-flex">
				<div>
					<h3>{name}</h3>
					<p>{description}</p>
					<div>
						{linkHref && action && <ButtonLink href={linkHref} label={action} />}
						<ButtonLink href={repoLinkHref} label="Repo" />
					</div>
				</div>
			</div>
			<div className="column">
				<Link href={linkHref || repoLinkHref}>
					<a target="_blank" rel="noreferrer" onClick={(e) => e.currentTarget.blur()}>
						<img src={imgSrc} className="card-img project-img" alt={name} width="390" height="248" />
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Project;
