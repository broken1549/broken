import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";

function RecommendedRecipe({
  recipe,
  navigation,
}) {
  if (!recipe) return null;

  const fallbackImage =
    "https://via.placeholder.com/400x300?text=No+Image";

  const imageUrl =
    recipe.ATT_FILE_NO_MAIN || fallbackImage;

  const recipeId =
    recipe.RCP_SEQ || recipe.RCP_NM;

  function handleClick() {
    navigation.navigate("RecipeDetail", {
      id: recipeId,
    });
  }

  return (
    <Pressable
      style={styles.card}
      onPress={handleClick}
    >
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
      />

      <View style={styles.overlay}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            추천 레시피
          </Text>
        </View>

        <Text style={styles.title}>
          {recipe.RCP_NM}
        </Text>

        <Text style={styles.category}>
          {recipe.RCP_PAT2 || "레시피"}
        </Text>

        <Text style={styles.kcal}>
          {recipe.INFO_ENG
            ? `${recipe.INFO_ENG} kcal`
            : "칼로리 정보 없음"}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 280,
    borderRadius: 28,
    overflow: "hidden",
    marginBottom: 24,
    position: "relative",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  overlay: {
    position: "absolute",
    left: 22,
    right: 22,
    bottom: 22,
  },

  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#15b15a",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    marginBottom: 12,
  },

  badgeText: {
    color: "white",
    fontSize: 13,
    fontWeight: "700",
  },

  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 6,
  },

  category: {
    color: "white",
    fontSize: 14,
    marginBottom: 4,
  },

  kcal: {
    color: "white",
    fontSize: 13,
  },
});

export default RecommendedRecipe;