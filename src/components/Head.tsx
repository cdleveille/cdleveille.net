import NextHead from "next/head";

interface IHeadProps {
	title?: string;
}

const Head: React.FC<IHeadProps> = ({ title }) => {
	return (
		<NextHead>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="description" content="Chris Leveille - Software Engineer" />
			<meta name="theme-color" content="#0d1117" />
			<link rel="apple-touch-icon" sizes="180x180" href="img/icons/icon-apple-touch.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="img/icons/icon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="img/icons/icon-16x16.png" />
			<link rel="manifest" href="manifest.json" />
			<title>{title || "Chris Leveille - Software Engineer"}</title>
		</NextHead>
	);
};

export default Head;
