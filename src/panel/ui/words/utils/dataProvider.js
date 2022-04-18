import { stringify } from 'query-string';
import { fetchUtils } from 'ra-core';

export default (apiUrl) => {
	const httpClient = (url, method, params) => {
		const options = {
			headers: new Headers({ Accept: 'application/json' }),
			method,
			body: params?.data ? JSON.stringify(params.data) : null
		};
		options.credentials = 'include';
		return fetchUtils.fetchJson(url, options);
	};
	return {
		getList: async (resource, params) => {
			const { page, perPage } = params.pagination;
			const { field, order } = params.sort;

			const url = `${apiUrl}/${resource}?sort=${field}&order=${order}&page=${page}&limit=${perPage}&${stringify(params.filter)}`;

			const { headers, json } = await httpClient(url, 'GET');
			return {
				data: json.data,
				total: parseInt(headers.get('x-total-count').split('/').pop(), 10),
			};
		},
		getOne: async (resource, params) =>{
			const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`, 'GET');
			return ({
				data: json.data,
			});
		},
		getMany: () => Promise.reject(),
		getManyReference: () => Promise.reject(),
		update: async (resource, params) => {
			const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`, 'PUT', params);
			return ({
				data: json.data,
			});
		},
		updateMany: async (resource, params) => {
			const responses = await Promise.all(params.ids.map(id => httpClient(`${apiUrl}/${resource}/${id}`, 'PUT', params)));
			return ({ data: responses.map(({ json }) => json.id) });
		},
		create: async (resource, params) => {
			const { json } = await httpClient(`${apiUrl}/${resource}`, 'POST', params);
			return ({
				data: json.data,
			});
		},
		delete: async (resource, params) => {
			const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`, 'DELETE');
			return ({
				data: json,
			});
		},
		deleteMany: async (resource, params) => {
			const responses = await Promise.all(
				params.ids.map(id => httpClient(`${apiUrl}/${resource}/${id}`, 'DELETE')
				)
			);
			return ({ data: responses.map(({ json }) => json.id) });
		},
	};
};