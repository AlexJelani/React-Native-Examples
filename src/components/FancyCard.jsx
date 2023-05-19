import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://www.japan-guide.com/g19/2016_05.jpg',
          }}
          style={styles.cardImage} // Move this line inside the <Image> component
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Train Ettiquette</Text>
            <Text style={styles.cardLabel}>Useful phrases and train manner</Text>
            <Text style={styles.cardDescription}>Millions of people use Japan’s train system each day.
             While navigating the train network can seem daunting, 
             these etiquette tips will help make your trip a pleasant one.</Text>
             <Text style={styles.cardFooter}>Related Posts</Text>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize:24,
    fontWeight: 'bold',
    paddingHorizontal:8
  },
  card: {
    width:350,
    height: 360,
    borderRadius: 6,
    marginHorizontal:12,
    marginVertical:16
  },
  cardElevated: {
    backgroundColor:'#CAD5E2',
    elevation: 3,
    shadowOffset: {
        width:1,
        height: 1
    }
},
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
  },
  cardBody:{
   flex:1,
   flexGrow:1,
   paddingHorizontal: 12

  },
  cardTitle:{
    color:'#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4
  },
  cardLabel:{
    color:'#000000',
    fontSize:16

  },
  cardDescription:{
    color:'#000000'

  },
  cardFooter:{
    color:'#000000'

  }
});
