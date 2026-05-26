import {
  Pressable,
  Text,
  StyleSheet,
  View,
} from "react-native";

function ScanButton({ type, onPress }) {
  const isCamera = type === "camera";

  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
    >
      <View style={styles.iconBox}>
        <Text style={styles.icon}>
          {isCamera ? "📷" : "🖼️"}
        </Text>
      </View>

      <Text style={styles.label}>
        {isCamera ? "CAMERA" : "GALLERY"}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 180,
    backgroundColor: "white",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 6,
  },

  iconBox: {
    marginBottom: 16,
  },

  icon: {
    fontSize: 52,
  },

  label: {
    fontSize: 15,
    fontWeight: "700",
    color: "#15b15a",
    letterSpacing: 1,
  },
});

export default ScanButton;