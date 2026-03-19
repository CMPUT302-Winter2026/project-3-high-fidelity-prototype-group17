import { PressableScale } from "pressto";
import type React from "react";
import { memo } from "react";
import { StyleSheet, Text, type ViewStyle } from "react-native";

type ButtonProps = {
  children?: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
  disabled?: boolean;

  variant?: "solid" | "ghost";
};

const Button = ({
  children,
  onPress,
  style,
  disabled,
  variant = "solid",
}: ButtonProps) => {
  const animatedStyle = {
    opacity: disabled ? 0.5 : 1,
  };

  return (
    <PressableScale
      onPress={onPress}
      style={[
        styles.base,
        variant === "solid" && styles.solid,
        variant === "ghost" && styles.ghost,
        style,
        animatedStyle,
      ]}
    >
      <Text
        style={[
          styles.textBase,
          variant === "solid" && styles.textSolid,
          variant === "ghost" && styles.textGhost,
        ]}
      >
        {children}
      </Text>
    </PressableScale>
  );
};

export default memo(Button);

const styles = StyleSheet.create({
  base: {
    borderRadius: 999,
    paddingHorizontal: 20,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  solid: {
    backgroundColor: "black",
  },
  ghost: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.1)",
  },
  textBase: {
    fontWeight: "600",
  },
  textSolid: {
    color: "white",
  },
  textGhost: {
    color: "black",
  },
});
