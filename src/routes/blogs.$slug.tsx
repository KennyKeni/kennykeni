import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { allBlogs } from "content-collections";
import type { ComponentType } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatBlogDate } from "@/lib/blogs";

type BlogMdxModule = {
	default: ComponentType;
};

const blogContentModules = import.meta.glob<BlogMdxModule>(
	"../../content/blogs/**/*.mdx",
	{ eager: true },
);

function getBlogContent(slug: string) {
	const entry = Object.entries(blogContentModules).find(([path]) =>
		path.endsWith(`/${slug}.mdx`),
	);
	return entry?.[1].default;
}

export const Route = createFileRoute("/blogs/$slug")({
	component: BlogPage,
	loader: ({ params: { slug } }) => {
		const blog = allBlogs.find((p) => p.slug === slug);
		if (!blog) {
			throw notFound();
		}
		if (!getBlogContent(slug)) {
			throw notFound();
		}
		return blog;
	},
});

function BlogPage() {
	const blog = Route.useLoaderData();
	const Content = getBlogContent(blog.slug);

	if (!Content) {
		throw notFound();
	}

	return (
		<article className="space-y-8">
			<header className="space-y-4">
				<p className="font-pixel-line text-xs tracking-[0.2em] text-muted-foreground uppercase">
					{formatBlogDate(blog.publishedAt)}
				</p>
				<h1 className="font-pixel-square text-3xl tracking-wide uppercase md:text-5xl">
					{blog.title}
				</h1>
				<div className="flex flex-wrap gap-2">
					{blog.tags.map((tag) => (
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

			{blog.image ? (
				<img
					src={blog.image}
					alt=""
					className="aspect-video w-full border border-border object-cover"
				/>
			) : null}

			<div className="prose prose-sm max-w-none">
				<Content />
			</div>

			<Button asChild variant="primary" size="sm">
				<Link to="/blogs">Back To Blogs</Link>
			</Button>
		</article>
	);
}
