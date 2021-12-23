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
				localStorage.setItem('token', token);
			});
	},
	checkAuth: () => {
		// Required for the authentication to work
		return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
	},
	logout: () => {
		localStorage.removeItem('token');
		localStorage.removeItem('permissions');
		return Promise.resolve();
	},
	getPermissions: () => {
		// Required for the authentication to work
		return Promise.resolve();
	},
};
  
export default authProvider;
  