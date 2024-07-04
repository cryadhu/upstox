import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "./ThemedText";

const Empty = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <View style={styles.emptyRoot}>
      <View style={[styles.emptyContainer]}>
        <ThemedText style={styles.title}>{title}</ThemedText>
        <ThemedText style={[styles.title, styles.description]}>
          {description}
        </ThemedText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyRoot: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    color: "#636E72",
    marginTop: 26,
    textAlign: "center",
  },
  icon: {
    height: 60,
    width: 60,
  },
  description: {
    fontSize: 18,
    marginTop: 10,
  },
  emptyContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginHorizontal: 22,
  },
});

export default Empty;
