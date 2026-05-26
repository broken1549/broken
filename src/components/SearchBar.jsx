import { useState } from "react";

import {
  View,
  TextInput,
  Pressable,
  Text,
  StyleSheet,
} from "react-native";



function SearchBar({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  function handleSubmit() {
    onSearch(keyword);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Search
          size={20}
          color="#777"
        />

        <TextInput
          style={styles.input}
          value={keyword}
          onChangeText={setKeyword}
          placeholder="음식 이름 검색"
          placeholderTextColor="#999"
          returnKeyType="search"
          onSubmitEditing={handleSubmit}
        />

        <Pressable
          style={styles.button}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>
            검색
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f3f4",
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: "#111",
  },

  button: {
    backgroundColor: "#15b15a",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 18,
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 14,
  },
});

export default SearchBar;