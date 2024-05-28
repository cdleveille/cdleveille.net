import Script from "next/script";

export const Putt = () => {
	return (
		<>
			<canvas
				id="gameScreen"
				style={{
					cursor: "crosshair"
				}}
			/>
			<Script src="/app/putt/src/putt.min.js" />
		</>
	);
};
