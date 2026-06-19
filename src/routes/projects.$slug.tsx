import { MDXContent } from "@content-collections/mdx/react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { allProjects } from "content-collections";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/projects/$slug")({
	component: ProjectPage,
	loader: ({ params: { slug } }) => {
		const project = allProjects.find((p) => p.slug === slug);
		if (!project) {
			throw notFound();
		}
		return project;
	},
});

function ProjectPage() {
	const project = Route.useLoaderData();

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
			</header>

			<Separator />

			<div className="space-y-2">
				<MDXContent code={project.mdx} />
			</div>

			<Button asChild variant="primary" size="sm">
				<Link to="/projects">Back To Projects</Link>
			</Button>
		</article>
	);
}
