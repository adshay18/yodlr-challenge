import React, { useContext } from 'react';
import { Card, CardBody, CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';
import '../css/Home.css';

const Home = () => {
	const { users } = useContext(UserContext);
	return (
		<section className="col-md-8">
			<Card>
				<CardBody className="text-center">
					<CardTitle>
						<b>Yodlr Design Challenge</b>
					</CardTitle>
					<span>A simple home for members like you.</span>
				</CardBody>
			</Card>
		</section>
	);
};

export default Home;
