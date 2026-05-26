import { useState } from "react";

import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  SafeAreaView,
} from "react-native";

function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState("");

  function handleResetPassword() {
    console.log("비밀번호 재설정:", email);

    alert("비밀번호 재설정 메일이 전송되었습니다.");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          비밀번호 찾기
        </Text>

        <Text style={styles.description}>
          가입한 이메일을 입력하면
          비밀번호 재설정 메일을 보내드립니다.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="이메일 입력"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Pressable
          style={styles.resetButton}
          onPress={handleResetPassword}
        >
          <Text style={styles.resetText}>
            재설정 메일 보내기
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
    padding: 30,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 8,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#111",
    marginBottom: 16,
  },

  description: {
    fontSize: 15,
    color: "#777",
    lineHeight: 22,
    marginBottom: 28,
  },

  input: {
    height: 58,
    backgroundColor: "#f1f3f4",
    borderRadius: 18,
    paddingHorizontal: 18,
    fontSize: 15,
    marginBottom: 16,
  },

  resetButton: {
    height: 58,
    backgroundColor: "#15b15a",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },

  resetText: {
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

export default ResetPasswordScreen;