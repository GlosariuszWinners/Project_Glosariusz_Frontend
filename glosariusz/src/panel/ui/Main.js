import { Admin, Resource, ListGuesser } from 'react-admin';
import authProvider from './utils/authProvider';
import jsonServerProvider from 'ra-data-json-server';
import dotenv from 'dotenv';
import { BrowserRouter } from 'react-router-dom';

dotenv.config();

const Main = () => {
	const dataProvider = jsonServerProvider('http://localhost:8080/api');
	return (
		<BrowserRouter>
			<Admin authProvider={authProvider} dataProvider={dataProvider}>
				<Resource name="words" list={ListGuesser}/>
			</Admin>
		</BrowserRouter>
	);
};

export default Main;
