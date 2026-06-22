import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getHomeData, getPersonData } from "@/data/portfolio";
import { featuredProjects } from "@/lib/projects";

export const Route = createFileRoute("/")({
	component: Home,
});

const homeData = getHomeData();
const person = getPersonData();
const revealViewport = { once: true, amount: 0.2 };
const revealTransition = { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const };

function Home() {
	const { profileLinks, education, experiences, skills } = homeData;

	return (
		<div className="space-y-10">
			<motion.section
				className="space-y-5"
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={revealViewport}
				transition={revealTransition}
			>
				<h1 className="font-pixel-square text-5xl tracking-tight uppercase md:text-7xl">
					{person.name}
				</h1>
				<p className="max-w-4xl font-pixel-grid text-base leading-7 text-muted-foreground">
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
			</motion.section>

			<Separator />

			<motion.section
				className="space-y-4"
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={revealViewport}
				transition={revealTransition}
			>
				<h2 className="font-pixel-triangle text-2xl tracking-wider uppercase">
					Education
				</h2>
				<div className="space-y-4">
					{education.map((item, index) => (
						<motion.div
							key={`${item.degree}-${item.period}`}
							initial={{ opacity: 0, y: 18 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={revealViewport}
							transition={{ ...revealTransition, delay: index * 0.08 }}
						>
							<Card className="rounded-none border border-border shadow-none">
								<CardHeader className="space-y-3">
									<div className="flex flex-wrap items-start justify-between gap-3">
										<CardTitle className="font-pixel-square text-lg tracking-wide uppercase">
											{item.school}
										</CardTitle>
										<Badge
											variant="outline"
											className="font-pixel-line rounded-none text-[10px] tracking-wider uppercase"
										>
											{item.period}
										</Badge>
									</div>
									<p className="font-pixel-line text-sm tracking-wide uppercase text-muted-foreground">
										{item.location}
									</p>
								</CardHeader>
								<CardContent>
									<p className="font-pixel-grid text-sm leading-6 text-muted-foreground">
										{item.degree}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</motion.section>

			<Separator />

			<motion.section
				className="space-y-4"
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={revealViewport}
				transition={revealTransition}
			>
				<h2 className="font-pixel-triangle text-2xl tracking-wider uppercase">
					Experience
				</h2>
				<div className="space-y-4">
					{experiences.map((item, index) => (
						<motion.div
							key={`${item.role}-${item.org}`}
							initial={{ opacity: 0, y: 18 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={revealViewport}
							transition={{ ...revealTransition, delay: index * 0.08 }}
						>
							<Card className="rounded-none border border-border shadow-none">
								<CardHeader className="space-y-3">
									<div className="flex flex-wrap items-start justify-between gap-3">
										<CardTitle className="font-pixel-square text-lg tracking-wide uppercase">
											{item.role}
										</CardTitle>
										<Badge
											variant="outline"
											className="font-pixel-line rounded-none text-[10px] tracking-wider uppercase"
										>
											{item.period}
										</Badge>
									</div>
									<p className="font-pixel-line text-sm tracking-wide uppercase text-muted-foreground">
										{item.org} | {item.location}
									</p>
								</CardHeader>
								<CardContent>
									<ul className="space-y-2">
										{item.bullets.map((bullet) => (
											<li
												key={bullet}
												className="font-pixel-grid text-sm leading-6 text-muted-foreground"
											>
												- {bullet}
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</motion.section>

			<Separator />

			<motion.section
				className="space-y-5"
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={revealViewport}
				transition={revealTransition}
			>
				<div className="flex items-end justify-between gap-4">
					<h2 className="font-pixel-triangle text-2xl tracking-wider uppercase">
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
					{featuredProjects.map((project, index) => (
						<motion.div
							key={project.slug}
							initial={{ opacity: 0, y: 18 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={revealViewport}
							transition={{ ...revealTransition, delay: index * 0.1 }}
						>
							<Card className="h-full rounded-none border border-border shadow-none">
								{project.image ? (
									<img
										src={project.image}
										alt=""
										className="aspect-video w-full border-b border-border object-cover"
										loading="lazy"
									/>
								) : null}
								<CardHeader className="space-y-4">
									<CardTitle className="font-pixel-square text-xl tracking-wide uppercase">
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
									<p className="font-pixel-grid flex-1 text-sm leading-6 text-muted-foreground">
										{project.summary}
									</p>
									<div className="flex flex-wrap gap-2">
										<Button asChild variant="primary" size="sm">
											<Link
												to="/projects/$slug"
												params={{ slug: project.slug }}
											>
												View Project
											</Link>
										</Button>
										{project.links.slice(0, 2).map((link) => (
											<Button
												key={link.href}
												asChild
												variant="action"
												size="sm"
											>
												<a href={link.href} target="_blank" rel="noreferrer">
													{link.label}
													<ExternalLink className="h-3 w-3" />
												</a>
											</Button>
										))}
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</motion.section>

			<Separator />

			<motion.section
				className="space-y-4"
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={revealViewport}
				transition={revealTransition}
			>
				<h2 className="font-pixel-triangle text-2xl tracking-wider uppercase">
					Technical Skills
				</h2>
				<div className="grid gap-4 md:grid-cols-2">
					{skills.map((item, index) => (
						<motion.div
							key={item.label}
							initial={{ opacity: 0, y: 18 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={revealViewport}
							transition={{ ...revealTransition, delay: index * 0.07 }}
						>
							<Card className="rounded-none border border-border shadow-none">
								<CardHeader>
									<CardTitle className="font-pixel-square text-base tracking-wide uppercase">
										{item.label}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="font-pixel-grid text-sm leading-6 text-muted-foreground">
										{item.value}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</motion.section>
		</div>
	);
}
