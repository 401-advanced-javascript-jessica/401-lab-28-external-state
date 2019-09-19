import React from 'react';
import renderer from 'react-test-renderer';
import Text from '../components/Text/text.js';

describe("<Text />", () => {
    it('Text is rendered at application start', () => {
        let app = shallow(<Text />);
        expect(app.find('div').exists()).toBe(true);
    });

    it('renders properly', ()=> {
        const tree = renderer.create(<Text />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
