import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';
import '../css/NavBar.css';

const NavBar = () => {
	return (
		<div className="NavBar">
			<Navbar expand="md">
				<NavLink exact to="/" className="navbar-brand">
					yodlr
				</NavLink>
				<Nav className="ml-auto" navbar>
					<NavItem>
						<NavLink to="/admin">User List</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/register">Register</NavLink>
					</NavItem>
				</Nav>
			</Navbar>
		</div>
	);
};

export default NavBar;
