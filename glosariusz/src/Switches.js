import { Switch, Route } from 'react-router-dom';
import { Main } from '../src/panel/ui';
import { Test } from '../src/main/ui';

const Switches = () => {
	return (
		<Switch>
			<Route path="/" component={Test} exact/>
			<Route path="/admin" component={Main} />
		</Switch>
	);
};
  
export default Switches;