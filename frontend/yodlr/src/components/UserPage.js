import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardTitle, CardBody, CardSubtitle } from 'reactstrap';
import Api from '../Api';

const UserPage = () => {
	const [ user, setUser ] = useState({});
	let { id } = useParams();
	useEffect(
		() => {
			async function getUser(id) {
				let res = await Api.getUser(id);
				setUser(res);
			}
			getUser(id);
		},
		[ id ]
	);
	return (
		<section className="col-md-9">
			<Card>
				<CardTitle>
					{user.firstName} {user.lastName}
				</CardTitle>
				<CardSubtitle>email: {user.email}</CardSubtitle>
				<CardSubtitle>status: {user.state}</CardSubtitle>
			</Card>
		</section>
	);
};

export default UserPage;
