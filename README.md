# README

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

* **Prompt 3 (Gemini):** "I need to write a README file based on an image of GitHub instructions. Here are my raw notes containing the team's CCIDs, the specific installation commands (`npm ci`, `npm run ios`), warnings about this being an iOS 26+ only Expo project that requires Xcode and a paid Apple Developer account for haptics, and a list of links and Claude prompts I used for the project. Please format all of this into a concise README structure, and output it in a raw code block so I can copy the Markdown directly.
  ccid of everyone on team

bhphan
jcchang1
zhexuan3
shanker
hailong5
akarshan

the project is an expo project with to install it run npm ci
then run npm run ios to run the project on ios

project only runs on ios 26 enabled simulator or iphone

add note that project uses swift ui wrappers AND WONT WORK ON ANDROID need xcode installed on macos to run the app in simulator, follow guide to run on simulator
https://docs.expo.dev/get-started/set-up-your-environment/?platform=ios&device=physical&mode=development-build&buildEnv=local

The app uses native modules that wont run on simulator for example haptics to run the app on an actual iphone a paid apple developer account is required, follow guide at

https://docs.expo.dev/get-started/set-up-your-environment/?platform=ios&device=simulated&mode=development-build

to run on actual iphone

resources used
https://x.com/_iam_karthik/status/2026315389173723335

https://docs.expo.dev/guides/expo-ui-swift-ui/

asked claude

"generate NLS and synonym word graph date for these cree words give me 5+ nodes and follow this schema

export type RawNode = {
id: string;
nls_key: string;
parentId?: string;
stem_label: string;
images: string;
synonyms: string[];
sentences: {
setence: string;
example: string;
}[];
width: number;
height: number;
children: string[];
word_conjugation: {
basic: {
labelKey: string;
valueKey: string;
isBold: boolean;
}[];
diminutive: {
titleKey: string;
items: {
labelKey: string;
valueKey: string;
isBold: boolean;
}[];
};
possession: {
titleKey: string;
columns: string[];
rows: {
labelKey: string;
valueKeys: string[];
}[];
};
};
};
"

"design a zustand store for making collections, give me schema along with functions"  
https://github.com/mrousavy/react-native-mmkv
https://zustand.docs.pmnd.rs/learn/getting-started/introduction
now write the readme give me output in string file if you format in markdown the your message window will autoformat it and i wont see markdown
keep the readme not too big

"
