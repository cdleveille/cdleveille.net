import Head from "next/head";
import React from "react";

export const HeadContent: React.FC = () => {
	return (
		<Head>
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="description" content="Chris Leveille - Software Engineer"></meta>
			<meta name="theme-color" content="#0d1117"></meta>
			<link rel="apple-touch-icon" sizes="180x180" href="img/icons/icon-180x180.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="img/icons/icon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="img/icons/icon-16x16.png" />
			<link rel="manifest" href="manifest.json" />
			<title>Chris Leveille - Software Engineer</title>
		</Head>
	);
};

export default HeadContent;
