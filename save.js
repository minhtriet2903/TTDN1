import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthStackNavigator} from './navigators/AuthStackNavigator';
import database from '@react-native-firebase/database';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  const setData = () => {
    database().ref('test').set({ username: username, password: password }).then(() => {
      console.log('Data set.')
    }).catch(e => {
      console.log('Set data error: ', e);
    });
  }

  const onLogin = () => {
    if (!username || !password) {
      Alert.alert('Thông báo', 'Vui lòng nhập đủ thông tin');
      return;
    }
// vl, nãy quên parse kiểu dữ liệu, k phải sai
    database().ref('/user').once('value').then(snapshot => {
      const value = snapshot.val();
      // Cái này chơi compare tào lao nha, thực tế k ai làm vậy
      if ((username !== value.username) || (password !== value.password)) {
        Alert.alert('Thông báo', 'Đăng nhập thất bại');
      } else {
        Alert.alert('Thông báo', 'Đăng nhập thành công');
        // Do something
      }
    });
  }

  return <View>
    <TextInput value={username} onChangeText={(text) => setUsername(text)} placeholder="Nhập tài khoản"/>
    <TextInput value={password} onChangeText={(text) => setPassword(text)} placeholder="Nhập mật khẩu"/>
    <TouchableOpacity onPress={setData(username,password)}>
      <Text>Đăng nhập</Text>
    </TouchableOpacity>
  </View>
}

/*
database()
  .ref('/users/123')
  .set({
    name: 'Ada Lovelace',
    age: 31,
  })
  .then(() => console.log('Data set.'));
  */

//const RootStack = createStackNavigator();

// export default function() {
//   return (
//   <NavigationContainer>
//     <RootStack.Navigator
//       screenOptions={{
//         headerShown: false,
//         animationEnabled: false,
//       }}>
//       <RootStack.Screen name={'RootStack'} component ={AuthStackNavigator}/>
//     </RootStack.Navigator>
//   </NavigationContainer>
//   );
// }

