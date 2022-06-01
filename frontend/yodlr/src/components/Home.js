import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<section className="col-md-8">
			<Card>
				<CardBody>
					<CardTitle>
						<b>Yodlr Design Challenge</b>
					</CardTitle>
				</CardBody>
			</Card>
		</section>
	);
};

export default Home;
