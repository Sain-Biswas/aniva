import { createFileRoute } from "@tanstack/react-router";
import type { CSSProperties } from "react";

import { Checkbox } from "#/composables/checkbox";

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
			<Checkbox />
			<Checkbox isIndeterminate />
			<Checkbox isSelected />

			<Checkbox isInvalid />
			<Checkbox
				isInvalid
				isIndeterminate
			/>
			<Checkbox
				isSelected
				isInvalid
			/>

			<Checkbox isDisabled />
			<Checkbox
				isDisabled
				isIndeterminate
			/>
			<Checkbox
				isDisabled
				isSelected
			/>
		</main>
	);
}
