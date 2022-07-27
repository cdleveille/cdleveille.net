interface ILinkProps {
	href: string;
	label: string;
}

const Link: React.FC<ILinkProps> = ({ href, label }) => {
	return (
		<a type="button" className="btn btn-dark" href={href} target="_blank" rel="noreferrer" onClick={(e) => e.currentTarget.blur()}>
			{label}
		</a>
	);
};

export default Link;
