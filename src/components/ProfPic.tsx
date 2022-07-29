import { Img } from "../types/contants";

interface IProfPicProps {
	id?: string;
	className?: string;
}

const ProfPic: React.FC<IProfPicProps> = ({ id, className }) => {
	return <img id={id} className={className} src={Img.PROF_PIC} alt="Chris Leveille" width="460" height="460" />;
};

export default ProfPic;
