import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap border font-pixel-line uppercase transition-colors focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				primary:
					"border-foreground bg-foreground text-background hover:opacity-90",
				outline:
					"border-border bg-transparent text-foreground hover:border-foreground",
				ghost:
					"border-transparent bg-transparent text-muted-foreground hover:text-foreground",
				nav: "border-border bg-transparent text-muted-foreground hover:text-foreground",
				navActive: "border-foreground bg-foreground text-white",
			},
			size: {
				sm: "px-3 py-2 text-[10px] tracking-wider",
				md: "px-3 py-2 text-[10px] tracking-wider",
				lg: "px-4 py-3 text-xs tracking-[0.16em]",
			},
		},
		defaultVariants: {
			variant: "outline",
			size: "md",
		},
	},
);

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, size }), className)}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
