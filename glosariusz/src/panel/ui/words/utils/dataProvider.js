import inMemoryJWTManager from './inMemoryJwt';
import { fetchUtils } from 'ra-core';

export default (apiUrl) => {
	const httpClient = (url, method, params) => {
		global.console.log(params);
		const options = {
			headers: new Headers({ Accept: 'application/json' }),
			method,
			body: params ? JSON.stringify(params.data) : null
		};
		const token = inMemoryJWTManager.getToken();
		if (token) {
			options.headers.set('Authorization', `Bearer ${token}`);
		}
		return fetchUtils.fetchJson(url, options);
	};
	return {
		getList: (resource) => 
			httpClient(`${apiUrl}/${resource}`, 'GET').then(({ headers, json }) => {
				return {
					data: json,
					total: headers.get('x-total-count'),
				};
			}),
		getOne: (resource, params) =>
			httpClient(`${apiUrl}/${resource}/${params.id}`, 'GET').then(({ json }) => ({
				data: json,
			})),
		getMany: () => Promise.reject(),
		getManyReference: () => Promise.reject(),
		update: () => Promise.reject(),
		updateMany: () => Promise.reject(),
		create: (resource, params) => httpClient(`${apiUrl}/${resource}`, 'POST', params).then(({ json }) => {
			return {
				data: json,
			};}),
		delete: () => Promise.reject(),
		deleteMany: () => Promise.reject(),
	};
};