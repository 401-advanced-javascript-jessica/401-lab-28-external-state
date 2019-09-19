import React from 'react';
import renderer from 'react-test-renderer';
import Text from '../components/Text/text';

describe('<Text />', () => {
  it('Text is rendered at application start', () => {
    const app = shallow(<Text />);
    expect(app.find('div').exists()).toBe(true);
  });

  it('renders properly', () => {
    const tree = renderer.create(<Text />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
