import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {ILHospitalBg} from '../../assets';
import {fonts, colors} from '../../utils';
import {ListHospital} from '../../components';

const Contact = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBg} style={styles.background}>
        <Text style={styles.title}>Nearby Hospital</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital />
        <ListHospital />
        <ListHospital />
      </View>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1},
  background: {height: 240, paddingTop: 30},
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    textAlign: 'center',
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 20,
    flex: 1,
    marginTop: -30,
    paddingTop: 14,
  },
});
