import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { View, Image, SafeAreaView, StyleSheet, } from 'react-native';
import { foodElements } from '../constants';

const FoodCarousel = () => {
  const renderItem = ({ item }) => (
    <View>
      <Image style={styles.imageBannerStyle} source={item.uri} />
    </View>
  );
  return (
    <SafeAreaView style={styles.containerBlock}>
      <Carousel
        autoplay
        autoplayDelay={1000}
        data={foodElements}
        renderItem={renderItem}
        sliderWidth={400}
        activeSlideAlignment="center"
        itemWidth={300}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerBlock: {
    marginTop: 10,
    width: 300,
    height: 180,
  },
  imageBannerStyle: {
    borderRadius: 20,
    width: 300,
    height: 180,
  },
});

export default FoodCarousel;
