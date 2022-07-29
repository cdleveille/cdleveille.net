import Divider from "./Divider";
import Role, { IRoleProps } from "./Role";

interface IExperienceItemProps {
	company: string;
	location: string;
	roles: IRoleProps[];
}

const ExperienceItem: React.FC<IExperienceItemProps> = ({ company, location, roles }) => {
	return (
		<>
			<span className="resume-indent-1">{company}</span>
			<Divider />
			{location}
			<br />
			{roles.map((role, i) => {
				return <Role key={i} title={role.title} dateRange={role.dateRange} description={role.description} />;
			})}
		</>
	);
};

export default ExperienceItem;
