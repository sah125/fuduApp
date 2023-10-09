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
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addItemToCart  } from '../redux/Actions/totalActions'; // Import your action creators


 const categories = [
  {
    id: "1",
    name: "Juicy grilled pork",
    image: require("../assets/images/juicy-grilled-pork.jpg"),
    rating: "5/5",
    price: "$59",
    discount: "25% off",
  },
  {
    id: "2",
    name: "Chiken Jhal",
    image: require("../assets/images/chiken-jhal.jpg"),
    rating: "5/5",
    price: "$59",
    discount: "25% off",
  },
  {
    id: "3",
    name: "Classic Burger",
    image: require("../assets/images/classic-burger.jpg"),
    rating: "5/5",
    price: "$59",
    discount: "25% off",
  },
  {
    id: "4",
    name: "Lighthouse Pizza",
    image: require("../assets/images/lighthouse-pizza.jpg"),
    rating: "5/5",
    price: "$59",
    discount: "25% off",
  },
  {
    id: "5",
    name: "Dosa Darbar,City",
    image: require("../assets/images/dosa-darbar.jpg"),
    rating: "5/5",
    price: "$59",
    discount: "25% off",
  },
  {
    id: "6",
    name: "Dosa Darbar,City",
    image: require("../assets/images/city.jpg"),
    rating: "5/5",
    price: "$59",
    discount: "25% off",
  },
];

export type Category = {
  id: string;
  name: string;
  image: number;
  rating: string;
  price: string;
  discount: string;
};
export interface Item {
  name: string;
  quantity: number;
  price: number;
}
interface CategoryCardProps {
  category: Category;
  onPress: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onPress, }) => { // Add dispatch to the props
  const dispatch = useDispatch(); 
  const handleAddCategory = () => {
    const categoryToAdd = {
      name: category.name,
      quantity: 1, // You can set the initial quantity to 1
      price: parseInt(category.price.replace('$', ''), 10), // Assuming the price is in the format "$59"
    };
    dispatch(addItemToCart(categoryToAdd)); 
  };
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <View style={styles.card}>
      <Image source={category.image} style={styles.categoryImage} resizeMode="cover" />
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
      <TouchableOpacity style={styles.addButton} onPress={handleAddCategory}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const PopularWithYourOrder = () => {
  const handleCategoryPress = (categoryId: string) => {    console.log(`Category ${categoryId} pressed`);
  };
  return (
    <>
      <View style={styles.cardPopular}>
        <Text style={styles.textMost}>Popular with Your Order</Text>
      </View>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryCard
            category={item}
            onPress={() => handleCategoryPress(item.id)}
          />
        )}
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
  addButton: {
    backgroundColor: "#E03636",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    right: 5,
  },
  addButtonText: {
    fontSize: 10,
    color: "#fff",
  },
});

export default PopularWithYourOrder;
