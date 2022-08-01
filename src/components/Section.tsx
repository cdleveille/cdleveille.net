import { ReactElement } from "react";

interface ISectionProps {
	id: string;
	className?: string;
	content: ReactElement;
}

const Section: React.FC<ISectionProps> = ({ id, className, content }) => {
	return (
		<div id={id} className={`section ${className}`}>
			{content}
		</div>
	);
};

export default Section;
