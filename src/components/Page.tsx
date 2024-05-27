import { Stack } from "@mui/material";

interface IPageProps {
	children: React.ReactNode;
}

export const Page = ({ children }: IPageProps) => (
	<main className="page-container">
		<Stack spacing="3rem" className="page-content">
			{children}
		</Stack>
	</main>
);
