import type { ComponentProps, ReactNode } from "react";
import { composeRenderProps } from "react-aria-components";
import type {
	MenuItemProps as AriaMenuItemProps,
	MenuSectionProps as AriaMenuSectionProps
} from "react-aria-components/Menu";
import {
	Menu as AriaMenu,
	MenuItem as AriaMenuItem,
	MenuSection as AriaMenuSection,
	MenuTrigger as AriaMenuTrigger,
	SubmenuTrigger as AriaSubmenuTrigger,
	Header as AriaHeader,
	Separator as AriaSeparator
} from "react-aria-components/Menu";
import { Popover as AriaPopover } from "react-aria-components/Popover";

import ArrowRightIcon from "@material-symbols/svg-600/rounded/arrow_right-fill.svg?react";
import CheckIcon from "@material-symbols/svg-600/rounded/check-fill.svg?react";

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
	shouldFlip = true,
	color = "standard",
	...props
}: Omit<ComponentProps<typeof AriaMenu<object>>, "children" | "className"> &
	Pick<ComponentProps<typeof AriaPopover>, "placement" | "offset" | "crossOffset" | "shouldFlip"> & {
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
			shouldFlip={shouldFlip}
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
			textValue={props.textValue ?? (typeof props.children === "string" ? props.children : "")}
			className={`menus__item ${className?.toString() ?? ""}`}
			{...props}
		>
			{composeRenderProps(props.children, (children, { isSelected, selectionMode, hasSubmenu }) => (
				<>
					{selectionMode === "none" ? null : isSelected ? <CheckIcon /> : <span className="not-selected" />}
					{children}
					{hasSubmenu && <ArrowRightIcon className="submenu-caret" />}
				</>
			))}
		</AriaMenuItem>
	);
}

export function MenuItemTextLabel({
	text,
	supportingText,
	className,
	...props
}: ComponentProps<"div"> & { text: string; supportingText?: string }) {
	return (
		<div
			className={`menus__item__label ${className ?? ""}`}
			{...props}
		>
			<h4>{text}</h4>
			<p>{supportingText}</p>
		</div>
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

export function Submenu(props: ComponentProps<typeof AriaSubmenuTrigger>) {
	return (
		<AriaSubmenuTrigger
			data-slot="submenus-trigger"
			{...props}
		/>
	);
}

export function SubmenuContent({
	placement = "end top",
	crossOffset = -3,
	offset = 0,
	className,
	...props
}: ComponentProps<typeof MenuContent>) {
	return (
		<MenuContent
			data-slot="submenu-content"
			placement={placement}
			crossOffset={crossOffset}
			offset={offset}
			className={`menus__submenu ${className ?? ""}`}
			{...props}
		/>
	);
}

export function MenuLabel({ className, inset, ...props }: ComponentProps<typeof AriaHeader> & { inset?: boolean }) {
	return (
		<AriaHeader
			data-slot="menus-label"
			data-inset={inset}
			className={`menus__label ${className ?? ""}`}
			{...props}
		/>
	);
}

export function MenuSeparator({ className, ...props }: ComponentProps<typeof AriaSeparator>) {
	return (
		<AriaSeparator
			data-slot="menus-items-separator"
			className={`menus__separator ${className ?? ""}`}
			{...props}
		/>
	);
}
/**
 * Menu-
 *      External Trigger
 *      MenuContent-
 *          MenuGroup-
 *              MenuLabel-
 *              MenuItem-
 *          MenuSeparator
 *          MenuSub-
 *              MenuSubTrigger
 *              MenuSubContent
 *                  MenuGroup
 *                      MenuLabel
 *                      MenuItem
 */
