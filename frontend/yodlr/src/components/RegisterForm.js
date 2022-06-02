import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import UserContext from '../context/UserContext';
import '../css/RegisterForm.css';
import Api from '../Api';

const RegisterForm = () => {
	const INIT = { firstName: '', lastName: '', email: '', state: 'pending' };
	const [ formData, setFormData ] = useState(INIT);
	const history = useHistory();
	const { register } = useContext(UserContext);
	const [ errors, setErrors ] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			let res = await register(formData);
			if (res) {
				setFormData(INIT);
				history.push('/users');
			}
		} catch (err) {
			setErrors(err);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((data) => ({
			...data,
			[name]: value
		}));
	};
	return (
		<Card>
			<CardTitle className="text-center">Register</CardTitle>
			{errors ? <CardSubtitle>{errors}</CardSubtitle> : null}
			<CardBody>
				<Form onSubmit={handleSubmit}>
					<FormGroup>
						<Label htmlFor="first-name">First name</Label>
						<Input
							type="text"
							id="first-name"
							name="firstName"
							value={formData.firstName}
							onChange={handleChange}
							required
						/>
					</FormGroup>
					<FormGroup>
						<Label htmlFor="last-name">Last name</Label>
						<Input
							type="text"
							id="last-name"
							name="lastName"
							value={formData.lastName}
							onChange={handleChange}
							required
						/>
					</FormGroup>
					<FormGroup>
						<Label htmlFor="email">Email</Label>
						<Input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</FormGroup>
					<Button>Submit</Button>
				</Form>
			</CardBody>
		</Card>
	);
};

export default RegisterForm;
