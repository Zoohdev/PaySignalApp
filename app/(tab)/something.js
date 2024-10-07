import { View, Text, StyleSheet } from 'react-native'; // Corrected here
import React from 'react';

const Something = () => {
  return (
    <View style={styles.container}>
      <Text>Something</Text>
    </View>
  );
};

const styles = StyleSheet.create({ // Corrected here
  container: {
    backgroundColor: 'white',
    flex: 1, // Added to make sure the View takes up space
    justifyContent: 'center', // Centers the text vertically
    alignItems: 'center', // Centers the text horizontally
  },
});

export default Something;
