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
						{linkHref && action && (
							<a
								type="button"
								className="btn btn-dark"
								href={linkHref}
								target="_blank"
								rel="noreferrer"
								onClick={(e) => e.currentTarget.blur()}
							>
								{action}
							</a>
						)}
						<a
							type="button"
							className="btn btn-dark"
							href={repoLinkHref}
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
				<a href={linkHref || repoLinkHref} target="_blank" rel="noreferrer" onClick={(e) => e.currentTarget.blur()}>
					<img src={imgSrc} className="card-img project-img" alt={name} width="390" height="248" />
				</a>
			</div>
		</div>
	);
};

export default Project;
