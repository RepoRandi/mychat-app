import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Profile, ProfileItem, Button, Gap} from '../../components';
import {colors} from '../../utils';

const DoctorProfile = ({navigation, route}) => {
  const dataDoctor = route.params;
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Profile
        photo={{uri: dataDoctor.data.photo}}
        name={dataDoctor.data.fullName}
        desc={dataDoctor.data.profession}
      />
      <Gap height={10} />
      {/* <ProfileItem label="Alumnus" value={dataDoctor.data.university} />
      <ProfileItem
        label="Tempat Praktik"
        value={dataDoctor.data.hospital_address}
      />
      <ProfileItem label="No. STR" value={dataDoctor.data.str_number} /> */}
      <ProfileItem label="Address" value="Malang" />
      <ProfileItem label="Company" value="Arkademy" />
      <ProfileItem label="Status" value="Single" />
      <View style={styles.action}>
        <Button
          title="Start Chatting"
          onPress={() => navigation.navigate('Chatting', dataDoctor)}
        />
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  action: {paddingHorizontal: 40, paddingTop: 23},
});
