import { NextApiRequest, NextApiResponse } from "next";

import { IResponse } from "../../types/abstract";

const handler = (_req: NextApiRequest, res: NextApiResponse<IResponse<number>>) => {
	const today = new Date();
	const age =
		today.getFullYear() -
		1992 -
		(today.getMonth() > 5 || (today.getMonth() === 5 && today.getDate() >= 18) ? 0 : 1);
	return res.status(200).json({ ok: true, status: 200, data: age });
};

export default handler;
