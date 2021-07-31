import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {store} from '../../Store';
import {faMinusCircle} from '@fortawesome/free-solid-svg-icons';
import {Colors} from '../../Themes';
import Styles from './Styles';

const TodoCard = props => {
  const {item} = props;
  return (
    <View key={item.id} style={Styles.container}>
      <Text style={Styles.textOutline}>{item.name}</Text>
      <TouchableOpacity
        onPress={() =>
          store.dispatch({type: 'todo/removeFromTodo', payload: item})
        }>
        <FontAwesomeIcon
          icon={faMinusCircle}
          size={32}
          color={Colors.background}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TodoCard;
