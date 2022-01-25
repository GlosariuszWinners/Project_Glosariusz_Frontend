import { Switch, Route } from 'react-router-dom';
import { Main } from '../src/panel/ui';
import { NotFound, MainPage, DetailPage, AboutPage, AuthorsPage, ContactPage } from '../src/main/ui';

const Switches = () => {
	return (
		<Switch>
			<Route path="/admin" component={Main} />
			<Route path="/slownik/:id" component={DetailPage} />
			<Route path="/o-slowniku" component={AboutPage} exact />
			<Route path="/autorzy" component={AuthorsPage} exact/>
			<Route path="/kontakt" component={ContactPage} exact/>
			<Route path="/" component={MainPage} exact/>
			<Route component={NotFound}/>
		</Switch>
	);
};
  
export default Switches;