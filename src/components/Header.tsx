import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
	getHeaderNav,
	getPersonData,
	getProjectsIndexData,
} from "@/data/portfolio";

const navItems = getHeaderNav();
const person = getPersonData();
const projectsIndex = getProjectsIndexData();

export default function Header() {
	const pathname = useRouterState({
		select: (state) => state.location.pathname,
	});
	const projectsRoot = navItems.find((item) => item.to === "/projects");
	const topLevelItems = navItems.filter(
		(item) => item.to !== "/projects" && !item.to.startsWith("/projects/"),
	);
	const isProjectsRoute =
		pathname === "/projects" || pathname.startsWith("/projects/");

	return (
		<header className="border-b border-border bg-background/95 backdrop-blur">
			<div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 lg:flex-row lg:items-center lg:justify-between">
				<Link
					to="/"
					className="font-pixel-square text-lg tracking-wide text-foreground uppercase"
				>
					{person.name}
				</Link>
				<nav className="flex flex-wrap gap-2">
					{topLevelItems.map((item) => (
						<Button key={item.to} asChild variant="nav" size="md">
							<Link
								to={item.to}
								activeProps={{
									className:
										"!border-foreground !bg-foreground !text-white hover:!text-white",
								}}
							>
								{item.label}
							</Link>
						</Button>
					))}
					{projectsRoot ? (
						<HoverCard openDelay={80} closeDelay={80}>
							<HoverCardTrigger asChild>
								<Button
									variant="nav"
									size="md"
									className={
										isProjectsRoute
											? "!border-foreground !bg-foreground !text-white hover:!text-white"
											: undefined
									}
								>
									{projectsRoot.label}
									<ChevronDown className="h-3.5 w-3.5" />
								</Button>
							</HoverCardTrigger>
							<HoverCardContent
								align="end"
								sideOffset={10}
								className="w-56 rounded-none border-border p-2"
							>
								<div className="flex flex-col gap-1">
									<Button
										asChild
										variant="nav"
										size="md"
										className="w-full justify-start"
									>
										<Link
											to={projectsRoot.to}
											activeProps={{
												className:
													"!border-foreground !bg-foreground !text-white hover:!text-white",
											}}
										>
											All Projects
										</Link>
									</Button>
									{projectsIndex.items.map((item) => (
										<Button
											key={item.to}
											asChild
											variant="nav"
											size="md"
											className="w-full justify-start"
										>
											<Link
												to={item.to}
												activeProps={{
													className:
														"!border-foreground !bg-foreground !text-white hover:!text-white",
												}}
											>
												{item.title}
											</Link>
										</Button>
									))}
								</div>
							</HoverCardContent>
						</HoverCard>
					) : null}
				</nav>
			</div>
		</header>
	);
}
