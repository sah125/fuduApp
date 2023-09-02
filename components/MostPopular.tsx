import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const categories = [
  {
    id: "1",
    name: "Dosa Darbar,City",
    image: require("../assets/images/chicken.jpg"),
  },
  {
    id: "2",
    name: "BurDosa Darbar,Cityger",
    image: require("../assets/images/chicken.jpg"),
  },
  {
    id: "3",
    name: "Dosa Darbar,City",
    image: require("../assets/images/chicken.jpg"),
  },
  {
    id: "4",
    name: "Dosa Darbar,City",
    image: require("../assets/images/chicken.jpg"),
  },
  {
    id: "5",
    name: "Dosa Darbar,City",
    image: require("../assets/images/chicken.jpg"),
  },
  {
    id: "6",
    name: "Dosa Darbar,City",
    image: require("../assets/images/chicken.jpg"),
  },
];

interface Category {
  id: string;
  name: string;
  image: number;
}

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <>
      <View style={styles.cardContainer}>
        <View style={[styles.card]}>
          <Image source={category.image} style={styles.categoryImage} />
        </View>
        <Text style={styles.categoryName}>{category.name}</Text>
      </View>
    </>
  );
};

const MostPopular = () => {
  return (
    <>
      <TouchableOpacity style={styles.cardPopular}>
        <TouchableOpacity>
          <Text style={styles.textMost}>Most Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textAll}>See All</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryCard category={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
        horizontal={true}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  cardContainer: {
    alignItems: "center", // Center items horizontally
    marginHorizontal: -12,
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
    height: 100,
    width: 100,
  },
  textMost: {
    position: "absolute",
    paddingLeft: 2,
  },

  textAll: {
    position: "absolute",
    right: 0,
    color: "#555555",
  },

  cardPopular: {
    marginTop: 50,
  },
  categoryName: {
    fontSize: 10,
    color: "#2B0100",
    textAlign: "center",
  },
});

export default MostPopular;
