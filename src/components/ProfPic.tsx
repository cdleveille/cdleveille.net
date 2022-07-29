interface IProfPicProps {
	id?: string;
	className?: string;
}

const ProfPic: React.FC<IProfPicProps> = ({ id, className }) => {
	return <img id={id} className={className} src="img/cdleveille.webp" alt="Chris Leveille" width="460" height="460" />;
};

export default ProfPic;
