import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyUser1, DummyUser2, DummyUser3} from '../../assets';
import {Header, List} from '../../components';
import {colors} from '../../utils';
import {Fire} from '../../configs';

const ChooseDoctor = ({navigation, route}) => {
  const [listDoctor, setListDoctor] = useState([]);
  const itemCategory = route.params;
  useEffect(() => {
    callDoctorByCategory(itemCategory.category);
  }, []);
  const callDoctorByCategory = (category) => {
    Fire.database()
      .ref('doctors/')
      .orderByChild('category')
      .equalTo(category)
      .once('value')
      .then((res) => {
        console.log('data list doctor :', res.val());
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map((item) => {
            data.push({
              id: item,
              data: oldData[item],
            });
          });
          console.log('Parse list Doctor:', data);
          setListDoctor(data);
        }
      });
  };
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title={`Pilih ${itemCategory.category}`}
        onPress={() => navigation.goBack()}
      />
      {listDoctor.map((doctor) => {
        return (
          <List
            key={doctor.id}
            type="next"
            profile={{uri: doctor.data.photo}}
            name={doctor.data.fullName}
            desc={doctor.data.gender}
            onPress={() => navigation.navigate('DoctorProfile', doctor)}
          />
        );
      })}
      {/* <List type="next" profile={DummyUser2} name="Gisel" desc="wanita" />
      <List type="next" profile={DummyUser3} name="Putri" desc="wanita" />
      <List type="next" profile={DummyUser3} name="Putri" desc="wanita" />
      <List type="next" profile={DummyUser3} name="Putri" desc="wanita" />
      <List type="next" profile={DummyUser3} name="Putri" desc="wanita" />
      <List type="next" profile={DummyUser3} name="Putri" desc="wanita" />
      <List type="next" profile={DummyUser3} name="Putri" desc="wanita" />
      <List type="next" profile={DummyUser3} name="Putri" desc="wanita" /> */}
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
});
