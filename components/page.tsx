import { Fragment } from "react";
import {
  type StyleProp,
  StyleSheet,
  Text,
  View,
  type ViewStyle,
} from "react-native";
import type { AnimatedStyle } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Transition from "react-native-screen-transitions";
import { Header } from "./header";

interface PageProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  backIcon?: string;
  contentContainerStyle?: StyleProp<AnimatedStyle<StyleProp<ViewStyle>>>;
  scrollEnabled?: boolean;
  style?: StyleProp<ViewStyle>;
  horizontal?: boolean;
  testID?: string;
}

function PageComponent({
  children,
  title,
  description,
  backIcon,
  contentContainerStyle,
  style,
  scrollEnabled = true,
  horizontal = false,
  testID,
}: PageProps) {
  const { top } = useSafeAreaInsets();
  return (
    <Fragment>
      <Transition.ScrollView
        style={style}
        contentContainerStyle={[
          {
            padding: 24,
            gap: 36,
            paddingTop: top,
          },
          contentContainerStyle,
        ]}
        showsVerticalScrollIndicator={false}
        scrollEnabled={scrollEnabled}
        horizontal={horizontal}
        testID={testID}
      >
        <View style={styles.header}>
          <Header backIcon={backIcon} header={title} />

          <Text style={styles.description}>{description}</Text>
        </View>
        {children}
      </Transition.ScrollView>
    </Fragment>
  );
}

function Group({
  children,
  title,
  description,
}: {
  children?: React.ReactNode;
  title?: string;
  description?: string;
}) {
  return (
    <View style={styles.group}>
      <Text style={styles.titleSmall}>{title}</Text>
      {description && (
        <Text style={styles.descriptionSmall}>{description}</Text>
      )}
      {children}
    </View>
  );
}

const Page = Object.assign(PageComponent, { Group });

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 36,
  },
  header: {
    gap: 2,
  },

  description: {
    fontSize: 14,
    color: "gray",
    fontWeight: "500",
  },

  titleSmall: {
    fontSize: 20,
    fontWeight: "600",
  },
  descriptionSmall: {
    fontSize: 12,
    color: "gray",
    fontWeight: "500",
  },
  group: {
    gap: 4,
  },
});
