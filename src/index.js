import Router from 'preact-router';

import Home from './scripts/pages/home';

import './styles/global.scss';

export default () => {

	let homePath = '/';

	if (typeof window !== 'undefined') {

		if (
			typeof window.GLOBAL_ENV !== 'undefined' && 
			window.GLOBAL_ENV === 'production'
		) {
			homePath = '/axie-tracker-dashboard/';
		}
	}

	return (
		<div class="at-container">
			<Router>
				<Home path={homePath} />
			</Router>
		</div>
	);

};
