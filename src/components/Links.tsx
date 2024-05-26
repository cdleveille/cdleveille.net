import { Link } from "@components";
import { Href, Route } from "@constants";
import { Stack } from "@mui/material";

export const Links = () => {
	return (
		<Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: "1rem", sm: "2rem" }}>
			<Link href={Href.EMAIL} newTab>
				Email
			</Link>
			<Link href={Route.RESUME}>Resume</Link>
			<Link href={Href.LINKEDIN} newTab>
				LinkedIn
			</Link>
			<Link href={Href.GITHUB} newTab>
				GitHub
			</Link>
			<Link href={Href.TRAILBLAZER} newTab>
				Trailblazer
			</Link>
			<Link href={Href.YOUTUBE} newTab>
				YouTube
			</Link>
		</Stack>
	);
};
