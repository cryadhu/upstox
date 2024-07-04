import { useMemo } from "react";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Holdings from "@/components/Holdings";
import HoldingSummary from "@/components/HoldingSummary";
import { toFixed } from "@/utils/number";
import { Collapsible } from "@/components/Collapsible";
import translate from "@/locale";
import styles from "./style";
import useGetHoldings from "@/hooks/useGetHoldings";
import Loader from "@/components/Loader";
import { View } from "react-native";
import Empty from "@/components/empty";
import withErrorBoundary from "@/hoc/withErrorBoundary";

const HomeScreen = () => {
  const { data, loading } = useGetHoldings();

  const summary = useMemo(() => {
    let currentValue = 0;
    let totalInvestment = 0;
    let totalProfitLoss = 0;
    let profitLoss = 0;
    if (data?.data?.userHolding) {
      data.data.userHolding.forEach((holding) => {
        currentValue += holding.ltp * holding.quantity;
        totalInvestment += holding.avgPrice * holding.quantity;
        totalProfitLoss += (holding.ltp - holding.avgPrice) * holding.quantity;
        profitLoss += (holding.close - holding.ltp) * holding.quantity;
      });
    }
    return {
      currentValue: toFixed(currentValue),
      totalInvestment: toFixed(totalInvestment),
      totalProfitLoss: toFixed(totalProfitLoss),
      profitLoss: toFixed(profitLoss),
    };
  }, [data]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <Loader />
      </View>
    );
  } else if (!loading && !data?.data?.userHolding) {
    return (
      <Empty
        title={translate("noData")}
        description={translate("noDataDescription")}
      />
    );
  }

  return (
    <>
      <ThemedView style={styles.header}>
        <ThemedText style={styles.headerText}>
          {translate("upstoxHolding")}
        </ThemedText>
      </ThemedView>
      <Holdings payload={data} />
      <Collapsible
        style={styles.collapsible}
        header={
          <ThemedView style={styles.collapsibleHeader}>
            <ThemedText style={styles.headerText}>
              {translate("summary")}
            </ThemedText>
          </ThemedView>
        }
      >
        <HoldingSummary payload={summary} />
      </Collapsible>
    </>
  );
};

export default withErrorBoundary(HomeScreen);
