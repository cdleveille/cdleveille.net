import Head from "next/head";
import React from "react";

export const HeadContent: React.FC = () => {
	return (
		<Head>
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />
			<link rel="manifest" href="/img/favicon/site.webmanifest" />
			<title>Chris Leveille - Software Engineer</title>
		</Head>
	);
};

export default HeadContent;
