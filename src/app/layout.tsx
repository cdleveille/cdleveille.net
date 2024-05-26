import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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

const RootLayout = ({
	children
}: Readonly<{
	children: React.ReactNode;
}>) => (
	<html lang="en">
		<body className={inter.className}>{children}</body>
	</html>
);

export default RootLayout;
