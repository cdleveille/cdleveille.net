import Divider from "./Divider";

export interface IRoleProps {
	title: string;
	dateRange: string;
	description: string[];
}

const Role: React.FC<IRoleProps> = ({ title, dateRange, description }) => {
	return (
		<>
			<div className="resume-indent-2">
				<em>{title}</em>
				<Divider />
				<em>{dateRange}</em>
			</div>
			<ul className="resume-indent-2">
				{description.map((item, i) => {
					return <li key={i}>{item}</li>;
				})}
			</ul>
		</>
	);
};

export default Role;
