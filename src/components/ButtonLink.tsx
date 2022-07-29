import Link from "next/link";

interface IButtonLinkProps {
	href?: string;
	label: string;
	target?: string;
	onClick?: (...args: any[]) => void;
}

const ButtonLink: React.FC<IButtonLinkProps> = ({ href, label, target, onClick }) => {
	return (
		<Link href={href || "/resume/print"}>
			<a
				type="button"
				className="btn btn-dark"
				target={target || "_blank"}
				rel="noreferrer"
				onClick={(e) => {
					e.currentTarget.blur();
					onClick && onClick(e);
				}}
			>
				{label}
			</a>
		</Link>
	);
};

export default ButtonLink;
