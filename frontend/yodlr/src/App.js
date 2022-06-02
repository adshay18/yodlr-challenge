import React, { useState, useEffect } from 'react';
import UserContext from './context/UserContext';
import Routes from './Routes';
import './css/App.css';
import Api from './Api';

const App = () => {
	const [ users, setUsers ] = useState([]);

	const register = async (userData) => {
		let res = await Api.addUser(userData);
		setUsers([ ...users, res ]);
		return res;
	};

	useEffect(() => {
		async function getUserList() {
			let res = await Api.getUsers();
			setUsers(res);
		}
		getUserList();
	}, []);

	return (
		<UserContext.Provider value={{ users, register }}>
			<div className="App">
				<Routes />
			</div>
		</UserContext.Provider>
	);
};

export default App;
