import inMemoryJWTManager from './inMemoryJwt';
import { fetchUtils } from 'ra-core';

export default (apiUrl) => {
	const httpClient = (url) => {
		const options = {
			headers: new Headers({ Accept: 'application/json' }),
		};
		const token = inMemoryJWTManager.getToken();
		if (token) {
			options.headers.set('Authorization', `Bearer ${token}`);
		}
		return fetchUtils.fetchJson(url, options);
	};

	return {
		getList: (resource) => {
			const url = `${apiUrl}/${resource}`;
			return httpClient(url).then(({ headers, json }) => {
				return {
					data: json,
					total: headers.get('x-total-count'),
				};
			});
		},
		getOne: (resource, params) =>
			httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
				data: json,
			})),
		getMany: () => Promise.reject(),
		getManyReference: () => Promise.reject(),
		update: () => Promise.reject(),
		updateMany: () => Promise.reject(),
		create: () => Promise.reject(),
		delete: () => Promise.reject(),
		deleteMany: () => Promise.reject(),
	};
};