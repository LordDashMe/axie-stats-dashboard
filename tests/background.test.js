import { h } from 'preact';
import { shallow } from 'enzyme'; // See: https://github.com/preactjs/enzyme-adapter-preact-pure

import Background from '../src/scripts/components/background';

describe('Test Cases for Background Component', () => {
	
    test('it should render background component.', () => {

		const context = shallow(<Background />);

		expect(context.length > 0).toBe(true);

	});

});
