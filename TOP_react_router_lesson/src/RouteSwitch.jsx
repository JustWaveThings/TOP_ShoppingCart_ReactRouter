import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Profile from './Profile';

const RouteSwitch = () => {
	return (
		<BrowserRouter basename="TOP_react_router_lesson">
			<Routes>
				<Route
					path="/"
					element={<App />}
				/>
				<Route
					path="/profile"
					element={<Profile />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default RouteSwitch;
