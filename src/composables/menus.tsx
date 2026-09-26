import type { ComponentProps, ReactNode } from "react";
import type { MenuItemProps, MenuSectionProps } from "react-aria-components/Menu";
import {
	MenuItem as MenuItemPrimitive,
	Menu as MenuPrimitive,
	MenuSection,
	MenuTrigger as MenuTriggerPrimitive
} from "react-aria-components/Menu";
import { Popover } from "react-aria-components/Popover";

export function Menu(props: ComponentProps<typeof MenuTriggerPrimitive>) {
	return (
		<MenuTriggerPrimitive
			{...props}
			data-slot="menu-trigger"
		/>
	);
}

export function MenuContent({
	"data-slot": dataSlot = "menu-content",
	placement = "bottom end",
	offset = 4,
	crossOffset = 0,
	className,
	children,
	...props
}: Omit<ComponentProps<typeof MenuPrimitive<object>>, "children" | "className"> &
	Pick<ComponentProps<typeof Popover>, "placement" | "offset" | "crossOffset"> & {
		"data-slot"?: string;
		className?: string;
		children?: ReactNode;
	}) {
	return (
		<Popover
			data-slot={dataSlot}
			placement={placement}
			offset={offset}
			crossOffset={crossOffset}
			className={`menu__popover ${className}`}
		>
			<MenuPrimitive
				className={`menu__primitive`}
				{...props}
			>
				{children}
			</MenuPrimitive>
		</Popover>
	);
}

export function MenuGroup({
	className,
	...props
}: Omit<MenuSectionProps<object>, "children"> & { children?: ReactNode }) {
	return (
		<MenuSection
			className={`menu__group ${className}`}
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
}: MenuItemProps & { inset?: boolean; variant?: "default" | "destructive" }) {
	return (
		<MenuItemPrimitive
			data-slot="menu-item"
			data-inset={inset}
			data-variant={variant}
			className={`menu__item ${className?.toString()}`}
			{...props}
		/>
	);
}

/**
 * Menu
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
