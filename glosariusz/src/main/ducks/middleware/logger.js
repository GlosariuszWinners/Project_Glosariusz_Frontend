export const logger = store => next => action => {
	console.log(action);
	next(action);
	console.log('Store after action: ', store.getState());
};
export default logger;