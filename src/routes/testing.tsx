import { createFileRoute } from "@tanstack/react-router";
import type { CSSProperties } from "react";

import { Button } from "~/composables/button/buttons";
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
			<Button color="elevated">
				<EditIcon />
				Label
			</Button>
			<Button color="filled">
				<EditIcon />
				Label
			</Button>
			<Button color="outlined">
				<EditIcon />
				Label
			</Button>
			<Button color="tonal">
				<EditIcon />
				Label
			</Button>
			<Button color="text">
				<EditIcon />
				Label
			</Button>
		</main>
	);
}
