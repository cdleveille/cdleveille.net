import Link from "next/link";

interface IButtonLinkProps {
	href: string;
	label: string;
	target?: string;
}

const ButtonLink: React.FC<IButtonLinkProps> = ({ href, label, target }) => {
	return (
		<Link href={href}>
			<a type="button" className="btn btn-dark" target={target || "_blank"} rel="noreferrer" onClick={(e) => e.currentTarget.blur()}>
				{label}
			</a>
		</Link>
	);
};

export default ButtonLink;
