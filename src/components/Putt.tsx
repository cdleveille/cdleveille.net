export const Putt = () => {
	return (
		<>
			<canvas
				id="gameScreen"
				style={{
					cursor: "crosshair"
				}}
			/>
			<script src="/app/putt/src/putt.min.js" defer></script>
		</>
	);
};
