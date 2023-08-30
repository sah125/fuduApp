import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchFilterInput from '../../../../components/Search';
import Categories from '../../../../components/Categories';
import MostPopular from '../../../../components/MostPopular';
import HostSellers from '../../../../components/HotSellers';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
          <SearchFilterInput/>

           <Categories/>

           <MostPopular/>

           <HostSellers/>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
     margin:20
  },
});
export default HomeScreen;
