import React from 'react';
import growingHeart from '../assets/growingheart.png';
import github from '../assets/github-mark-white.png';

function Footer() {
	return (
		<div className="footer--cont">
			Made with
			<img
				src={growingHeart}
				alt="love"
				height={20}
			/>
			by JustWaveThings{' '}
			<a href="https://github.com/JustWaveThings">
				<img
					src={github}
					alt="github"
					height={20}
				/>
			</a>{' '}
		</div>
	);
}

export default Footer;
