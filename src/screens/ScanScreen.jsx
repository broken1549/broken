import {
    View,
    Text,
    Pressable,
    StyleSheet,
    Image,
    ScrollView,
    Alert,
  } from "react-native";
  
  import * as ImagePicker from "expo-image-picker";
  
  import BottomNav from "../components/BottomNav";
  
  function ScanScreen({ navigation }) {
    async function handleCamera() {
      const permission =
        await ImagePicker.requestCameraPermissionsAsync();
  
      if (!permission.granted) {
        Alert.alert(
          "권한 필요",
          "카메라 권한을 허용해주세요."
        );
        return;
      }
  
      const result =
        await ImagePicker.launchCameraAsync({
          mediaTypes:
            ImagePicker.MediaTypeOptions.Images,
          quality: 1,
        });
  
      if (!result.canceled) {
        console.log(
          "촬영 이미지:",
          result.assets[0]
        );
      }
    }
  
    async function handleGallery() {
      const permission =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
  
      if (!permission.granted) {
        Alert.alert(
          "권한 필요",
          "갤러리 권한을 허용해주세요."
        );
        return;
      }
  
      const result =
        await ImagePicker.launchImageLibraryAsync({
          mediaTypes:
            ImagePicker.MediaTypeOptions.Images,
          quality: 1,
        });
  
      if (!result.canceled) {
        console.log(
          "선택 이미지:",
          result.assets[0]
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
          <View style={styles.heroCard}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                AI 재료 분석 ✨
              </Text>
            </View>
  
            <Text style={styles.heroTitle}>
              식재료를 찍으면{"\n"}
              <Text style={styles.greenText}>
                레시피
              </Text>
              를 추천해드려요
            </Text>
  
            <Text style={styles.heroDescription}>
              카메라로 촬영하거나 갤러리에서
              사진을 선택하면 AI가 재료를
              분석해 어울리는 레시피를
              찾아줍니다.
            </Text>
  
            <View style={styles.imageArea}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80",
                }}
                style={styles.veggieImage}
              />
  
              <View style={styles.phoneBox}>
                <View style={styles.scanLabel}>
                  <Text style={styles.scanLabelText}>
                    ✨ 재료 인식 중...
                  </Text>
                </View>
  
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=300&q=80",
                  }}
                  style={styles.phoneImage}
                />
              </View>
            </View>
          </View>
  
          <Pressable
            style={[
              styles.actionCard,
              styles.activeCard,
            ]}
            onPress={handleCamera}
          >
            <View style={styles.actionIcon}>
              <Text style={styles.iconText}>
                📷
              </Text>
            </View>
  
            <View style={styles.actionTextBox}>
              <Text style={styles.actionTitle}>
                카메라로 촬영하기
              </Text>
  
              <Text style={styles.actionDesc}>
                실시간으로 재료를 촬영하고
                바로 분석해보세요
              </Text>
            </View>
  
            <Text style={styles.arrow}>
              ›
            </Text>
          </Pressable>
  
          <Pressable
            style={styles.actionCard}
            onPress={handleGallery}
          >
            <View style={styles.actionIcon}>
              <Text style={styles.iconText}>
                🖼️
              </Text>
            </View>
  
            <View style={styles.actionTextBox}>
              <Text style={styles.actionTitle}>
                갤러리에서 선택하기
              </Text>
  
              <Text style={styles.actionDesc}>
                이미 찍어둔 사진을 선택해
                분석해보세요
              </Text>
            </View>
  
            <Text style={styles.arrow}>
              ›
            </Text>
          </Pressable>
  
          <View style={styles.tipCard}>
            <View style={styles.tipIcon}>
              <Text style={styles.tipEmoji}>
                💡
              </Text>
            </View>
  
            <View style={{ flex: 1 }}>
              <Text style={styles.tipTitle}>
                더 정확한 분석을 위해
              </Text>
  
              <Text style={styles.tipDesc}>
                재료가 밝고 선명하게 보이도록
                촬영해주세요. 여러 재료가 함께
                있어도 인식할 수 있어요!
              </Text>
            </View>
          </View>
        </ScrollView>
  
        <BottomNav
          navigation={navigation}
          current="Scan"
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
      padding: 20,
      paddingBottom: 120,
    },
  
    heroCard: {
      backgroundColor: "#fff",
      borderRadius: 34,
      padding: 28,
      marginBottom: 26,
      shadowColor: "#000",
      shadowOpacity: 0.08,
      shadowRadius: 12,
      elevation: 6,
    },
  
    badge: {
      alignSelf: "flex-start",
      backgroundColor: "#dff5e9",
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 999,
      marginBottom: 18,
    },
  
    badgeText: {
      color: "#079447",
      fontWeight: "700",
    },
  
    heroTitle: {
      fontSize: 32,
      fontWeight: "700",
      lineHeight: 42,
      color: "#111",
    },
  
    greenText: {
      color: "#15b15a",
    },
  
    heroDescription: {
      marginTop: 18,
      fontSize: 15,
      lineHeight: 25,
      color: "#6f7782",
    },
  
    imageArea: {
      marginTop: 26,
      height: 210,
      position: "relative",
    },
  
    veggieImage: {
      position: "absolute",
      right: 40,
      bottom: 0,
      width: 240,
      height: 160,
      borderRadius: 30,
    },
  
    phoneBox: {
      position: "absolute",
      right: 0,
      top: 0,
      width: 105,
      height: 180,
      backgroundColor: "#111",
      borderRadius: 28,
      padding: 8,
    },
  
    phoneImage: {
      width: "100%",
      height: "100%",
      borderRadius: 22,
    },
  
    scanLabel: {
      position: "absolute",
      top: 20,
      left: -70,
      backgroundColor: "white",
      paddingHorizontal: 14,
      paddingVertical: 9,
      borderRadius: 999,
      zIndex: 10,
    },
  
    scanLabelText: {
      fontSize: 12,
      fontWeight: "700",
    },
  
    actionCard: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 28,
      padding: 22,
      marginBottom: 18,
      shadowColor: "#000",
      shadowOpacity: 0.08,
      shadowRadius: 10,
      elevation: 5,
    },
  
    activeCard: {
      borderWidth: 2,
      borderColor: "#15b15a",
      backgroundColor: "#f4fff8",
    },
  
    actionIcon: {
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: "#f1f3f4",
      justifyContent: "center",
      alignItems: "center",
      marginRight: 18,
    },
  
    iconText: {
      fontSize: 30,
    },
  
    actionTextBox: {
      flex: 1,
    },
  
    actionTitle: {
      fontSize: 17,
      fontWeight: "700",
      color: "#111",
      marginBottom: 8,
    },
  
    actionDesc: {
      fontSize: 14,
      lineHeight: 22,
      color: "#777",
    },
  
    arrow: {
      fontSize: 28,
      color: "#15b15a",
    },
  
    tipCard: {
      flexDirection: "row",
      backgroundColor: "#effaf4",
      borderRadius: 28,
      padding: 22,
      marginTop: 8,
    },
  
    tipIcon: {
      width: 54,
      height: 54,
      borderRadius: 27,
      backgroundColor: "#15b15a",
      justifyContent: "center",
      alignItems: "center",
      marginRight: 16,
    },
  
    tipEmoji: {
      fontSize: 24,
    },
  
    tipTitle: {
      fontSize: 17,
      fontWeight: "700",
      color: "#111",
      marginBottom: 8,
    },
  
    tipDesc: {
      fontSize: 14,
      lineHeight: 22,
      color: "#666",
    },
  });
  
  export default ScanScreen;