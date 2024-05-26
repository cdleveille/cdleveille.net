import { About, Experience, Footer, Header, ProfPic, Projects } from "@components";
import { Links } from "@components/Links";
import { Stack } from "@mui/material";

const HomePage = () => {
	return (
		<main className="page-container">
			<Stack spacing="3rem" className="page-content">
				<Header />
				<ProfPic />
				<Links />
				<Experience />
				<Projects />
				<About />
				<Footer />
			</Stack>
		</main>
	);
};

export default HomePage;
