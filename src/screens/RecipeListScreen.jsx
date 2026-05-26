import { useEffect, useState } from "react";

import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";

import { getRecipes } from "../api/recipeApi";
import RecipeList from "../components/RecipeList";
import BottomNav from "../components/BottomNav";
import RecommendedRecipe from "../components/RecommendedRecipe";

function RecipeListScreen({ navigation }) {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const categories = [
    "전체",
    "반찬",
    "국&찌개",
    "일품",
    "후식",
    
  ];

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      const data = await getRecipes();

      setRecipes(data);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  const filteredRecipes =
    selectedCategory === "전체"
      ? recipes
      : recipes.filter((recipe) =>
          recipe.RCP_PAT2?.includes(selectedCategory)
        );

  function goSearch() {
    navigation.navigate("Search");
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.page}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>레시피 목록</Text>

        <Pressable style={styles.searchBox} onPress={goSearch}>
          <Text style={styles.searchIcon}>🔍</Text>
          <Text style={styles.searchText}>어떤 요리를 찾으시나요?</Text>
        </Pressable>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.tabs}
          contentContainerStyle={styles.tabsContent}
        >
          {categories.map((category) => (
            <Pressable
              key={category}
              style={[
                styles.tabButton,
                selectedCategory === category && styles.activeTabButton,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.tabText,
                  selectedCategory === category && styles.activeTabText,
                ]}
              >
                {category}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        {isLoading && (
          <View style={styles.loadingBox}>
            <ActivityIndicator size="large" color="#15b15a" />
            <Text style={styles.emptyText}>레시피 불러오는 중...</Text>
          </View>
        )}

        {!isLoading && recipes.length === 0 && (
          <Text style={styles.emptyText}>
            레시피를 불러오지 못했습니다.
          </Text>
        )}

        {!isLoading && recipes.length > 0 && filteredRecipes.length === 0 && (
          <Text style={styles.emptyText}>
            해당 카테고리의 레시피가 없습니다.
          </Text>
        )}

        {!isLoading && filteredRecipes.length > 0 && (
          <>
            <RecommendedRecipe
              recipe={filteredRecipes[0]}
              navigation={navigation}
            />

            <RecipeList
              recipes={filteredRecipes.slice(1)}
              navigation={navigation}
            />
          </>
        )}
      </ScrollView>

      <BottomNav navigation={navigation} current="Home" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  page: {
    flex: 1,
    backgroundColor: "white",
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 120,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#111",
    marginBottom: 24,
  },

  searchBox: {
    backgroundColor: "#f1f3f4",
    borderRadius: 30,
    paddingHorizontal: 18,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  searchIcon: {
    fontSize: 18,
    marginRight: 10,
  },

  searchText: {
    color: "#777",
    fontSize: 15,
  },

  tabs: {
    marginBottom: 24,
  },

  tabsContent: {
    paddingRight: 20,
  },

  tabButton: {
    backgroundColor: "#f1f3f4",
    paddingHorizontal: 20,
    paddingVertical: 11,
    borderRadius: 22,
    marginRight: 12,
  },

  activeTabButton: {
    backgroundColor: "#15b15a",
  },

  tabText: {
    color: "#555",
    fontSize: 14,
    fontWeight: "600",
  },

  activeTabText: {
    color: "white",
    fontWeight: "700",
  },

  loadingBox: {
    alignItems: "center",
    marginTop: 30,
  },

  emptyText: {
    color: "#777",
    fontSize: 14,
    lineHeight: 22,
    marginTop: 16,
  },
});

export default RecipeListScreen;