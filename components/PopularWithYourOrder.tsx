import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
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
    name: "Juicy grilled pork",
    image: require("../assets/images/chicken.jpg"),
    rating: "5/5",
    price: "$59",
    discount: "25% off",
  },
  {
    id: "2",
    name: "Chiken Jhal",
    image: require("../assets/images/chicken.jpg"),
    rating: "5/5",
    price: "$59",
    discount: "25% off",
  },
  {
    id: "3",
    name: "Classic Burger",
    image: require("../assets/images/chicken.jpg"),
    rating: "5/5",
    price: "$59",
    discount: "25% off",
  },
  {
    id: "4",
    name: "Lighthouse Pizza",
    image: require("../assets/images/chicken.jpg"),
    rating: "5/5",
    price: "$59",
    discount: "25% off",
  },
  {
    id: "5",
    name: "Dosa Darbar,City",
    image: require("../assets/images/chicken.jpg"),
    rating: "5/5",
    price: "$59",
    discount: "25% off",
  },
  {
    id: "6",
    name: "Dosa Darbar,City",
    image: require("../assets/images/chicken.jpg"),
    rating: "5/5",
    price: "$59",
    discount: "25% off",
  },
];

interface Category {
  id: string;
  name: string;
  image: number;
  rating: string;
  price: string;
  discount: string;
}

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Image source={category.image} style={styles.categoryImage} />
      </View>
      <Text style={styles.categoryName}>{category.name}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.categoryRating}>
          <Icon name="star" size={6} color="#D90504" /> {category.rating}
        </Text>
        <Text style={styles.categoryPrice}>
          {category.price}
          <Text style={styles.strikethrough}> $80 </Text>
        </Text>
        <Text style={styles.categoryDiscount}>{category.discount}</Text>
      </View>
    </View>
  );
};

const PopularWithYourOrder = () => {
  return (
    <>
      <TouchableOpacity style={styles.cardPopular}>
        <Text style={styles.textMost}>Popular with Your Order</Text>
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
    alignItems: "center",
  },
  cardContainer: {
    margin: 10,
  },
  card: {
    borderRadius: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    paddingTop: 2,
  },
  categoryImage: {
    height: 75,
    width: 150,
    borderRadius: 5,
  },
  cardPopular: {
    marginTop: 10,
  },
  textMost: {
    fontSize: 14,
    color: "#2B0100",
    fontWeight: "700",
    paddingLeft: 10
  },
  categoryName: {
    fontSize: 8,
    color: "#2B0100",
    textAlign: 'left',
    fontWeight: '700',
    paddingTop: 2,
  },
  categoryRating: {
    fontSize: 6,
    color: "#FFFFFF",
    backgroundColor: "#F29F05",
    borderRadius: 5,
    padding: 2,
    
  },
  categoryPrice: {
    fontSize: 8,
    color: "#555555",
    marginLeft: 5,
  },
  categoryDiscount: {
    fontSize: 8,
    color: "#F29F05",
    marginLeft: 5, 
  },
  strikethrough: {
    textDecorationLine: "line-through",
  },
});

export default PopularWithYourOrder;
