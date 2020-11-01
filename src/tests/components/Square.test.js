import { shallow } from 'enzyme';
import { Square } from '../../components/Square';

describe('Square component', () => {

  test('Should match snapshot', () => {
    const wrapper = shallow(<Square />);
    expect(wrapper).toMatchSnapshot();
  });

});