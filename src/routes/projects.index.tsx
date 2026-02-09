import { createFileRoute, Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProjectsIndexData } from "@/data/portfolio";

export const Route = createFileRoute("/projects/")({
	component: Projects,
});

const projectsIndexData = getProjectsIndexData();

function Projects() {
	const { eyebrow, title, items } = projectsIndexData;

	return (
		<div className="space-y-8">
			<section className="space-y-4">
				<p className="font-pixel-line text-xs tracking-[0.2em] text-muted-foreground uppercase">
					{eyebrow}
				</p>
				<h1 className="font-pixel-square text-3xl tracking-wide uppercase md:text-5xl">
					{title}
				</h1>
			</section>

			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
				{items.map((project) => (
					<Card
						key={project.title}
						className="rounded-none border border-border shadow-none"
					>
						<CardHeader className="space-y-3">
							<div className="flex items-center justify-between gap-3">
								<CardTitle className="font-pixel-square text-base tracking-wide uppercase">
									{project.title}
								</CardTitle>
								<Badge
									variant="outline"
									className="font-pixel-line rounded-none text-[10px] tracking-wider uppercase"
								>
									{project.status}
								</Badge>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.stack.map((item) => (
									<Badge
										key={item}
										variant="secondary"
										className="font-pixel-line rounded-none text-[10px] tracking-wider uppercase"
									>
										{item}
									</Badge>
								))}
							</div>
						</CardHeader>
						<CardContent className="space-y-6">
							<p className="font-pixel-grid text-xs leading-6 text-muted-foreground">
								{project.summary}
							</p>
							<Button asChild variant="primary" size="sm">
								<Link to={project.to}>View Project</Link>
							</Button>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
