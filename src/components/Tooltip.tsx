import { ReactElement } from "react";

import MuiTooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

interface ITooltipProps {
	title: string;
	child: ReactElement;
}

const Tooltip: React.FC<ITooltipProps> = ({ title, child }) => {
	return (
		<MuiTooltip title={title} placement="top" arrow={true} disableInteractive TransitionComponent={Zoom} enterDelay={0} leaveDelay={0}>
			<div>{child}</div>
		</MuiTooltip>
	);
};

export default Tooltip;
