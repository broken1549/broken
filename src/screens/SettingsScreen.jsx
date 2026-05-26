import {
    View,
    Text,
    Pressable,
    StyleSheet,
    ScrollView,
    Alert,
  } from "react-native";
  
  import { signOut } from "firebase/auth";
  
  import { auth } from "../firebase";
  
  import BottomNav from "../components/BottomNav";
  
  function SettingsScreen({ navigation }) {
    async function handleLogout() {
      try {
        await signOut(auth);
  
        Alert.alert(
          "로그아웃",
          "로그아웃 되었습니다."
        );
  
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        });
      } catch (error) {
        Alert.alert(
          "오류",
          "로그아웃 실패: " + error.message
        );
      }
    }
  
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.page}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>설정</Text>
  
          <View style={styles.profileCard}>
            <View style={styles.profileCircle}>
              <Text style={styles.profileEmoji}>
                👨‍🍳
              </Text>
            </View>
  
            <Text style={styles.profileName}>
              사용자
            </Text>
  
            <Text style={styles.profileEmail}>
              recipe@app.com
            </Text>
          </View>
  
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              계정
            </Text>
  
            <Pressable style={styles.menuItem}>
              <Text style={styles.menuText}>
                프로필 수정
              </Text>
  
              <Text style={styles.arrow}>
                ›
              </Text>
            </Pressable>
  
            <Pressable style={styles.menuItem}>
              <Text style={styles.menuText}>
                비밀번호 변경
              </Text>
  
              <Text style={styles.arrow}>
                ›
              </Text>
            </Pressable>
          </View>
  
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              앱 설정
            </Text>
  
            <Pressable style={styles.menuItem}>
              <Text style={styles.menuText}>
                알림 설정
              </Text>
  
              <Text style={styles.arrow}>
                ›
              </Text>
            </Pressable>
  
            <Pressable style={styles.menuItem}>
              <Text style={styles.menuText}>
                이용약관
              </Text>
  
              <Text style={styles.arrow}>
                ›
              </Text>
            </Pressable>
          </View>
  
          <Pressable
            style={styles.logoutButton}
            onPress={handleLogout}
          >
            <Text style={styles.logoutText}>
              로그아웃
            </Text>
          </Pressable>
        </ScrollView>
  
        <BottomNav
          navigation={navigation}
          current="Settings"
        />
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
      backgroundColor: "#fff",
    },
  
    content: {
      paddingHorizontal: 20,
      paddingTop: 30,
      paddingBottom: 120,
    },
  
    title: {
      fontSize: 32,
      fontWeight: "700",
      color: "#111",
      marginBottom: 28,
    },
  
    profileCard: {
      backgroundColor: "#f4fff8",
      borderRadius: 30,
      paddingVertical: 30,
      alignItems: "center",
      marginBottom: 28,
    },
  
    profileCircle: {
      width: 88,
      height: 88,
      borderRadius: 44,
      backgroundColor: "#15b15a",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 14,
    },
  
    profileEmoji: {
      fontSize: 40,
    },
  
    profileName: {
      fontSize: 22,
      fontWeight: "700",
      color: "#111",
      marginBottom: 6,
    },
  
    profileEmail: {
      fontSize: 14,
      color: "#777",
    },
  
    section: {
      marginBottom: 26,
    },
  
    sectionTitle: {
      fontSize: 18,
      fontWeight: "700",
      color: "#111",
      marginBottom: 14,
    },
  
    menuItem: {
      backgroundColor: "#f1f3f4",
      borderRadius: 22,
      paddingHorizontal: 20,
      paddingVertical: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12,
    },
  
    menuText: {
      fontSize: 15,
      color: "#333",
      fontWeight: "600",
    },
  
    arrow: {
      fontSize: 24,
      color: "#999",
    },
  
    logoutButton: {
      backgroundColor: "#ff4d4f",
      borderRadius: 24,
      paddingVertical: 18,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 18,
    },
  
    logoutText: {
      color: "white",
      fontSize: 16,
      fontWeight: "700",
    },
  });
  
  export default SettingsScreen;