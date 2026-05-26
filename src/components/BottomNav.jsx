import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";

function BottomNav({ navigation, current }) {
  function isActive(name) {
    return current === name;
  }

  function iconColor(name) {
    return isActive(name) ? "#15b15a" : "#777";
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.item}
        onPress={() => navigation.navigate("Home")}
      >
        <View
          style={[
            styles.iconBox,
            isActive("Home") && styles.activeIconBox,
          ]}
        >
          <Text style={[styles.icon, { color: iconColor("Home") }]}>
            🏠
          </Text>
        </View>
        <Text style={[styles.label, isActive("Home") && styles.activeLabel]}>
          홈
        </Text>
      </Pressable>

      <Pressable
        style={styles.item}
        onPress={() => navigation.navigate("Scan")}
      >
        <View
          style={[
            styles.iconBox,
            isActive("Scan") && styles.activeIconBox,
          ]}
        >
          <Text style={[styles.icon, { color: iconColor("Scan") }]}>
            📷
          </Text>
        </View>
        <Text style={[styles.label, isActive("Scan") && styles.activeLabel]}>
          스캔
        </Text>
      </Pressable>

      <Pressable
        style={styles.item}
        onPress={() => navigation.navigate("Search")}
      >
        <View
          style={[
            styles.iconBox,
            isActive("Search") && styles.activeIconBox,
          ]}
        >
          <Text style={[styles.icon, { color: iconColor("Search") }]}>
            🔍
          </Text>
        </View>
        <Text style={[styles.label, isActive("Search") && styles.activeLabel]}>
          검색
        </Text>
      </Pressable>

      <Pressable
        style={styles.item}
        onPress={() => navigation.navigate("Settings")}
      >
        <View
          style={[
            styles.iconBox,
            isActive("Settings") && styles.activeIconBox,
          ]}
        >
          <Text style={[styles.icon, { color: iconColor("Settings") }]}>
            ⚙️
          </Text>
        </View>
        <Text
          style={[
            styles.label,
            isActive("Settings") && styles.activeLabel,
          ]}
        >
          설정
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    backgroundColor: "white",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 10,
  },

  item: {
    alignItems: "center",
  },

  iconBox: {
    width: 58,
    height: 40,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
  },

  activeIconBox: {
    backgroundColor: "#dff5e9",
  },

  icon: {
    fontSize: 22,
  },

  label: {
    marginTop: 4,
    fontSize: 12,
    color: "#777",
    fontWeight: "700",
  },

  activeLabel: {
    color: "#15b15a",
  },
});

export default BottomNav;