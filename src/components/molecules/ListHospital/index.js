import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyHospital1} from '../../../assets';
import {fonts, colors} from '../../../utils';

const ListHospital = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyHospital1} style={styles.picture} />
      <View>
        <Text style={styles.title}>Rumah Sakit</Text>
        <Text style={styles.title}>Citra Bunga Merdeka</Text>
        <Text style={styles.address}>Jln. Surya Sejahtera 20</Text>
      </View>
    </View>
  );
};

export default ListHospital;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  picture: {width: 80, height: 60, borderRadius: 11, marginRight: 16},
  title: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  address: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 6,
  },
});
