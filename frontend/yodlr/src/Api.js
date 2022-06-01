import axios from 'axios';

// Set baseURL to make api calls, either to the specified base url or to port:3001 as that's where this backend is running locally

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

// API class - a static class to make API calls between the frontend and backend.

// Frontend refers to the react-app yodlr, and backend refers to the provided Node.js backend provided for this coding challenge.

class Api {
	static async request(endpoint, data = {}, method = 'get') {
		// remove this for production
		console.debug('API Call made:', endpoint, data, method);

		const url = `${BASE_URL}/${endpoint}`;
		const params = method === 'get' ? data : {};

		try {
			return await axios({ url, method, data, params }).data;
		} catch (e) {
			console.error('API Error:', e.response);
			throw e;
		}
	}

	// Individual Routes based off backend

	// --------------- User routes ---------------

	// Get list of users
	static async getUsers() {
		let res = await this.request(`users`);
		return res;
	}

	// Add new user
	static async addUser(userData) {
		let res = await this.request(`users`, userData, 'post');
		return res;
	}

	// Get details on specific user
	static async getUser(id) {
		let res = await this.request(`users/${id}`);
		return res;
	}

	// Update a user by id
	static async editUser(id, userData) {
		let res = await this.request(`users`, userData, 'put');
		return res;
	}

	// Delete a user by id
	static async deleteUser(id) {
		let res = await this.request(`users/${id}`, 'delete');
		return res;
	}
}

export default Api;
