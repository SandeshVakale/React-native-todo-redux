import 'react-native';
import React from 'react';
import ToDoCard from '../../src/Components/TodoCard';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

const mockStore = configureStore([]);

test('ToDoCard component renders correctly', () => {
  const initialStore = {
    todoModel: {todo: []},
  };
  let store = mockStore(initialStore);

  let item = {
    name: 'Hello Test',
    id: '12345',
  };

  const tree = renderer
    .create(
      <Provider store={store}>
        <ToDoCard item={item} />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
