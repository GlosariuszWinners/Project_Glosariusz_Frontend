import { Switch, Route } from 'react-router-dom';
import { Main } from '../src/panel/ui';
import { Test, NotFound, MainPage } from '../src/main/ui';

const Switches = () => {
	return (
		<Switch>
			<Route path="/" component={Test} exact/>
			<Route path="/admin" component={Main} />
			<Route path="/nav" component={MainPage} />
			<Route path="*" component={NotFound}/>
		</Switch>
	);
};
  
export default Switches;