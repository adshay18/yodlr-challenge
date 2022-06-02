import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import UserList from './components/UserList';

const Routes = () => {
	return (
		<Router>
			<NavBar />
			<main>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/admin">
						<UserList />
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
