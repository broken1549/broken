import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";

function RecipeCard({ recipe, navigation }) {
  if (!recipe) return null;

  const fallbackImage =
    "https://via.placeholder.com/300x200?text=No+Image";

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

      <View style={styles.info}>
        <Text style={styles.title}>
          {recipe.RCP_NM}
        </Text>

        <Text style={styles.desc}>
          {recipe.RCP_PAT2 ||
            "레시피 설명 정보 없음"}
        </Text>

        <View style={styles.meta}>
          <Text style={styles.metaText}>
            {recipe.INFO_ENG
              ? `${recipe.INFO_ENG} kcal`
              : "칼로리 정보 없음"}
          </Text>

          {recipe.INFO_WGT && (
            <Text style={styles.metaText}>
              {recipe.INFO_WGT}
            </Text>
          )}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 24,
    overflow: "hidden",
    marginBottom: 18,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
  },

  image: {
    width: "100%",
    height: 135,
  },

  info: {
    padding: 14,
  },

  title: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 8,
    color: "#111",
  },

  desc: {
    fontSize: 13,
    color: "#777",
    marginBottom: 10,
    lineHeight: 18,
  },

  meta: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  metaText: {
    fontSize: 12,
    color: "#15b15a",
    fontWeight: "600",
  },
});

export default RecipeCard;