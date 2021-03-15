import useSWRV from 'swrv';

import { Data, LanyardResponse } from './types';

export * from './types';

const fetcher = async (id: string): Promise<Data> => {
	const response = await fetch(
		`https://api.lanyard.rest/v1/users/${id}`
	);

	const body: LanyardResponse = await response.json();

	if ('error' in body) throw new Error(body.error.message);

	return body.data;
}

export const useLanyard = async (id: string) => useSWRV<Data>(`lanyard:${id}`, fetcher);

export default useLanyard;
