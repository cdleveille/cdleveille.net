import type { DateMonthYear } from "@types";

export const getDateDifference = (date1: DateMonthYear, date2?: DateMonthYear) => {
	const startDate = { month: date1.month - 1, year: date1.year };
	const endDate = date2 ? date2 : { month: new Date().getMonth() + 1, year: new Date().getFullYear() };

	// Convert both dates to total months
	const months1 = startDate.year * 12 + startDate.month;
	const months2 = endDate.year * 12 + endDate.month;

	// Get absolute difference in months
	const monthsDiff = Math.abs(months2 - months1);

	// Convert back to years and months
	const years = Math.floor(monthsDiff / 12);
	const months = monthsDiff % 12;

	const yearsStr = years > 0 ? `${years} yr${years === 1 ? "" : "s"}` : "";
	const monthsStr = months > 0 ? `${months} mo${months === 1 ? "" : "s"}` : "";

	return `${yearsStr} ${monthsStr}`.trim();
};

export const getMonth = (month: number) => {
	switch (month) {
		case 1:
			return "January";
		case 2:
			return "February";
		case 3:
			return "March";
		case 4:
			return "April";
		case 5:
			return "May";
		case 6:
			return "June";
		case 7:
			return "July";
		case 8:
			return "August";
		case 9:
			return "September";
		case 10:
			return "October";
		case 11:
			return "November";
		case 12:
			return "December";
		default:
			throw new Error(`Invalid month: ${month}`);
	}
};

export const displayDateMonthYear = (date: DateMonthYear) => {
	return `${getMonth(date.month)} ${date.year}`;
};

export const nonBreaking = (text: string) => text.replace(/ /g, "\u00a0");
