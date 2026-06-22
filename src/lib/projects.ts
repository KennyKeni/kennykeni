import { allProjects } from "content-collections";

const projectOrder = [
	"aglaea",
	"ican",
	"learn-and",
	"banana-farm",
	"valedictorian",
	"agentic-rag",
	"breast-cancer-cnn",
];

function projectRank(slug: string) {
	const rank = projectOrder.indexOf(slug);
	return rank === -1 ? projectOrder.length : rank;
}

export const projects = [...allProjects].sort((a, b) => {
	const rankDelta = projectRank(a.slug) - projectRank(b.slug);
	return rankDelta || a.title.localeCompare(b.title);
});

export const featuredProjects = projects.filter((project) => project.featured);
