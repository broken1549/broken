import { useState } from "react";

import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  SafeAreaView,
} from "react-native";

function LoginScreen({ navigation }) {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  function handleLogin() {
    console.log(email, password);

    navigation.navigate("Home");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          로그인
        </Text>

        <Text style={styles.subtitle}>
          AI 레시피 추천 서비스를
          시작해보세요
        </Text>

        <TextInput
          style={styles.input}
          placeholder="이메일"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="비밀번호"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Pressable
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.loginText}>
            로그인
          </Text>
        </Pressable>

        <Pressable style={styles.kakaoButton}>
          <Text style={styles.kakaoText}>
            카카오 로그인
          </Text>
        </Pressable>

        <Pressable
          style={styles.guestButton}
          onPress={() =>
            navigation.navigate("Home")
          }
        >
          <Text style={styles.guestText}>
            로그인 없이 둘러보기
          </Text>
        </Pressable>

        <View style={styles.links}>
          <Pressable
            onPress={() =>
              navigation.navigate("Signup")
            }
          >
            <Text style={styles.linkText}>
              회원가입
            </Text>
          </Pressable>

          <Pressable
            onPress={() =>
              navigation.navigate("FindId")
            }
          >
            <Text style={styles.linkText}>
              아이디 찾기
            </Text>
          </Pressable>

          <Pressable
            onPress={() =>
              navigation.navigate(
                "ResetPassword"
              )
            }
          >
            <Text style={styles.linkText}>
              비밀번호 찾기
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  card: {
    backgroundColor: "white",
    borderRadius: 30,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 8,
  },

  title: {
    fontSize: 34,
    fontWeight: "700",
    color: "#111",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    color: "#777",
    marginBottom: 28,
    lineHeight: 22,
  },

  input: {
    height: 56,
    backgroundColor: "#f1f3f4",
    borderRadius: 18,
    paddingHorizontal: 18,
    marginBottom: 14,
    fontSize: 15,
  },

  loginButton: {
    height: 56,
    backgroundColor: "#15b15a",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },

  loginText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },

  kakaoButton: {
    height: 56,
    backgroundColor: "#fee500",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 14,
  },

  kakaoText: {
    color: "#111",
    fontSize: 16,
    fontWeight: "700",
  },

  guestButton: {
    height: 56,
    backgroundColor: "#ececec",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 14,
  },

  guestText: {
    color: "#555",
    fontSize: 15,
    fontWeight: "700",
  },

  links: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },

  linkText: {
    color: "#777",
    fontSize: 13,
    fontWeight: "600",
  },
});

export default LoginScreen;