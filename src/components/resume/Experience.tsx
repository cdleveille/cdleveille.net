import { ReactNode } from "react";

import Divider from "./Divider";
import Role, { IRoleProps } from "./Role";

interface IExperienceItemProps {
	company: string | ReactNode;
	location: string | ReactNode;
	roles: IRoleProps[];
}

const ExperienceItem: React.FC<IExperienceItemProps> = ({ company, location, roles }) => {
	return (
		<>
			<div className="resume-indent-1">
				{company}
				<Divider />
				{location}
			</div>
			{roles.map((role, i) => {
				return <Role key={i} title={role.title} dateRange={role.dateRange} description={role.description} />;
			})}
		</>
	);
};

export default ExperienceItem;
