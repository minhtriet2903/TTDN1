import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Heading} from '../components/Heading';
import {Input} from '../components/Input';
import {FilledButton} from '../components/FilledButton';
import {TextButton} from '../components/TextButton';
import {Error} from '../components/Error';

export function RegistrationScreen({navigation}) {

  return (
    <View style={styles.container}>
      <Heading style={styles.title}>Registration</Heading>
      <Error error={''} />
      <Input
        style={styles.input}
        placeholder={'Email'}
        keyboardType={'email-address'}
      />
      <Input
        style={styles.input}
        placeholder={'Password'}
        secureTextEntry
      />
      <FilledButton
        title={'Registration'}
        style={styles.loginButton}
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
      <TextButton
        title={'I have already had an account'}
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:120,
    alignItems:'center',
  },  
  title: {
    marginBottom: 48,
  },
  input: {
    marginVertical: 8,
  },
  loginButton: {
    marginVertical: 32,
  },
});
