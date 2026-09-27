import type { ComponentProps, ReactNode } from "react";
import type {
	MenuItemProps as AriaMenuItemProps,
	MenuSectionProps as AriaMenuSectionProps
} from "react-aria-components/Menu";
import {
	Menu as AriaMenu,
	MenuItem as AriaMenuItem,
	MenuSection as AriaMenuSection,
	MenuTrigger as AriaMenuTrigger
} from "react-aria-components/Menu";
import { Popover as AriaPopover } from "react-aria-components/Popover";

export function Menu(props: ComponentProps<typeof AriaMenuTrigger>) {
	return (
		<AriaMenuTrigger
			{...props}
			data-slot="menu-trigger"
		/>
	);
}

export function MenuContent({
	"data-slot": dataSlot = "menu-content",
	placement = "bottom left",
	offset = 4,
	crossOffset = 0,
	className,
	children,
	color = "standard",
	...props
}: Omit<ComponentProps<typeof AriaMenu<object>>, "children" | "className"> &
	Pick<ComponentProps<typeof AriaPopover>, "placement" | "offset" | "crossOffset"> & {
		"data-slot"?: string;
		className?: string;
		children?: ReactNode;
		color?: "standard" | "vibrant";
	}) {
	return (
		<AriaPopover
			data-slot={dataSlot}
			placement={placement}
			offset={offset}
			data-color={color}
			crossOffset={crossOffset}
			className={`menus ${className}`}
		>
			<AriaMenu
				className={`menus__primitive`}
				{...props}
			>
				{children}
			</AriaMenu>
		</AriaPopover>
	);
}

export function MenuGroup({
	className,
	...props
}: Omit<AriaMenuSectionProps<object>, "children"> & { children?: ReactNode }) {
	return (
		<AriaMenuSection
			className={`menus__group ${className}`}
			data-slot="menu-group"
			{...props}
		/>
	);
}

export function MenuItem({
	className,
	inset,
	variant = "default",
	...props
}: AriaMenuItemProps & { inset?: boolean; variant?: "default" | "destructive" }) {
	return (
		<AriaMenuItem
			data-slot="menu-item"
			data-inset={inset}
			data-variant={variant}
			className={`menus__item ${className?.toString()}`}
			{...props}
		/>
	);
}

export function MenuItemShortcut({ className, ...props }: React.ComponentProps<"span">) {
	return (
		<span
			data-slot="menu-item-shortcut"
			className={`menus__item__shortcut ${className ?? ""}`}
			{...props}
		/>
	);
}

/**
 * Menu-
 *      External Trigger
 *      MenuContent
 *          MenuGroup
 *              MenuLabel
 *              MenuItem
 *          MenuSeparator
 *          MenuSub
 *              MenuSubTrigger
 *              MenuSubContent
 *                  MenuGroup
 *                      MenuLabel
 *                      MenuItem
 */
