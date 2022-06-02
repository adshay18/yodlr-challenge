import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import '../css/Home.css';

const Home = () => {
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
