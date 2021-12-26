import { Admin, Resource } from 'react-admin';
import authProvider from './words/utils/authProvider';
import { BrowserRouter } from 'react-router-dom';
import panelDataProvider from './words/utils/dataProvider';
import { WordCreate, WordList, WordEdit } from '.';

const dataProvider = panelDataProvider('http://localhost:8080/api/panel');

const Main = () => {
	return (
		<BrowserRouter>
			<Admin authProvider={authProvider} dataProvider={dataProvider}>
				<Resource name="words" list={WordList} create={WordCreate} edit={WordEdit}/>
			</Admin>
		</BrowserRouter>
	);
};

export default Main;
