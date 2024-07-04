import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  bold: {
    fontWeight: "700",
  },
  price:{
    fontWeight: "400",
  },
  container: {
    borderBottomWidth: 0.75,
    borderColor: "grey",
    paddingVertical: 7,
    flex: 1,
  },
});

export default styles;
