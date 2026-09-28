import type { RefAttributes } from "react";
import { Button as AriaButton } from "react-aria-components/Button";
import type { ButtonProps as AriaButtonProps } from "react-aria-components/Button";

export function Button({
	className,
	size = "sm",
	shape = "round",
	color = "filled",
	...props
}: Omit<AriaButtonProps, "className"> &
	RefAttributes<HTMLButtonElement> & {
		className?: string;
		size?: "xs" | "sm" | "md" | "lg" | "xl";
		shape?: "round" | "square";
		color?: "elevated" | "filled" | "tonal" | "outlined" | "text";
	}) {
	return (
		<AriaButton
			data-slot="button"
			data-size={size}
			data-shape={shape}
			data-color={color}
			className={`button ${className ?? ""}`.trim()}
			{...props}
		/>
	);
}
