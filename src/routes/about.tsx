import { createFileRoute } from "@tanstack/react-router";

import { SplitButton, SplitButtonLeading, SplitButtonTrailing } from "~/composables/button/split";
import { Menu, MenuContent, MenuGroup, MenuItem, MenuItemShortcut } from "~/composables/menus";

import SunIcon from "@material-symbols/svg-600/rounded/light_mode-fill.svg?react";
import ArrowDownIcon from "@material-symbols/svg-600/rounded/keyboard_arrow_down-fill.svg?react";
import BookmarkStarIcon from "@material-symbols/svg-600/rounded/bookmark_star-fill.svg?react";
import ArrowRightIcon from "@material-symbols/svg-600/rounded/arrow_right-fill.svg?react";

export const Route = createFileRoute("/about")({
	component: RouteComponent
});

// oxlint-disable-next-line max-lines-per-function
function RouteComponent() {
	return (
		<main
			// oxlint-disable-next-line react-perf/jsx-no-new-object-as-prop
			style={{
				padding: "2rem",
				display: "flex",
				flexDirection: "column",
				gap: "2rem"
			}}
		>
			<SplitButton>
				<SplitButtonLeading
					// oxlint-disable-next-line react-perf/jsx-no-new-function-as-prop
					onClick={() => {
						console.log("Split Button: Leading button Clicked");
					}}
				>
					<SunIcon />
					Label
				</SplitButtonLeading>
				<Menu>
					<SplitButtonTrailing>
						<ArrowDownIcon />
					</SplitButtonTrailing>
					<MenuContent color="standard">
						<MenuGroup>
							<MenuItem>
								<BookmarkStarIcon />
								Sample
								<MenuItemShortcut>
									<ArrowRightIcon />
								</MenuItemShortcut>
							</MenuItem>
						</MenuGroup>
						<MenuGroup
							selectionMode="multiple"
							// oxlint-disable-next-line react-perf/jsx-no-new-array-as-prop
							defaultSelectedKeys={["sample-1"]}
						>
							<MenuItem id={"sample-1"}>
								<BookmarkStarIcon />
								Sample 1
							</MenuItem>
							<MenuItem id={"sample-2"}>
								<BookmarkStarIcon />
								Sample 2
							</MenuItem>
							<MenuItem id={"sample-3"}>
								<BookmarkStarIcon />
								Sample 3
							</MenuItem>
						</MenuGroup>
					</MenuContent>
				</Menu>
			</SplitButton>
		</main>
	);
}
