interface IButtonLinkProps {
	href: string;
	label: string;
}

const ButtonLink: React.FC<IButtonLinkProps> = ({ href, label }) => {
	return (
		<a type="button" className="btn btn-dark" href={href} target="_blank" rel="noreferrer" onClick={(e) => e.currentTarget.blur()}>
			{label}
		</a>
	);
};

export default ButtonLink;
