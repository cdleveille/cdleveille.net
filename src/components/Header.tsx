import { Stack } from "@mui/material";

export const Header = () => {
	return (
		<header>
			<Stack spacing="1rem">
				<h1 className="title">Chris Leveille</h1>
				<p className="subtitle muted">Software Engineer</p>
				<p className="greeting">
					Hello! My name is Chris and I am a software engineer from Western Massachusetts.
				</p>
			</Stack>
		</header>
	);
};
