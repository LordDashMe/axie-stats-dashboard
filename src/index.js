import Router from 'preact-router';

import Home from './scripts/pages/home';

import './styles/global.scss';

export default () => {

	let homePath = '/axie-stats-dashboard/';

	if (typeof window !== 'undefined') {

		if (typeof window.GLOBAL_ENV !== 'undefined' && window.GLOBAL_ENV === 'local') {
			homePath = '/';
		}
	}

	return (
		<>
			<Router>
				<Home path={homePath} />
			</Router>
		</>
	);

};
