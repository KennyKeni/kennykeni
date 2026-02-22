import { createFileRoute, Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getProjectBySlug } from "@/data/portfolio";

export const Route = createFileRoute("/projects/learn-and")({
	component: LearnAndPage,
});

function LearnAndPage() {
	const project = getProjectBySlug("learn-and");
	if (!project) {
		throw new Error("Missing project data for slug: learn-and");
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
			</header>

			<Separator />

			<ul className="space-y-2">
				{project.bullets.map((bullet) => (
					<li
						key={bullet}
						className="font-pixel-grid text-xs leading-6 text-muted-foreground"
					>
						- {bullet}
					</li>
				))}
			</ul>

			<Button asChild variant="primary" size="sm">
				<Link to="/projects">Back To Projects</Link>
			</Button>
		</article>
	);
}
