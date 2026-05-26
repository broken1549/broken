import { View, StyleSheet } from "react-native";
import RecipeCard from "./RecipeCard";

function RecipeList({ recipes = [], navigation }) {
  return (
    <View style={styles.list}>
      {recipes.map((recipe) => (
        <View
          key={recipe.RCP_SEQ || recipe.RCP_NM}
          style={styles.cardWrapper}
        >
          <RecipeCard recipe={recipe} navigation={navigation} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: 140,
  },

  cardWrapper: {
    width: "48%",
    marginBottom: 18,
  },
});

export default RecipeList;