import React, { useState, useEffect } from 'react';
import UserContext from './context/UserContext';

function App() {
	const [ currUser, setCurrUser ] = useState({});

	return (
		<UserContext.Provider value={currUser}>
			<div className="App">
				<Routes />
			</div>
		</UserContext.Provider>
	);
}

export default App;
