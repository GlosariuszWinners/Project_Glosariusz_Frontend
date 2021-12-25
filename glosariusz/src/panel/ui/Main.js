import { Admin, Resource } from 'react-admin';
import authProvider from './words/utils/authProvider';
import { BrowserRouter } from 'react-router-dom';
import panelDataProvider from './words/utils/dataProvider';
import { WordCreate, WordList } from '.';



const dataProvider = panelDataProvider('http://localhost:8080/api/panel');

const Main = () => {
	console.log(dataProvider);
	return (
		<BrowserRouter>
			<Admin authProvider={authProvider} dataProvider={dataProvider}>
				<Resource name="words" list={WordList} create={WordCreate}/>
			</Admin>
		</BrowserRouter>
	);
};

export default Main;
