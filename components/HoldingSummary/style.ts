import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bold: {
    fontWeight: "700",
  },
  container: {
    borderBottomWidth: 0.75,
    borderColor: "grey",
    paddingVertical: 7,
    flex: 1,
  },
  profit: {
    marginTop: 20,
    marginBottom: 15,
  },
});

export default styles;
