import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";

const categories = [
  {
    id: "1",
    name: "All",
    image: require("../assets/images/014---Pizza-Slice.png"),
    backgroundColor: "#FFBDBC",
  },
  {
    id: "2",
    name: "Burger",
    image: require('../assets/images/014---Pizza-Slice.png'),
    backgroundColor: "#FCEBCD",
  },
  {
    id: "3",
    name: "Pizza",
    image: require('../assets/images/014---Pizza-Slice.png'),
    backgroundColor: "#CCEDCF",
  },
  {
    id: "4",
    name: "Chicken",
    image: require('../assets/images/014---Pizza-Slice.png'),
    backgroundColor: "#F3D6B3",
  },
  {
    id: "5",
    name: "Chicken",
    image: require('../assets/images/014---Pizza-Slice.png'),
    backgroundColor: "#FFE6F1",
  },
  {
    id: "6",
    name: "Drink",
    image: require('../assets/images/014---Pizza-Slice.png'),
    backgroundColor: "#FFA6D9",
  },

];

interface Category {
  id: string;
  name: string;
  image: number;
  backgroundColor: string; // Background color property
}

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <View style={styles.cardContainer}>
      <View
        style={[styles.card, { backgroundColor: category.backgroundColor }]}
      >
        <Image source={category.image} style={styles.categoryImage} />
      </View>
      <Text style={styles.categoryName}>{category.name}</Text>
    </View>
  );
};

const Categories = () => {
  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => <CategoryCard category={item} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      horizontal={true}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  cardContainer: {
    alignItems: "center", // Center items horizontally
    marginHorizontal: 8,
  },
  card: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryImage: {
    borderRadius: 50,
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 10,
    color:"#2B0100",
    textAlign: "center",
  },
});

export default Categories;
