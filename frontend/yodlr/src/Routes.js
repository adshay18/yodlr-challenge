import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';

const Routes = () => {
	return (
		<Router>
			<main>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/admin">
						Admin Page
					</Route>
					<Route exact path="/register">
						Register page
					</Route>
				</Switch>
			</main>
		</Router>
	);
};

export default Routes;
