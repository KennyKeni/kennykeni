import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { getHeaderNav, getPersonData } from "@/data/portfolio";

const navItems = getHeaderNav();
const person = getPersonData();

export default function Header() {
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
					{navItems.map((item) => (
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
				</nav>
			</div>
		</header>
	);
}
