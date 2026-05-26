import { useEffect, useState } from "react";

import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import { getRecipeDetail } from "../api/recipeApi";

function RecipeDetailScreen({ route, navigation }) {
  const { id } = route.params;
  const [recipe, setRecipe] = useState(null);

  const fallbackImage =
    "https://via.placeholder.com/400x300?text=No+Image";

  useEffect(() => {
    async function fetchDetail() {
      const data = await getRecipeDetail(id);
      setRecipe(data);
    }

    fetchDetail();
  }, [id]);

  if (!recipe) {
    return (
      <View style={styles.loadingPage}>
        <ActivityIndicator size="large" color="#15b15a" />
        <Text style={styles.loadingText}>불러오는 중...</Text>
      </View>
    );
  }

  const ingredients = recipe.RCP_PARTS_DTLS
    ? recipe.RCP_PARTS_DTLS.split(",")
    : [];

  const manualSteps = [];

  for (let i = 1; i <= 20; i++) {
    const key = `MANUAL${String(i).padStart(2, "0")}`;
    const step = recipe[key];

    if (step && step.trim() !== "") {
      manualSteps.push(step);
    }
  }

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>← 뒤로가기</Text>
      </Pressable>

      <Image
        source={{ uri: recipe.ATT_FILE_NO_MAIN || fallbackImage }}
        style={styles.detailImage}
      />

      <Text style={styles.title}>{recipe.RCP_NM}</Text>

      <View style={styles.infoIcons}>
        <Text style={styles.infoChip}>🍽️ 1인분</Text>
        <Text style={styles.infoChip}>⏱️ 30분 이내</Text>
        <Text style={styles.infoChip}>⭐ 아무나</Text>
      </View>

      <Text style={styles.sectionTitle}>영양 정보</Text>

      <View style={styles.nutritionList}>
        <Text style={styles.nutritionChip}>
          열량: {recipe.INFO_ENG || "정보 없음"} kcal
        </Text>
        <Text style={styles.nutritionChip}>
          탄수화물: {recipe.INFO_CAR || "정보 없음"} g
        </Text>
        <Text style={styles.nutritionChip}>
          단백질: {recipe.INFO_PRO || "정보 없음"} g
        </Text>
        <Text style={styles.nutritionChip}>
          지방: {recipe.INFO_FAT || "정보 없음"} g
        </Text>
        <Text style={styles.nutritionChip}>
          나트륨: {recipe.INFO_NA || "정보 없음"} mg
        </Text>
      </View>

      <Text style={styles.sectionTitle}>재료</Text>

      <View style={styles.ingredientList}>
        {ingredients.length > 0 ? (
          ingredients.map((item, index) => (
            <Text key={index} style={styles.ingredientItem}>
              {item.trim()}
            </Text>
          ))
        ) : (
          <Text style={styles.emptyText}>재료 정보가 없습니다.</Text>
        )}
      </View>

      <Text style={styles.sectionTitle}>조리 방법</Text>

      <View style={styles.instructionList}>
        {manualSteps.length > 0 ? (
          manualSteps.map((step, index) => (
            <View key={index} style={styles.instructionItem}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>{index + 1}</Text>
              </View>

              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.emptyText}>조리 방법 정보가 없습니다.</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    padding: 20,
    paddingBottom: 50,
  },

  loadingPage: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    marginTop: 12,
    color: "#777",
  },

  backButton: {
    alignSelf: "flex-start",
    backgroundColor: "#f1f3f4",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 18,
    marginBottom: 18,
  },

  backText: {
    color: "#333",
    fontWeight: "600",
  },

  detailImage: {
    width: "100%",
    height: 260,
    borderRadius: 28,
    marginBottom: 22,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111",
    marginBottom: 20,
  },

  infoIcons: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 34,
  },

  infoChip: {
    backgroundColor: "#f1f3f4",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
    fontSize: 13,
    color: "#333",
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
    marginBottom: 16,
  },

  nutritionList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 32,
  },

  nutritionChip: {
    backgroundColor: "#f1f3f4",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
    fontSize: 13,
    color: "#333",
  },

  ingredientList: {
    marginBottom: 34,
  },

  ingredientItem: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    fontSize: 15,
    color: "#444",
    lineHeight: 22,
  },

  instructionList: {
    gap: 22,
  },

  instructionItem: {
    flexDirection: "row",
    gap: 14,
    alignItems: "flex-start",
  },

  stepNumber: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#15b15a",
    justifyContent: "center",
    alignItems: "center",
  },

  stepNumberText: {
    color: "white",
    fontWeight: "700",
  },

  stepText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 26,
    color: "#444",
  },

  emptyText: {
    color: "#777",
    lineHeight: 22,
  },
});

export default RecipeDetailScreen;