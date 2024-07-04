import React, { useMemo } from "react";
import { View } from "react-native";

import { HoldingItemProps } from "@/types/component/HoldingItemProps";
import translate from "@/locale";
import { toFixed } from "@/utils/number";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import styles from "./style";

const HoldingItems = (props: HoldingItemProps) => {
  const { payload, isLast } = props;
  const { avgPrice, symbol, ltp, quantity } = payload || {};
  const currentValue = ltp * quantity;
  const investmentValue = avgPrice * quantity;
  const pl = currentValue - investmentValue;

  return (
    <ThemedView style={[styles.container, isLast && { borderWidth: 0 }]}>
      <View style={styles.row}>
        <ThemedText style={styles.bold}>{symbol}</ThemedText>
        <ThemedText>{`${translate("ltp")}: ₹${toFixed(ltp)}`}</ThemedText>
      </View>
      <View style={styles.row}>
        <ThemedText>{quantity}</ThemedText>
        <ThemedText>{`${translate("pl")}: ₹${toFixed(pl)}`}</ThemedText>
      </View>
    </ThemedView>
  );
};

export default HoldingItems;
