"use client";

import type { DateMonthYear } from "@types";
import { displayDateMonthYear, getDateDifference, nonBreaking } from "@util";

export const DateDiff = ({ startDate, endDate }: { startDate: DateMonthYear; endDate?: DateMonthYear }) => {
	return (
		<div>
			{nonBreaking(
				`${displayDateMonthYear(startDate)} - ${endDate ? displayDateMonthYear(endDate) : "Present"} (${getDateDifference(startDate, endDate)})`
			)}
		</div>
	);
};
