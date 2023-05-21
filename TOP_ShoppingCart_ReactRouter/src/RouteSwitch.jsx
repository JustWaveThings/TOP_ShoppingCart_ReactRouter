import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

const RouteSwitch = () => {
	return (
		<BrowserRouter basename="TOP_ShoppingCart_ReactRouter">
			<Routes>
				<Route
					path="/"
					element={<App />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default RouteSwitch;
