import Router from 'preact-router';

import Background from './scripts/components/background';

import Home from './scripts/pages/home';

import './styles/global';

export default () => {

	return (
		<div class="at-container">
			<Background />
			<Router>
				<Home path="/" />
			</Router>
		</div>
	);
	
};
