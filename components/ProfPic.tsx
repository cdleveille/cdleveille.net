interface IProfPicProps {
	id?: string;
}

const ProfPic: React.FC<IProfPicProps> = ({ id }) => {
	return <img id={id} src="img/cdleveille.webp" alt="Chris Leveille" width="460" height="460" />;
};

export default ProfPic;
