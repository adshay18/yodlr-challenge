import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import UserCard from './UserCard';

const UserList = () => {
	const { users } = useContext(UserContext);

	return (
		<section className="col-md-6 col-sm-9">
			<div className="text-center">
				<h1>Registered Users</h1>
			</div>

			<div className="container">
				<div className="row">{users.map((u) => <UserCard key={u.id} user={u} />)}</div>
			</div>
		</section>
	);
};
export default UserList;
