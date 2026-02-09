import { z } from "zod";

import portfolioRaw from "./portfolio.json";

const linkSchema = z.object({
	label: z.string(),
	href: z.url(),
});

const routeLinkSchema = z.object({
	to: z.string(),
	label: z.string(),
});

const educationSchema = z.object({
	school: z.string(),
	degree: z.string(),
	location: z.string(),
	period: z.string(),
});

const experienceSchema = z.object({
	role: z.string(),
	org: z.string(),
	location: z.string(),
	period: z.string(),
	bullets: z.array(z.string()),
});

const featuredProjectSchema = z.object({
	to: z.string(),
	title: z.string(),
	summary: z.string(),
	tags: z.array(z.string()),
});

const skillSchema = z.object({
	label: z.string(),
	value: z.string(),
});

const projectsIndexItemSchema = z.object({
	to: z.string(),
	title: z.string(),
	status: z.string(),
	summary: z.string(),
	stack: z.array(z.string()),
});

const projectDetailSchema = z.object({
	slug: z.string(),
	title: z.string(),
	periodLabel: z.string(),
	tags: z.array(z.string()),
	bullets: z.array(z.string()),
});

const portfolioSchema = z.object({
	person: z.object({
		name: z.string(),
		homeEyebrow: z.string(),
		contactLine: z.string(),
	}),
	headerNav: z.array(routeLinkSchema),
	home: z.object({
		profileLinks: z.array(linkSchema),
		education: z.array(educationSchema),
		experiences: z.array(experienceSchema),
		featuredProjects: z.array(featuredProjectSchema),
		skills: z.array(skillSchema),
	}),
	projectsIndex: z.object({
		eyebrow: z.string(),
		title: z.string(),
		items: z.array(projectsIndexItemSchema),
	}),
	projectDetails: z.array(projectDetailSchema),
});

const portfolioData = portfolioSchema.parse(portfolioRaw);

export type PortfolioData = z.infer<typeof portfolioSchema>;
export type HeaderNavItem = z.infer<typeof routeLinkSchema>;
export type ProjectDetail = z.infer<typeof projectDetailSchema>;

export function getPortfolioData() {
	return portfolioData;
}

export function getHeaderNav() {
	return portfolioData.headerNav;
}

export function getHomeData() {
	return portfolioData.home;
}

export function getPersonData() {
	return portfolioData.person;
}

export function getProjectsIndexData() {
	return portfolioData.projectsIndex;
}

export function getProjectBySlug(slug: string) {
	return portfolioData.projectDetails.find((project) => project.slug === slug);
}
