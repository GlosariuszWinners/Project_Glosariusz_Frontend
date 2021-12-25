import inMemoryJWTManager from './inMemoryJwt';


const authProvider = {
	login: async ({ username, password }) => {
		const request = new Request('http://localhost:8080/api/auth/login', {
			method: 'POST',
			body: JSON.stringify({ login: username, password }),
			headers: new Headers({ 'Content-Type': 'application/json' }),
		});
		return fetch(request)
			.then((response) => {
				if (response.status < 200 || response.status >= 300) {
					throw new Error(response.statusText);
				}
				return response.json();
			})
			.then(({ token }) => {
				inMemoryJWTManager.setToken(token);
				localStorage.setItem('token', token);
			});
	},
	checkAuth: () => {
		return inMemoryJWTManager.getToken() ? Promise.resolve() : Promise.reject();
	},
	checkError: (error) => {
		const status = error.status;
		if (status === 401 || status === 403) {
			inMemoryJWTManager.ereaseToken();
			return Promise.reject();
		}
		return Promise.resolve();
	},
	logout: () => {
		inMemoryJWTManager.ereaseToken();
		localStorage.removeItem('token');
		return Promise.resolve();
	},
	getPermissions: () => {
		return inMemoryJWTManager.getToken() ? Promise.resolve() : Promise.reject();
	},
};
  
export default authProvider;
  