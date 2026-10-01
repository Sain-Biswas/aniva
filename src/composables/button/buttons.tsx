import type { ReactNode, RefAttributes } from "react";
import { Button as AriaButton } from "react-aria-components/Button";
import type { ButtonProps as AriaButtonProps } from "react-aria-components/Button";

import ProgressActivityIcon from "@material-symbols/svg-600/rounded/progress_activity-fill.svg?react";

export function Button({
	className,
	size = "sm",
	shape = "round",
	color = "filled",
	children,
	...props
}: Omit<AriaButtonProps, "className" | "children"> &
	RefAttributes<HTMLButtonElement> & {
		className?: string;
		children: ReactNode;
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
		>
			<ProgressActivityIcon className="button__progress" />
			{children}
		</AriaButton>
	);
}
