/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true
};

const withPWA = require("next-pwa");

module.exports = withPWA({
	i18n: {
		locales: ["en"],
		defaultLocale: "en"
	},
	pwa: {
		dest: "public",
		register: true,
		skipWaiting: true,
		disable: process.env.NEXT_PUBLIC_IS_PROD == "false"
	},
	nextConfig
});
