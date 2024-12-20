import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

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
