import renderer from 'react-test-renderer';
import Quote from '../../pages/Quotes';

it('Snapshot of the Quote page', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
