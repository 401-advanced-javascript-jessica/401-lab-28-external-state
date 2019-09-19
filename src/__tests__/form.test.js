import React from 'react';
import renderer from 'react-test-renderer';
import Form from '../components/Form/form.js';

describe("<Form />", () => {
    it('form is rendered at application start', () => {
        let app = shallow(<Form />);
        expect(app.find('form').exists()).toBe(true);
        expect(app.find('input').exists()).toBe(true);
        expect(app.find('button').exists()).toBe(true);
    });

    it('renders properly', ()=> {
        const tree = renderer.create(<Form />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
