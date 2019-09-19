import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app';

describe('<App />', () => {
  it('Text is rendered at application start', () => {
    const app = shallow(<App />);
    expect(app.find('Form').exists()).toBe(true);
    expect(app.find('Text').exists()).toBe(true);
  });

  it('App should increment', () => {
    const app = mount(<App />);
    const form = app.find('Form');
    const button = form.find('button');
    button.simulate('submit');
    expect(app.state('count')).toEqual(1);
    expect(app.find('p').text()).toEqual('# of Updates: 1 ');
  });

  it('renders properly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
