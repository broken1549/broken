import {
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

function BannerCard({ recipe }) {
  if (!recipe) return null;

  return (
    <View style={styles.bannerCard}>
      <Image
        source={{ uri: recipe.image }}
        style={styles.bannerImage}
      />

      <View style={styles.overlay}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            NEW
          </Text>
        </View>

        <Text style={styles.title}>
          {recipe.title}
        </Text>

        <Text style={styles.summary}>
          {recipe.summary
            ?.replace(/<[^>]*>/g, "")
            .slice(0, 80)}
          ...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bannerCard: {
    height: 260,
    borderRadius: 28,
    overflow: "hidden",
    marginBottom: 24,
    position: "relative",
  },

  bannerImage: {
    width: "100%",
    height: "100%",
  },

  overlay: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 20,
  },

  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#15b15a",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    marginBottom: 10,
  },

  badgeText: {
    color: "white",
    fontWeight: "700",
    fontSize: 12,
  },

  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 8,
  },

  summary: {
    color: "white",
    fontSize: 14,
    lineHeight: 20,
  },
});

export default BannerCard;