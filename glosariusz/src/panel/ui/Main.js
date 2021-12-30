import { Admin, Resource } from 'react-admin';
import { WordCreate, WordEdit, WordList } from '.';
import authProvider from './words/utils/authProvider';
import panelDataProvider from './words/utils/dataProvider';

const dataProvider = panelDataProvider('http://localhost:8080/api/panel');

const Main = () => {
	return (
		<Admin authProvider={authProvider} dataProvider={dataProvider}>
			<Resource name="words" list={WordList} create={WordCreate} edit={WordEdit}/>
		</Admin>
	);
};

export default Main;
