import { Stack } from "@mui/material";

interface ISectionProps {
	children: React.ReactNode;
	title: string;
	id?: string;
}

export const Section = ({ children, title, id }: ISectionProps) => {
	return (
		<section className="section" id={id}>
			<Stack spacing="1rem">
				<h2 className="section-title">{title}</h2>
				<div>{children}</div>
			</Stack>
		</section>
	);
};
