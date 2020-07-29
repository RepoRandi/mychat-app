import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyUser1, DummyUser2, DummyUser3} from '../../assets';
import {Header, ListDoctor} from '../../components';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header type="dark" title="love" onPress={() => navigation.goBack()} />
      <ListDoctor
        type="next"
        profile={DummyUser1}
        name="Milea Anita"
        desc="wanita"
        onPress={() => navigation.navigate('Chatting')}
      />
      <ListDoctor type="next" profile={DummyUser2} name="Gisel" desc="wanita" />
      <ListDoctor type="next" profile={DummyUser3} name="Putri" desc="wanita" />
      <ListDoctor type="next" profile={DummyUser3} name="Putri" desc="wanita" />
      <ListDoctor type="next" profile={DummyUser3} name="Putri" desc="wanita" />
      <ListDoctor type="next" profile={DummyUser3} name="Putri" desc="wanita" />
      <ListDoctor type="next" profile={DummyUser3} name="Putri" desc="wanita" />
      <ListDoctor type="next" profile={DummyUser3} name="Putri" desc="wanita" />
      <ListDoctor type="next" profile={DummyUser3} name="Putri" desc="wanita" />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
});
