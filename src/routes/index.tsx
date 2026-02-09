import { createFileRoute, Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getHomeData, getPersonData } from "@/data/portfolio";

export const Route = createFileRoute("/")({
	component: Home,
});

const homeData = getHomeData();
const person = getPersonData();

function Home() {
	const { profileLinks, education, experiences, featuredProjects, skills } =
		homeData;

	return (
		<div className="space-y-10">
			<section className="space-y-5">
				<p className="font-pixel-line text-xs tracking-[0.22em] text-muted-foreground uppercase">
					{person.homeEyebrow}
				</p>
				<h1 className="font-pixel-square text-4xl tracking-tight uppercase md:text-6xl">
					{person.name}
				</h1>
				<p className="max-w-4xl font-pixel-grid text-sm leading-7 text-muted-foreground">
					{person.contactLine}
				</p>
				<div className="flex flex-wrap gap-2">
					{profileLinks.map((item) => (
						<Button key={item.label} asChild variant="outline" size="sm">
							<a href={item.href}>{item.label}</a>
						</Button>
					))}
				</div>
				<Button asChild variant="primary" size="sm" className="inline-flex">
					<Link to="/projects">View All Projects</Link>
				</Button>
			</section>

			<Separator />

			<section className="space-y-4">
				<h2 className="font-pixel-triangle text-xl tracking-wider uppercase">
					Education
				</h2>
				<div className="space-y-4">
					{education.map((item) => (
						<Card
							key={`${item.degree}-${item.period}`}
							className="rounded-none border border-border shadow-none"
						>
							<CardHeader className="space-y-3">
								<div className="flex flex-wrap items-start justify-between gap-3">
									<CardTitle className="font-pixel-square text-base tracking-wide uppercase">
										{item.school}
									</CardTitle>
									<Badge
										variant="outline"
										className="font-pixel-line rounded-none text-[10px] tracking-wider uppercase"
									>
										{item.period}
									</Badge>
								</div>
								<p className="font-pixel-line text-xs tracking-wide uppercase text-muted-foreground">
									{item.location}
								</p>
							</CardHeader>
							<CardContent>
								<p className="font-pixel-grid text-xs leading-6 text-muted-foreground">
									{item.degree}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			<Separator />

			<section className="space-y-4">
				<h2 className="font-pixel-triangle text-xl tracking-wider uppercase">
					Experience
				</h2>
				<div className="space-y-4">
					{experiences.map((item) => (
						<Card
							key={`${item.role}-${item.org}`}
							className="rounded-none border border-border shadow-none"
						>
							<CardHeader className="space-y-3">
								<div className="flex flex-wrap items-start justify-between gap-3">
									<CardTitle className="font-pixel-square text-base tracking-wide uppercase">
										{item.role}
									</CardTitle>
									<Badge
										variant="outline"
										className="font-pixel-line rounded-none text-[10px] tracking-wider uppercase"
									>
										{item.period}
									</Badge>
								</div>
								<p className="font-pixel-line text-xs tracking-wide uppercase text-muted-foreground">
									{item.org} | {item.location}
								</p>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2">
									{item.bullets.map((bullet) => (
										<li
											key={bullet}
											className="font-pixel-grid text-xs leading-6 text-muted-foreground"
										>
											- {bullet}
										</li>
									))}
								</ul>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			<Separator />

			<section className="space-y-5">
				<div className="flex items-end justify-between gap-4">
					<h2 className="font-pixel-triangle text-xl tracking-wider uppercase">
						Featured Projects
					</h2>
					<Button
						asChild
						variant="ghost"
						size="sm"
						className="tracking-[0.2em]"
					>
						<Link to="/projects">See all</Link>
					</Button>
				</div>
				<div className="grid gap-4 md:grid-cols-3 md:[grid-auto-rows:1fr]">
					{featuredProjects.map((project) => (
						<Card
							key={project.title}
							className="h-full rounded-none border border-border shadow-none"
						>
							<CardHeader className="space-y-4">
								<CardTitle className="font-pixel-square text-lg tracking-wide uppercase">
									{project.title}
								</CardTitle>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag) => (
										<Badge
											key={tag}
											variant="outline"
											className="font-pixel-line rounded-none px-2 py-1 text-[10px] tracking-wider uppercase"
										>
											{tag}
										</Badge>
									))}
								</div>
							</CardHeader>
							<CardContent className="flex flex-1 flex-col justify-between gap-6">
								<p className="font-pixel-grid flex-1 text-xs leading-6 text-muted-foreground">
									{project.summary}
								</p>
								<Button asChild variant="primary" size="sm">
									<Link to={project.to}>View Project</Link>
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			<Separator />

			<section className="space-y-4">
				<h2 className="font-pixel-triangle text-xl tracking-wider uppercase">
					Technical Skills
				</h2>
				<div className="grid gap-4 md:grid-cols-2">
					{skills.map((item) => (
						<Card
							key={item.label}
							className="rounded-none border border-border shadow-none"
						>
							<CardHeader>
								<CardTitle className="font-pixel-square text-sm tracking-wide uppercase">
									{item.label}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="font-pixel-grid text-xs leading-6 text-muted-foreground">
									{item.value}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</section>
		</div>
	);
}
