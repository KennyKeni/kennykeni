import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { allProjects } from "content-collections";
import type { ComponentType } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type ProjectMdxModule = {
	default: ComponentType;
};

const projectContentModules = import.meta.glob<ProjectMdxModule>(
	"../../content/projects/*.mdx",
	{ eager: true },
);

function getProjectContent(slug: string) {
	const entry = Object.entries(projectContentModules).find(([path]) =>
		path.endsWith(`/${slug}.mdx`),
	);
	return entry?.[1].default;
}

export const Route = createFileRoute("/projects/$slug")({
	component: ProjectPage,
	loader: ({ params: { slug } }) => {
		const project = allProjects.find((p) => p.slug === slug);
		if (!project) {
			throw notFound();
		}
		if (!getProjectContent(slug)) {
			throw notFound();
		}
		return project;
	},
});

function ProjectPage() {
	const project = Route.useLoaderData();
	const Content = getProjectContent(project.slug);

	if (!Content) {
		throw notFound();
	}

	return (
		<article className="space-y-8">
			<header className="space-y-4">
				<p className="font-pixel-line text-xs tracking-[0.2em] text-muted-foreground uppercase">
					{project.periodLabel}
				</p>
				<h1 className="font-pixel-square text-3xl tracking-wide uppercase md:text-5xl">
					{project.title}
				</h1>
				<div className="flex flex-wrap gap-2">
					{project.tags.map((tag) => (
						<Badge
							key={tag}
							variant="outline"
							className="font-pixel-line rounded-none text-[10px] uppercase"
						>
							{tag}
						</Badge>
					))}
				</div>
				<div className="flex flex-wrap gap-2">
					<Badge
						variant="secondary"
						className="font-pixel-line rounded-none text-[10px] uppercase"
					>
						{project.status}
					</Badge>
					{project.links.map((link) => (
						<Button key={link.href} asChild variant="outline" size="sm">
							<a href={link.href} target="_blank" rel="noreferrer">
								{link.label}
							</a>
						</Button>
					))}
				</div>
			</header>

			<Separator />

			{project.image ? (
				<img
					src={project.image}
					alt=""
					className="aspect-video w-full border border-border object-cover"
				/>
			) : null}

			<div className="prose prose-sm max-w-none">
				<Content />
			</div>

			<Button asChild variant="primary" size="sm">
				<Link to="/projects">Back To Projects</Link>
			</Button>
		</article>
	);
}
