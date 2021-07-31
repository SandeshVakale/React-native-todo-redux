import React from 'react';
import {
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useSelector} from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {store} from '../../Store';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {Colors} from '../../Themes';
import Styles from './Styles';
import TodoCard from '../../Components/TodoCard';

const Home = () => {
  const {todo} = useSelector(state => state.todoModel);
  const [value, onChangeText] = React.useState('');

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView style={Styles.container}>
        {todo.map(item => (
          <TodoCard key={item.id} item={item} />
        ))}
      </ScrollView>
      <View style={Styles.inputContainer}>
        <TextInput
          style={Styles.input}
          onChangeText={text => onChangeText(text)}
          value={value}
          placeholder="Insert your todo!"
        />
        <TouchableOpacity
          onPress={() => {
            value !== '' &&
              store.dispatch({
                type: 'todo/addToTodo',
                payload: {name: value, id: uuidv4()},
              });
            onChangeText('');
          }}>
          <FontAwesomeIcon
            icon={faPlusCircle}
            size={32}
            color={Colors.background}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
