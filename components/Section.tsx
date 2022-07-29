import { ReactElement } from "react";

interface ISectionProps {
	id: string;
	classes?: string;
	content: ReactElement;
}

const Section: React.FC<ISectionProps> = ({ id, classes, content }) => {
	return (
		<div id={id} className={`section ${classes}`}>
			{content}
		</div>
	);
};

export default Section;
