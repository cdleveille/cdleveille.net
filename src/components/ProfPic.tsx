import Image from "next/image";

import { ImgSrc } from "@constants";

export const ProfPic = () => (
	<Image src={ImgSrc.PROF_PIC} width={300} height={300} alt="Chris Leveille" className="prof-pic" priority={true} />
);
