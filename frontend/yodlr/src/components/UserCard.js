import React from 'react';
import { Card } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/UserCard.css';

const UserCard = ({ user }) => {
	return (
		<div className="col-md-6">
			<Card className="UserCard">
				<span className="UserTitle">
					{user.firstName} {user.lastName}
				</span>
				<Link to={`users/${user.id}`}>Contact</Link>
			</Card>
		</div>
	);
};

export default UserCard;
