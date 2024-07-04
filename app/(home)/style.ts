import { primary } from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: primary,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  headerText: {
    color: "white",
    fontSize: 18,
  },
  collapsible: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  collapsibleHeader: {
    flex: 1,
    backgroundColor: primary,
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
