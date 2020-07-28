import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyDoctor1, IconStar} from '../../../assets';
import {fonts, colors} from '../../../utils';
import {color} from 'react-native-reanimated';

const DoctorRated = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor1} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>Alexa Rachel</Text>
        <Text style={styles.category}>Pediatrician</Text>
      </View>
      <View style={styles.rate}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </View>
  );
};

export default DoctorRated;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'space-between'},
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
    marginBottom: 20,
  },
  profile: {flex: 1},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
  rate: {flexDirection: 'row'},
});
