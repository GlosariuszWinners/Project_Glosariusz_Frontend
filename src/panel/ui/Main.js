import { Admin, Resource } from 'react-admin';
import { WordCreate, WordEdit, WordList, PanelLayout } from '.';
import authProvider from './words/utils/authProvider';
import panelDataProvider from './words/utils/dataProvider';
import polishMessages from 'ra-language-polish';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const dataProvider = panelDataProvider(process.env.REACT_APP_API_URL);

const i18nProvider = polyglotI18nProvider(() => polishMessages, 'pl');


const Main = () => {
	return (
		<Admin i18nProvider={i18nProvider} authProvider={authProvider} dataProvider={dataProvider} layout={PanelLayout}>
			<Resource name='words' list={WordList} create={WordCreate} edit={WordEdit}/>
		</Admin>
	);
};

export default Main;
