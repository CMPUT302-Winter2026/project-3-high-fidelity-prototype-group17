# Project README

## Team Members (CCID)

- bhphan
- jcchang1
- zhexuan3
- shanker
- hailong5
- akarshan

## Installation and Execution Instructions

**Prerequisites & Limitations:**

- **macOS & Xcode Required:** This project uses SwiftUI wrappers and **will NOT work on Android**. You must have Xcode installed on macOS to run the app.
- **iOS 26+ Only:** The project only runs on an iOS 26 enabled simulator or a physical iPhone.

**Setup Steps:**

1. Clone the repository and navigate to the project folder.
2. Install dependencies by running:
   `npm ci`
3. Start the project on iOS by running:
   `npm run ios`

**Running on Simulator vs. Physical Device:**

- **Simulator:** To run on a simulator, follow this environment setup guide: https://docs.expo.dev/get-started/set-up-your-environment/?platform=ios&device=physical&mode=development-build&buildEnv=local
- **Physical Device (Recommended):** The app uses native modules (e.g., haptics) that will not function correctly on a simulator. To run the app fully on an actual iPhone, a paid Apple Developer account is required. Follow this guide to set it up: https://docs.expo.dev/get-started/set-up-your-environment/?platform=ios&device=simulated&mode=development-build

## Resources Consulted

**Documentation & Libraries:**

- Expo UI / SwiftUI Guide: https://docs.expo.dev/guides/expo-ui-swift-ui/
- React Native MMKV: https://github.com/mrousavy/react-native-mmkv
- Zustand Documentation: https://zustand.docs.pmnd.rs/learn/getting-started/introduction
- NLS: https://www.youtube.com/watch?v=EWZZ-qekCW0
- Reference Post: https://x.com/_iam_karthik/status/2026315389173723335
- router and transitions: https://github.com/eds2002/react-native-screen-transitions
- Graph view (skia): https://mintlify.wiki/shopify/react-native-skia/images/pictures#advanced-patterns

**AI Usage (Claude):**

- **Prompt 1:** "generate NLS and synonym word graph date for these cree words give me 5+ nodes and follow this schema [provided TypeScript schema for RawNode]"
- **Prompt 2:** "design a zustand store for making collections, give me schema along with functions"
