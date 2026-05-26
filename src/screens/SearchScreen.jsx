import { useState } from "react";

import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";

import { searchRecipes } from "../api/recipeApi";
import RecipeList from "../components/RecipeList";
import BottomNav from "../components/BottomNav";

function SearchScreen({ navigation }) {
  const [keyword, setKeyword] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  async function handleSearch() {
    if (!keyword.trim()) return;

    const data = await searchRecipes(keyword);

    setRecipes(data);
    setHasSearched(true);
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>
          어떤 요리를 찾으시나요?
        </Text>

        <View style={styles.searchBox}>
          <Text style={styles.icon}>🔍</Text>

          <TextInput
            style={styles.input}
            placeholder="예: 김치찌개"
            value={keyword}
            onChangeText={setKeyword}
          />

          <Pressable
            style={styles.button}
            onPress={handleSearch}
          >
            <Text style={styles.buttonText}>
              검색
            </Text>
          </Pressable>
        </View>

        {hasSearched && recipes.length > 0 && (
          <RecipeList
            recipes={recipes}
            navigation={navigation}
          />
        )}

        {hasSearched && recipes.length === 0 && (
          <Text style={styles.emptyText}>
            검색 결과가 없습니다.
          </Text>
        )}
      </ScrollView>

      <BottomNav
        navigation={navigation}
        current="Search"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    padding: 20,
    paddingBottom: 120,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 24,
    color: "#111",
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f3f4",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 24,
  },

  icon: {
    fontSize: 18,
    marginRight: 8,
  },

  input: {
    flex: 1,
    fontSize: 15,
  },

  button: {
    backgroundColor: "#15b15a",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 14,
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
  },

  emptyText: {
    marginTop: 20,
    color: "#777",
    fontSize: 14,
  },
});

export default SearchScreen;