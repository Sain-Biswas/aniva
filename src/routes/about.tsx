import { ArrowDownIcon } from "#/assets/icons/arrow-down";
import { SunIcon } from "#/assets/icons/sun";
import { createFileRoute } from "@tanstack/react-router";

import { SplitButton, SplitButtonLeading, SplitButtonTrailing } from "~/composables/button/split";
import { Menu, MenuContent, MenuGroup, MenuItem } from "~/composables/menus";

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
			<SplitButton size="xs">
				<SplitButtonLeading
					// oxlint-disable-next-line react-perf/jsx-no-new-function-as-prop
					onClick={() => {
						console.log("Split Button: Leading button Clicked");
					}}
				>
					<ArrowDownIcon />
					Label
				</SplitButtonLeading>
				<Menu>
					<SplitButtonTrailing>
						<ArrowDownIcon />
					</SplitButtonTrailing>
					<MenuContent>
						<MenuGroup>
							<MenuItem>Sample</MenuItem>
						</MenuGroup>
					</MenuContent>
				</Menu>
			</SplitButton>
			<SplitButton size="sm">
				<SplitButtonLeading
					// oxlint-disable-next-line react-perf/jsx-no-new-function-as-prop
					onClick={() => {
						console.log("Split Button: Leading button Clicked");
					}}
				>
					<ArrowDownIcon />
					Label
				</SplitButtonLeading>
				<Menu>
					<SplitButtonTrailing>
						<ArrowDownIcon />
					</SplitButtonTrailing>
					<MenuContent>
						<MenuGroup>
							<MenuItem>Sample</MenuItem>
						</MenuGroup>
					</MenuContent>
				</Menu>
			</SplitButton>
			<SplitButton size="md">
				<SplitButtonLeading
					// oxlint-disable-next-line react-perf/jsx-no-new-function-as-prop
					onClick={() => {
						console.log("Split Button: Leading button Clicked");
					}}
				>
					<ArrowDownIcon />
					Label
				</SplitButtonLeading>
				<Menu>
					<SplitButtonTrailing>
						<ArrowDownIcon />
					</SplitButtonTrailing>
					<MenuContent>
						<MenuGroup>
							<MenuItem>Sample</MenuItem>
						</MenuGroup>
					</MenuContent>
				</Menu>
			</SplitButton>
			<SplitButton size="lg">
				<SplitButtonLeading
					// oxlint-disable-next-line react-perf/jsx-no-new-function-as-prop
					onClick={() => {
						console.log("Split Button: Leading button Clicked");
					}}
				>
					<ArrowDownIcon />
					Label
				</SplitButtonLeading>
				<Menu>
					<SplitButtonTrailing>
						<ArrowDownIcon />
					</SplitButtonTrailing>
					<MenuContent>
						<MenuGroup>
							<MenuItem>Sample</MenuItem>
						</MenuGroup>
					</MenuContent>
				</Menu>
			</SplitButton>
			<SplitButton size="xl">
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
					<MenuContent>
						<MenuGroup>
							<MenuItem>Sample</MenuItem>
						</MenuGroup>
					</MenuContent>
				</Menu>
			</SplitButton>
		</main>
	);
}
