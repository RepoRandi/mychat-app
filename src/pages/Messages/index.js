import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {List} from '../../components';
import {colors, fonts} from '../../utils';
import {DummyUser1, DummyUser2, DummyUser3} from '../../assets';

const Messages = ({navigation}) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      profile: DummyUser1,
      name: 'Milea Anita',
      desc: 'Sayang terimakasih hadiahnya, Aku suka bang...',
    },
    {
      id: 2,
      profile: DummyUser2,
      name: 'Gisel',
      desc: 'Besok malam minggu, Jangan lupa Ke rum... ',
    },
    {
      id: 3,
      profile: DummyUser3,
      name: 'Putri',
      desc: 'Kenapa akhir2 ini kamu susah di hubungi ter...',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {users.map((user) => {
          return (
            <List
              key={user.id}
              profile={user.profile}
              name={user.name}
              desc={user.desc}
              onPress={() => navigation.navigate('Chatting')}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1},
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 20,
    marginLeft: 16,
  },
});
