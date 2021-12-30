// import inMemoryJWTManager from './inMemoryJwt';

const authProvider = {
	login: async ({ username, password }) => {
		const request = new Request('http://localhost:8080/api/auth/login', {
			method: 'POST',
			body: JSON.stringify({ login: username, password }),
			credentials: 'include',
			headers: new Headers({ 'Content-Type': 'application/json' }),
		});
		return fetch(request)
			.then((response) => {
				if (response.status < 200 || response.status >= 300) {
					throw new Error(response.statusText);
				}
				localStorage.setItem('authenticated', true);
			});
	},
	checkAuth: () => {
		return localStorage.getItem('authenticated') ? Promise.resolve() : Promise.reject();
	},
	checkError: (error) => {
		const status = error.status;
		if (status === 401 || status === 403) {
			localStorage.removeItem('authenticated');
			return Promise.reject();
		}
		return Promise.resolve();
	},
	logout: async () => {
		// const request = new Request('http://localhost:8080/api/auth/logout', {
		// 	method: 'GET',
		// 	credentials: 'include',
		// });
		// return fetch(request)
		// 	.then((response) => {
		// 		if (response.status < 200 || response.status >= 300) {
		// 			throw new Error(response.statusText);
		// 		}
		// 		localStorage.removeItem('authenticated');
		// 	});
		localStorage.removeItem('authenticated');
		return Promise.resolve();
	},
	getPermissions: () => {
		return localStorage.getItem('authenticated') ? Promise.resolve() : Promise.reject();
	},
};

export default authProvider;