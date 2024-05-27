"use client";

import { Link } from "@components";
import { Route } from "@constants";
import { Stack } from "@mui/material";

export const ResumeLinks = () => (
	<Stack direction="row" spacing="2rem" className="no-print">
		<Link href={Route.HOME}>Home</Link>
		<Link onClick={() => window.print()}>Print</Link>
	</Stack>
);
