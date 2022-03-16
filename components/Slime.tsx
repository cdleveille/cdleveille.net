import React, { CSSProperties } from "react";

const Slime: React.FC = () => {
	const styles: CSSProperties = {
		border: "2px solid black",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translateX(-50%) translateY(-50%)"
	};

	return (
		<>
			<canvas id="gameScreen" width={0} height={0} style={styles} />
			<script src="app/slime/src/slime.js" type="module" defer></script>
		</>
	);
};

export default Slime;
