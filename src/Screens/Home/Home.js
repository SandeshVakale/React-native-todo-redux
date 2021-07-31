import React, {useEffect} from 'react';
import {ScrollView, Text, View, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {Colors} from '../../Themes';
import Styles from './Styles';

const Home = () => {
  const {todo} = useSelector(state => state.todoModel);
  console.log('todo', todo);
  return <View></View>;
};

export default Home;
