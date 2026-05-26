import { useState } from "react";

import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  SafeAreaView,
  Alert,
  ScrollView,
} from "react-native";

function SignupScreen({ navigation }) {
  const [nickname, setNickname] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  function handleSignup() {
    if (
      !nickname ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      Alert.alert(
        "알림",
        "모든 항목을 입력해주세요."
      );
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert(
        "알림",
        "비밀번호가 일치하지 않습니다."
      );
      return;
    }

    console.log({
      nickname,
      email,
      password,
    });

    Alert.alert(
      "회원가입",
      "회원가입이 완료되었습니다."
    );

    navigation.navigate("Login");
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={
          styles.content
        }
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>
          회원가입
        </Text>

        <Text style={styles.description}>
          새로운 계정을 만들고
          다양한 레시피 서비스를
          이용해보세요.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="닉네임"
          placeholderTextColor="#999"
          value={nickname}
          onChangeText={setNickname}
        />

        <TextInput
          style={styles.input}
          placeholder="이메일"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="비밀번호"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="비밀번호 확인"
          placeholderTextColor="#999"
          secureTextEntry
          value={confirmPassword}
          onChangeText={
            setConfirmPassword
          }
        />

        <Pressable
          style={styles.signupButton}
          onPress={handleSignup}
        >
          <Text style={styles.signupText}>
            회원가입
          </Text>
        </Pressable>

        <Pressable
          style={styles.backButton}
          onPress={() =>
            navigation.navigate("Login")
          }
        >
          <Text style={styles.backText}>
            로그인으로 돌아가기
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },

  title: {
    fontSize: 34,
    fontWeight: "700",
    color: "#111",
    marginBottom: 16,
  },

  description: {
    fontSize: 15,
    lineHeight: 24,
    color: "#777",
    marginBottom: 34,
  },

  input: {
    height: 58,
    backgroundColor: "#fff",
    borderRadius: 18,
    paddingHorizontal: 18,
    fontSize: 15,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },

  signupButton: {
    height: 58,
    backgroundColor: "#15b15a",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  signupText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },

  backButton: {
    height: 58,
    backgroundColor: "#f1f3f4",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 14,
  },

  backText: {
    color: "#555",
    fontSize: 15,
    fontWeight: "700",
  },
});

export default SignupScreen;