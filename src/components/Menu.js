import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { menuDetails } from '../constants';
import { colors } from '../utils/utils';

const Menu = () => {
  const renderItem = (item) => (
    <View style={styles.menuBlock}>
      <View>
        <Text style={styles.restaurantTitle}>{item.restaurantName}</Text>
        <Text style={styles.restaurantMenu}>{item.menu}</Text>
      </View>
      <View style={styles.priceContainer}>
        <View style={styles.priceSubContainer}>
          <Text style={styles.price}>{`₹${item.price}`}</Text>
          <Text style={styles.subPriceTitle}>Per meal</Text>
        </View>
        <Icon
          style={styles.arrowIcon}
          name="arrow-right"
          size={14}
          color="#4D8802"
        />
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.optionsContainer}>
      {menuDetails.map(renderItem)}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  optionsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    height: 80,
    backgroundColor: colors.white,
    borderWidth: 0.2,
    borderRadius: 10,
    marginBottom: 16,
    borderColor: colors.borderGrey,
    padding: 16,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  restaurantTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: colors.lightGrey,
  },
  restaurantMenu: {
    fontSize: 13,
    fontWeight: 'normal',
    color: colors.lightGrey,
  },
  price: {
    fontSize: 20,
    color: colors.straightGreen,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  priceSubContainer: {
    marginTop: 10,
  },
  arrowIcon: {
    marginTop: 19,
    fontWeight: '200',
    marginLeft: 14,
  },
  subPriceTitle: {
    fontSize: 11,
    color: colors.straightGreen,
  },
});

export default Menu;
