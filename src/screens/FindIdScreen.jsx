import {
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet,
  } from "react-native";
  
  function FindIdScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          아이디 찾기
        </Text>
  
        <Text style={styles.description}>
          가입 시 사용한 정보를 입력하면
          아이디를 찾을 수 있습니다.
        </Text>
  
        <TextInput
          placeholder="닉네임 입력"
          placeholderTextColor="#999"
          style={styles.input}
        />
  
        <TextInput
          placeholder="전화번호 입력"
          placeholderTextColor="#999"
          style={styles.input}
          keyboardType="phone-pad"
        />
  
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            아이디 찾기
          </Text>
        </Pressable>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingHorizontal: 24,
      paddingTop: 100,
    },
  
    title: {
      fontSize: 32,
      fontWeight: "700",
      color: "#111",
      marginBottom: 14,
    },
  
    description: {
      fontSize: 15,
      color: "#777",
      lineHeight: 22,
      marginBottom: 34,
    },
  
    input: {
      height: 58,
      backgroundColor: "#f1f3f4",
      borderRadius: 18,
      paddingHorizontal: 18,
      fontSize: 15,
      marginBottom: 16,
    },
  
    button: {
      height: 58,
      backgroundColor: "#15b15a",
      borderRadius: 18,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
    },
  
    buttonText: {
      color: "white",
      fontSize: 16,
      fontWeight: "700",
    },
  });
  
  export default FindIdScreen;