import { Switch, Route } from 'react-router-dom';
import { Main } from '../src/panel/ui';

import { NotFound, MainPage } from '../src/main/ui';

const Switches = () => {
	return (
		<Switch>
			<Route path="/admin" component={Main} />
			<Route path="/" component={MainPage} exact/>
			<Route component={NotFound}/>
		</Switch>
	);
};
  
export default Switches;