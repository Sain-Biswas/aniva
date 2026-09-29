import {
	CheckboxField as AriaCheckboxField,
	CheckboxButton as AriaCheckboxButton
} from "react-aria-components/Checkbox";
import type { CheckboxFieldProps as AriaCheckboxFieldProps } from "react-aria-components/Checkbox";

import MinusIcon from "@material-symbols/svg-600/rounded/remove-fill.svg?react";
import CheckSmallIcon from "@material-symbols/svg-600/rounded/check_small-fill.svg?react";
import CheckBoxOutlineBlank from "@material-symbols/svg-600/rounded/check_box_outline_blank-fill.svg?react";

export function Checkbox({ className, ...props }: AriaCheckboxFieldProps) {
	return (
		<AriaCheckboxField
			className={`checkbox ${className?.toString() ?? ""}`.trim()}
			{...props}
		>
			<AriaCheckboxButton className="checkbox__container">
				{({ isIndeterminate, isSelected }) => {
					if (isIndeterminate) {
						return <MinusIcon />;
					}

					if (isSelected) {
						return <CheckSmallIcon />;
					}

					return <CheckBoxOutlineBlank />;
				}}
			</AriaCheckboxButton>
		</AriaCheckboxField>
	);
}
