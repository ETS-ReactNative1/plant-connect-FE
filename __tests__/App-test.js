import renderer from 'react-test-renderer'
import App from '../App'
import { create } from 'react-test-renderer'

test('renders correctly', () => {
	const tree = renderer.create(<App />).toJSON()
	expect(tree).toMatchSnapshot()
})
