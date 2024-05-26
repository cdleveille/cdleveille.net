import { Href } from "@constants";

import type { Resume } from "@types";

export const RESUME: Resume = {
	name: "Christopher D. Leveille",
	links: [
		{
			label: "cdleveille@gmail.com",
			href: Href.EMAIL
		},
		{
			label: "linkedin.com/in/cdleveille",
			href: Href.LINKEDIN
		},
		{
			label: "github.com/cdleveille",
			href: Href.GITHUB
		},
		{
			label: "cdleveille.net",
			href: Href.WEBSITE
		}
	],
	experience: [
		{
			company: "Windsor Solutions",
			link: Href.WINDSOR,
			location: "Northampton, MA",
			positions: [
				{
					title: "Software Engineer",
					startDate: "April 2022",
					endDate: "Present",
					description: [
						"Develop and maintain an electronic forms solution used by state environmental agencies."
					]
				}
			]
		},
		{
			company: "Farm Credit Financial Partners",
			link: Href.FPI,
			location: "Springfield, MA",
			positions: [
				{
					title: "Contract Software Engineer",
					startDate: "November 2021",
					endDate: "February 2022",
					description: ["Processed farmer-borrower data for year end tax form distribution and reporting."]
				},
				{
					title: "Software Engineer II",
					startDate: "April 2017",
					endDate: "October 2021",
					description: [
						"Produced and supported loan origination/customer relationship management software used by Agricultural Credit Associations of the Farm Credit System.",
						"Supported production environments of multiple retail lending institutions, designed/developed/reviewed release work items."
					]
				}
			]
		},
		{
			company: "General Dynamics Missions Systems",
			link: Href.GDMS,
			location: "Taunton, MA",
			positions: [
				{
					title: "Software Engineer",
					startDate: "December 2014",
					endDate: "March 2017",
					description: ["Developed software modules for a dynamic military network management application."]
				}
			]
		},
		{
			company: "Leantu LLC",
			link: Href.LEANTU,
			location: "Hadley, MA",
			positions: [
				{
					title: "Web Developer",
					startDate: "July 2014",
					endDate: "November 2014",
					description: [
						"Assisted in the development and inventory management of web stores for regional bicycle, ski, and outerwear vendors including Valley Bike & Ski Werks, J Skis, and Orage."
					]
				}
			]
		}
	],
	education: {
		school: "Union College",
		link: Href.UNION,
		location: "Schenectady, NY",
		degree: "Bachelor of Science, Computer Science",
		minor: "Music",
		graduationDate: "June 2014",
		relevantCoursework: [
			"Game Development (Intro to CS)",
			"Data Structures",
			"Discrete Math for Computer Science",
			"Algorithm Design and Analysis",
			"Large-Scale Software Development",
			"Intro to Parallel Computing",
			"User Interfaces",
			"Web Programming",
			"Programming Languages",
			"Computer Organization",
			"Intro to Robotics",
			"Artificial Intelligence"
		]
	},
	skills: {
		programmingLanguages: ["JavaScript", "TypeScript", "C#", "SQL", "Python", "Java"],
		softwareProficiencies: [
			"Node.js",
			"Bun",
			"Express",
			"React",
			"Next.js",
			"MongoDB",
			"PostgreSQL",
			"Socket.IO",
			"Salesforce Platform",
			"Docker",
			".NET Framework",
			"SQL Server Management Studio",
			"Azure Data Studio",
			"Microsoft Visual Studio",
			"Git",
			"GitHub",
			"GitLab",
			"Azure DevOps",
			"Jira",
			"Confluence",
			"ServiceNow",
			"Windows",
			"MacOS",
			"Linux",
			"Microsoft Office"
		]
	},
	certifications: [
		{
			name: "Salesforce Certified Platform Developer I",
			dateIssued: "March 2021",
			credentialId: "Credential ID 21953240",
			link: Href.SF_CERT
		}
	]
};
