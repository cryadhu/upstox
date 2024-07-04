import Ionicons from "@expo/vector-icons/Ionicons";
import { PropsWithChildren, ReactNode, useState } from "react";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

import { ThemedView, ThemedViewProps } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";

export function Collapsible({
  children,
  header,
  ...rest
}: PropsWithChildren & ThemedViewProps & { header: ReactNode | undefined }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? "light";

  return (
    <ThemedView style={rest}>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}
      >
        {header}
        <Ionicons
          name={isOpen ? "chevron-down" : "chevron-forward-outline"}
          size={18}
          color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
          style={styles.icon}
        />
      </TouchableOpacity>
      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  content: {
    marginTop: 6,
    marginHorizontal: 16,
  },
  icon: {
    position: "absolute",
    right: 10,   
  },
});
