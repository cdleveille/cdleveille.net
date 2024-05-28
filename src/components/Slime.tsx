import Script from "next/script";

export const Slime = () => {
	return (
		<div className="flex-center">
			<canvas id="gameScreen" />
			<Script src="/app/slime/src/slime.min.js" />
		</div>
	);
};
