import 'react-native';
import React from 'react';
import Home from '../../src/Screens/Home/Home';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
jest.useFakeTimers();
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

const mockStore = configureStore([]);

test('Home screen renders correctly', () => {
  const initialStore = {
    todoModel: {todo: []},
  };
  let store = mockStore(initialStore);
  const tree = renderer
    .create(
      <Provider store={store}>
        <Home />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
