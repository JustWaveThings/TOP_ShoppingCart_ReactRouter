import React from 'react';
import cart from '../assets/shopping-cart.svg';

function Header() {
	return (
		<div className="header--cont">
			<div className="header--cont--left">
				<div className="header--title"> Lost It? Buy Now!</div>
				<div className="header--subtitle"> Lose Later! Buy Again!</div>
			</div>
			<div className="header--cont--center">
				<div className="header--link--catalog">Catalog</div>
			</div>
			<div className="header--cont--right">
				<div className="header--cart--count">0</div>
				<img
					className="header--cart"
					src={cart}
				></img>
			</div>
		</div>
	);
}

export default Header;
