import React, { CSSProperties } from "react";

const Putt: React.FC = () => {
	const styles: CSSProperties = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translateX(-50%) translateY(-50%)",
		cursor: "crosshair"
	};

	return (
		<>
			<canvas id="gameScreen" width={0} height={0} style={styles} />
			<script src="/app/putt/src/putt.js" type="module" defer></script>
		</>
	);
};

export default Putt;
