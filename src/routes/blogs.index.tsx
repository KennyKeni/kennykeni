import { createFileRoute, Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogs, formatBlogDate } from "@/lib/blogs";

export const Route = createFileRoute("/blogs/")({
	component: Blogs,
});

function Blogs() {
	return (
		<div className="space-y-8">
			<section className="space-y-4">
				<p className="font-pixel-line text-xs tracking-[0.2em] text-muted-foreground uppercase">
					Writing Directory
				</p>
				<h1 className="font-pixel-square text-3xl tracking-wide uppercase md:text-5xl">
					Blogs
				</h1>
			</section>

			{blogs.length > 0 ? (
				<div className="grid gap-4 md:grid-cols-2 lg:[grid-auto-rows:1fr]">
					{blogs.map((blog) => (
						<Card
							key={blog.slug}
							className="h-full rounded-none border border-border shadow-none"
						>
							{blog.image ? (
								<img
									src={blog.image}
									alt=""
									className="aspect-video w-full border-b border-border object-cover"
									loading="lazy"
								/>
							) : null}
							<CardHeader className="space-y-3">
								<div className="flex flex-wrap items-start justify-between gap-3">
									<CardTitle className="font-pixel-square text-base tracking-wide uppercase">
										{blog.title}
									</CardTitle>
									<Badge
										variant="outline"
										className="font-pixel-line rounded-none text-[10px] tracking-wider uppercase"
									>
										{formatBlogDate(blog.publishedAt)}
									</Badge>
								</div>
								<div className="flex flex-wrap gap-2">
									{blog.tags.map((tag) => (
										<Badge
											key={tag}
											variant="secondary"
											className="font-pixel-line rounded-none text-[10px] tracking-wider uppercase"
										>
											{tag}
										</Badge>
									))}
								</div>
							</CardHeader>
							<CardContent className="flex flex-1 flex-col justify-between gap-6">
								<p className="font-pixel-grid text-xs leading-6 text-muted-foreground">
									{blog.summary}
								</p>
								<div className="flex flex-wrap gap-2">
									<Button asChild variant="primary" size="sm">
										<Link to="/blogs/$slug" params={{ slug: blog.slug }}>
											Read Post
										</Link>
									</Button>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			) : (
				<Card className="rounded-none border border-border shadow-none">
					<CardHeader className="space-y-3">
						<CardTitle className="font-pixel-square text-base tracking-wide uppercase">
							No Posts Yet
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="font-pixel-grid text-sm leading-6 text-muted-foreground">
							Writing will land here soon.
						</p>
					</CardContent>
				</Card>
			)}
		</div>
	);
}
