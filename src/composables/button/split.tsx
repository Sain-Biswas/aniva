import type { ComponentProps } from "react";
import { Button, type ButtonProps } from "react-aria-components/Button";

interface SplitButtonProps extends ComponentProps<"div"> {
	size?: "xs" | "sm" | "md" | "lg" | "xl";
	color?: "elevated" | "filled" | "tonal" | "outline";
}

export function SplitButton({ size = "sm", color = "filled", className, ...props }: SplitButtonProps) {
	return (
		<div
			data-slot="split-button"
			className={`split-button ${className}`}
			data-size={size}
			data-color={color}
			{...props}
		/>
	);
}

export function SplitButtonLeading({ className, ...props }: ButtonProps) {
	return (
		<Button
			className={`leading ${className?.toString()}`}
			{...props}
		/>
	);
}

export function SplitButtonTrailing({ className, ...props }: ButtonProps) {
	return (
		<Button
			className={`trailing ${className?.toString()}`}
			{...props}
		/>
	);
}
