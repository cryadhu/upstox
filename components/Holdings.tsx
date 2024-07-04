import { HoldingProps } from "@/types/component/HoldingProps";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import HoldingItems from "./HoldingItems";
import { UserHolding } from "@/types/response/holdings/UserHolding";

const Holdings = (props: HoldingProps) => {
  const {
    payload: { data },
  } = props;

  const renderItem = ({
    item,
    index,
  }: {
    item: UserHolding;
    index: Number;
  }) => {
    return (
      <HoldingItems
        payload={item}
        isLast={index === (data?.userHolding?.length || 0) - 1}
      />
    );
  };

  return (
    <FlatList
      data={data?.userHolding || []}
      renderItem={renderItem}
      /* using index for now since, there is no unique id in the response */
      keyExtractor={(item, index)=> index.toString()}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});

export default Holdings;
