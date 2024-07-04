import { View } from "react-native";

import translate from "@/locale";
import { HoldingSummaryProps } from "@/types/component/HoldingSummaryProps";
import styles from "./style";
import { ThemedText } from "../ThemedText";

const HoldingSummary = (props: HoldingSummaryProps) => {
  const {
    payload: { currentValue, totalInvestment, totalProfitLoss, profitLoss },
  } = props;

  return (
    <>
      <View style={styles.row}>
        <ThemedText style={styles.bold}>
          {translate("overAllCurrentValue")}:
        </ThemedText>
        <ThemedText>{`₹${currentValue}`}</ThemedText>
      </View>
      <View style={styles.row}>
        <ThemedText style={styles.bold}>
          {translate("overAllTotalInvestment")}:
        </ThemedText>
        <ThemedText>{`₹${totalInvestment}`}</ThemedText>
      </View>
      <View style={styles.row}>
        <ThemedText style={styles.bold}>
          {translate("overAllTotalProfitLoss")}:
        </ThemedText>
        <ThemedText>{`₹${totalProfitLoss}`}</ThemedText>
      </View>
      <View style={[styles.row, styles.profit]}>
        <ThemedText style={styles.bold}>
          {translate("overAllProfitLoss")}:
        </ThemedText>
        <ThemedText>{`₹${profitLoss}`}</ThemedText>
      </View>
    </>
  );
};

export default HoldingSummary;
