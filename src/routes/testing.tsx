import { Button } from "~/composables/button/buttons";
import { createFileRoute } from "@tanstack/react-router";
import type { CSSProperties } from "react";

import EditIcon from "@material-symbols/svg-600/rounded/edit-fill.svg?react";

export const Route = createFileRoute("/testing")({
	component: RouteComponent
});

const mainStyles: CSSProperties = {
	padding: "2rem",
	display: "flex",
	gap: "2rem"
};

function RouteComponent() {
	return (
		<main style={mainStyles}>
			<Button size="xs">
				<EditIcon />
				Label
			</Button>
			<Button size="sm">
				<EditIcon />
				Label
			</Button>
			<Button
				size="md"
				isDisabled
			>
				<EditIcon />
				Label
			</Button>
			<Button size="lg">
				<EditIcon />
				Label
			</Button>
			<Button
				size="xl"
				color="tonal"
			>
				<EditIcon />
				Label
			</Button>
		</main>
	);
}
