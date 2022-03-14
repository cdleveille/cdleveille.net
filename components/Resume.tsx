import React, { CSSProperties } from "react";

const Resume: React.FC = () => {
	const styles: CSSProperties = {
		width: "100%",
		maxWidth: "1200px",
		height: "100%",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translateX(-50%) translateY(-50%)"
	};

	return (
		<>
			<iframe src="/pdf/christopher_leveille_resume_public.pdf#zoom=FitH" style={styles} />
		</>
	);
};

export default Resume;
