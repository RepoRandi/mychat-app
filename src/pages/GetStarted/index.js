import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Alert} from 'react-native';
import {ILLogo, ILGetStarted} from '../../assets';
import {Button, Gap} from '../../components';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo width={120} height={120} />
        <Text style={styles.title}>Chating Lebih Mudah Dengan My Chat</Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button
          type="secondary"
          title="Sign In"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Nunito-SemiBold',
    color: '#FFFFFF',
    marginTop: 90,
  },
});
