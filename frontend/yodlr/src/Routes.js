import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import RegisterForm from './components/RegisterForm';
import UserList from './components/UserList';
import UserPage from './components/UserPage';

const Routes = () => {
	return (
		<Router>
			<NavBar />
			<main>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/users">
						<UserList />
					</Route>
					<Route path="/users/:id">
						<UserPage />
					</Route>
					<Route exact path="/register">
						<RegisterForm />
					</Route>
					<Route>
						<p>404 page not found</p>
					</Route>
				</Switch>
			</main>
		</Router>
	);
};

export default Routes;
