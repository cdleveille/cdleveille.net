export type Project = {
	name: string;
	description: string;
	linkLabel: string;
	linkHref: string;
	repoHref: string;
	imgSrc: string;
};

export type Resume = {
	name: string;
	links: ResumeLink[];
	experience: ResumeExperience[];
	education: ResumeEducation;
	skills: ResumeSkills;
	certifications: ResumeCertification[];
};

type ResumeLink = {
	label: string;
	href?: string;
};

type ResumeExperience = {
	company: string;
	link: string;
	location: string;
	positions: ResumeExperiencePosition[];
};

type ResumeExperiencePosition = {
	title: string;
	startDate: string;
	endDate: string;
	description: string[];
};

type ResumeEducation = {
	school: string;
	link: string;
	location: string;
	degree: string;
	minor: string;
	graduationDate: string;
	relevantCoursework: string[];
};

type ResumeSkills = {
	programmingLanguages: string[];
	softwareProficiencies: string[];
};

type ResumeCertification = {
	name: string;
	dateIssued: string;
	credentialId: string;
	link: string;
};
