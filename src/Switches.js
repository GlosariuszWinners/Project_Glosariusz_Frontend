import { Switch, Route } from 'react-router-dom';
import { NotFound,  MainPage, DetailPage, AboutPage, AuthorsPage, ContactPage } from '../src/main/ui';
import React from 'react';
import { Main } from '../src/panel/ui';

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