import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  HomeProfile,
  DoctorCategory,
  DoctorRated,
  NewsItem,
  Gap,
} from '../../components';
import {fonts, colors} from '../../utils';
import {JsonDoctorCategory} from '../../assets';

const Home = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <HomeProfile />
            <Text style={styles.welcome}>Mau Chating Dengan Siapa?</Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                {JsonDoctorCategory.data.map((item) => {
                  return (
                    <DoctorCategory key={item.id} category={item.category} />
                  );
                })}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Rated</Text>
            <DoctorRated />
            <DoctorRated />
            <DoctorRated />
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  wrapperSection: {paddingHorizontal: 16},
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209,
  },
  wrapperScroll: {marginHorizontal: -16},
  category: {flexDirection: 'row'},
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
