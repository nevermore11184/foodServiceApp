import React from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { optionElements } from '../constants';
import { fonts, colors } from '../utils/utils';

const Options = ({ navigate }) => {
  const renderItem = (item) => (
    <TouchableWithoutFeedback onPress={() => navigate('Details')}>
      <View style={styles.optionBlock}>
        <View style={styles.topOptionBlock}>
          <Image style={styles.optionImage} source={item.uri} />
        </View>
        <View style={styles.bottomOptionBlock}>
          <Text style={styles.optionText}>{item.title}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
  return (
    <SafeAreaView style={styles.optionsContainer}>
      {optionElements.map(renderItem)}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  optionsContainer: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  optionBlock: {
    height: 100,
    marginBottom: 30,
    borderColor: colors.lightYellow,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  optionText: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: fonts.vietnam_regular,
  },
  topOptionBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.white,
    borderBottomColor: colors.borderGrey,
    borderBottomWidth: 0.5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 110,
    height: 80,
  },
  bottomOptionBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: colors.white,
    width: 110,
    height: 43,
  },
  optionImage: {
    borderRadius: 80,
    width: 80,
    height: 60,
  },
});

export default Options;
