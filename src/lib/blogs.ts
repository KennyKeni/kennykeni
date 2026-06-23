import { allBlogs } from "content-collections";

const dateFormatter = new Intl.DateTimeFormat("en", {
	month: "short",
	day: "numeric",
	timeZone: "UTC",
	year: "numeric",
});

export function formatBlogDate(publishedAt: string) {
	return dateFormatter.format(new Date(`${publishedAt}T00:00:00.000Z`));
}

export const blogs = [...allBlogs].sort((a, b) =>
	b.publishedAt.localeCompare(a.publishedAt),
);
