import * as Haptics from "expo-haptics";

type CustomMilliseconds = number;
type HapticSequence = "o" | "O" | "." | ":" | "-" | "=" | CustomMilliseconds;

/**
 * Haptic sequence element types:
 * - 'o': Medium impact haptic feedback
 * - 'O': Heavy impact haptic feedback
 * - '.': Light impact haptic feedback
 * - ':': Soft impact haptic feedback
 * - '-': Wait for 0.1 second
 * - '=': Wait for 1 second
 * - number: Wait for the specified number of milliseconds
 */
export const hapticWithSequence = async (
  sequence: HapticSequence[],
  getIsCancelled?: () => boolean,
) => {
  const hapticMap = {
    o: () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium),
    O: () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy),
    ".": () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light),
    ":": () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft),
    "-": () => new Promise((resolve) => setTimeout(resolve, 100)),
    "=": () => new Promise((resolve) => setTimeout(resolve, 1000)),
  };
  if (getIsCancelled && getIsCancelled()) return;

  for (const char of sequence) {
    if (getIsCancelled && getIsCancelled()) break;

    if (typeof char === "number") {
      await new Promise((resolve) => setTimeout(resolve, char));
    } else {
      await hapticMap[char]?.();
    }
  }
};
