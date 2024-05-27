import NextLink from "next/link";

interface ILinkProps {
	href?: string;
	onClick?: () => void;
	children?: React.ReactNode;
	newTab?: boolean;
	className?: string;
}

export const Link = ({ children, href, onClick, newTab, ...rest }: ILinkProps) => {
	if (href)
		return (
			<NextLink href={href} target={newTab ? "_blank" : "_self"} {...rest}>
				{children ?? href}
			</NextLink>
		);
	return (
		<a onClick={onClick} {...rest}>
			{children ?? href}
		</a>
	);
};
