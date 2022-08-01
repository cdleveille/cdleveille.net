export interface IResponse<T> {
	ok: boolean;
	status: number;
	data: T;
}
