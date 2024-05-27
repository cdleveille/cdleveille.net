"use client";

import { Link } from "@components";

interface IPrintProps {
	children?: React.ReactNode;
}

export const Print = ({ children }: IPrintProps) => (
	<span onClick={() => window.print()}>{children ?? <Link>Print</Link>}</span>
);
