import type { Metadata } from "next";

import { About, Experience, Footer, Header, Links, Page, ProfPic, Projects } from "@components";

const HomePage = () => {
	return (
		<Page>
			<Header />
			<ProfPic />
			<Links />
			<Experience />
			<Projects />
			<About />
			<Footer />
		</Page>
	);
};

export default HomePage;

export const metadata: Metadata = {
	title: "Chris Leveille - Software Engineer",
	description: "Hello! My name is Chris and I am a software engineer from Western Massachusetts.",
	authors: { name: "Chris Leveille", url: "https://www.cdleveille.net" },
	openGraph: {
		title: "Chris Leveille - Software Engineer",
		description: "Hello! My name is Chris and I am a software engineer from Western Massachusetts.",
		type: "profile",
		firstName: "Chris",
		lastName: "Leveille",
		username: "cdleveille",
		emails: "cdleveille@gmail.com",
		url: "https://www.cdleveille.net",
		images: {
			url: "https://avatars.githubusercontent.com/u/1410481",
			secureUrl: "https://avatars.githubusercontent.com/u/1410481",
			type: "image/jpeg",
			alt: "Chris Leveille",
			width: 460,
			height: 460
		}
	}
};
