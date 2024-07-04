import type { PropsWithChildren, ReactElement } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

import { ThemedView } from "@/components/ThemedView";

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  header: ReactElement;
  hederHeight?: number;
}>;

export default function ParallaxScrollView({
  children,
  header,
  hederHeight = HEADER_HEIGHT,
}: Props) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-hederHeight, 0, hederHeight],
            [-hederHeight / 2, 0, hederHeight * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-hederHeight, 0, hederHeight],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.View
          style={[
            styles.header,
            {
              height: hederHeight,
            },
            headerAnimatedStyle,
          ]}
        >
          {header}
        </Animated.View>
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    overflow: "hidden",
  },
  content: {
    flex: 1,
    padding: 16,
    overflow: "hidden",
  },
});
