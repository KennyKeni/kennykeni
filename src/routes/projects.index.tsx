import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/projects/")({
	component: Projects,
});

function Projects() {
	return (
		<div className="space-y-8">
			<section className="space-y-4">
				<p className="font-pixel-line text-xs tracking-[0.2em] text-muted-foreground uppercase">
					Projects Directory
				</p>
				<h1 className="font-pixel-square text-3xl tracking-wide uppercase md:text-5xl">
					Projects
				</h1>
			</section>

			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:[grid-auto-rows:1fr]">
				{projects.map((project) => (
					<Card
						key={project.slug}
						className="h-full rounded-none border border-border shadow-none"
					>
						{project.image ? (
							<img
								src={project.image}
								alt=""
								className="aspect-video w-full border-b border-border object-cover"
								loading="lazy"
							/>
						) : null}
						<CardHeader className="space-y-3">
							<div className="flex flex-wrap items-start justify-between gap-3">
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
						<CardContent className="flex flex-1 flex-col justify-between gap-6">
							<p className="font-pixel-grid text-xs leading-6 text-muted-foreground">
								{project.summary}
							</p>
							<div className="flex flex-wrap gap-2">
								<Button asChild variant="primary" size="sm">
									<Link to="/projects/$slug" params={{ slug: project.slug }}>
										View Project
									</Link>
								</Button>
								{project.links.slice(0, 2).map((link) => (
									<Button key={link.href} asChild variant="action" size="sm">
										<a href={link.href} target="_blank" rel="noreferrer">
											{link.label}
											<ExternalLink className="h-3 w-3" />
										</a>
									</Button>
								))}
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
