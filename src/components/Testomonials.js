import React from 'react';
import { Text, View, SafeAreaView, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { testimonials } from '../constants';
import { fonts, colors } from '../utils/utils';

const Testimonials = () => {
  const renderItem = ({ item }) => (
    <View>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.content}>{item.content}</Text>
        </View>
        <Image style={styles.avatar} source={item.avatar} />
        <View style={styles.bottomView}>
          <Text style={styles.author}>{item.author}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.containerView}>
      <Carousel
        data={testimonials}
        renderItem={renderItem}
        sliderWidth={400}
        activeSlideAlignment="center"
        itemWidth={300}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
    borderColor: 'grey',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  topContainer: {
    height: '70%',
    width: '100%',
    padding: 40,
    backgroundColor: colors.lightGrey_1,
    fontFamily: fonts.vietnam_regular,
  },
  content: {
    textAlign: 'center',
    fontSize: 13,
    marginBottom: 4,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 40,
    position: 'absolute',
    alignSelf: 'center',
    top: 116,
  },
  bottomView: {
    height: '30%',
  },
  author: {
    marginTop: 30,
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  containerView: {
    marginBottom: 30,
  },
});

export default Testimonials;
