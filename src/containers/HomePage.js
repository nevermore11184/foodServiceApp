import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from '../components/Carousel';
import Options from '../components/Options';
import Menu from '../components/Menu';
import Testimonials from '../components/Testomonials';
import { fonts, colors } from '../utils/utils';

const HomePage = ({ navigation }) => {
  const [locationInput, setLocationInput] = useState('');

  return (
    <ScrollView style={styles.homePageContainer}>
      <View style={styles.locationContainer}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <TextInput
            style={styles.textInput}
            value={locationInput}
            placeholder="Enter your current location here"
            placeholderColor="#BCBEC0"
            onChange={(text) => setLocationInput(text)}
          />
          <Text style={styles.searchIcon}>
            <Icon name="search" size={20} color="#BCBEC0" />
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.submitLocationButton}
          >
            <Text style={styles.arrowIcon}>
              <Icon name="location-arrow" size={20} color="white" />
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.coreContainerStyle}>
        <SafeAreaView>
          <Carousel />
        </SafeAreaView>
        <View>
          <Options navigate={navigation.navigate} />
        </View>
        <Text style={styles.header}>Menu</Text>
        <Menu />
        <Text style={styles.header}>Testimonials</Text>
        <Testimonials />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homePageContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.white,
  },
  locationContainer: {
    width: '100%',
    borderRadius: 30,
  },
  mapStyle: {
    width: '100%',
    height: 260,
    borderRadius: 30,
  },
  coreContainerStyle: {
    marginTop: 10,
  },
  descriptionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionHeader: {
    width: '90%',
    textAlign: 'center',
    fontSize: 24,
    fontFamily: fonts.vietnam_bold,
  },
  descriptionContent: {
    width: '90%',
    textAlign: 'center',
    fontFamily: fonts.vietnam_regular,
  },
  textInput: {
    margin: 10,
    borderRadius: 4,
    height: 40,
    width: '70%',
    borderColor: colors.borderGrey,
    borderWidth: 0.4,
    paddingLeft: 40,
  },
  searchIcon: {
    fontWeight: 'normal',
    position: 'absolute',
    left: 23,
    top: 18,
  },
  submitLocationButton: {
    borderRadius: 6,
    width: '23%',
    paddingLeft: 13,
    paddingTop: 9,
    backgroundColor: colors.brightGreen,
    height: 40,
    marginTop: 10,
  },
  arrowIcon: {
    color: colors.white,
  },
  header: {
    textAlign: 'center',
    fontSize: 23,
    color: colors.lightGrey,
    margin: 23,
    fontWeight: 'bold',
  }
});

export default HomePage;
