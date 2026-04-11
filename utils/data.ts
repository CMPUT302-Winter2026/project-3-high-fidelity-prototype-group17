import { RawNode } from "./types";

export const ROOT_IDS = [
  "acimosis",
  "maskwa",
  "wâpos",
  "pisiskiw",
  "nîpin",
  "mîskwamiy",
];
export const RAW_NODES: RawNode[] = [
  // MARK: DOG
  {
    id: "acimosis",
    images:
      "https://loremflickr.com/cache/resized/65535_51849360836_95507af622_b_800_600_nofilter.jpg",
    nls_key: "WORD_DOG_ROOT",
    stem_label: "NA-1",
    synonyms: ["pahkwêsikan", "asikan", "kaskitêwatim"],
    sentences: [
      {
        setence: "pup, puppy",
        example: "acimosis mêtowêw. (The puppy is playing.)",
      },
      {
        setence: "small dog",
        example: "niwâpamâw acimosis. (I see a small dog.)",
      },
      {
        setence: "a pup or a puppy",
        example: "nitacimosisim miyosiw. (My puppy is cute.)",
      },
      {
        setence: "a newborn dog",
        example: "acimosis nipâw. (The newborn dog is sleeping.)",
      },
    ],
    width: 120,
    height: 40,
    children: [
      "nâpêwatim",
      "nôcisimwatim",
      "apisâtim",
      "mahkâtim",
      "kaskitêwatim",
    ],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_DOG_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_DOG_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_DOG_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_DOG_POSS_1S_SG",
              "WORD_DOG_POSS_1S_PL",
              "WORD_DOG_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_DOG_POSS_2S_SG",
              "WORD_DOG_POSS_2S_PL",
              "WORD_DOG_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_DOG_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_DOG_POSS_1P_SG",
              "WORD_DOG_POSS_1P_PL",
              "WORD_DOG_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_DOG_POSS_21P_SG",
              "WORD_DOG_POSS_21P_PL",
              "WORD_DOG_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_DOG_POSS_2P_SG",
              "WORD_DOG_POSS_2P_PL",
              "WORD_DOG_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_DOG_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_DOG_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  {
    id: "nâpêwatim",
    images:
      "https://loremflickr.com/cache/resized/3414_3261021368_ac0546bbc6_b_800_600_nofilter.jpg",
    nls_key: "WORD_MALE_DOG_ROOT",
    stem_label: "NA-1",
    synonyms: [],
    sentences: [
      {
        setence: "male dog",
        example: "nâpêwatim pimohtêw. (The male dog is walking.)",
      },
    ],
    width: 96,
    height: 32,
    children: [],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_MALE_DOG_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_MALE_DOG_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_MALE_DOG_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_MALE_DOG_POSS_1S_SG",
              "WORD_MALE_DOG_POSS_1S_PL",
              "WORD_MALE_DOG_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_MALE_DOG_POSS_2S_SG",
              "WORD_MALE_DOG_POSS_2S_PL",
              "WORD_MALE_DOG_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_MALE_DOG_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_MALE_DOG_POSS_1P_SG",
              "WORD_MALE_DOG_POSS_1P_PL",
              "WORD_MALE_DOG_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_MALE_DOG_POSS_21P_SG",
              "WORD_MALE_DOG_POSS_21P_PL",
              "WORD_MALE_DOG_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_MALE_DOG_POSS_2P_SG",
              "WORD_MALE_DOG_POSS_2P_PL",
              "WORD_MALE_DOG_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_MALE_DOG_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_MALE_DOG_POSS_4_OBV"],
          },
        ],
      },
    },
  },
  {
    id: "nôcisimwatim",
    images: "https://picsum.photos/seed/nocisimwatim/3000/2000",
    nls_key: "WORD_FEMALE_DOG_ROOT",
    stem_label: "NA-1",
    synonyms: ["iskwêwatim"],
    sentences: [
      {
        setence: "female dog",
        example: "nôcisimwatim nipâw. (The female dog is sleeping.)",
      },
    ],
    width: 96,
    height: 32,
    children: [],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_FEMALE_DOG_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_FEMALE_DOG_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_FEMALE_DOG_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_FEMALE_DOG_POSS_1S_SG",
              "WORD_FEMALE_DOG_POSS_1S_PL",
              "WORD_FEMALE_DOG_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_FEMALE_DOG_POSS_2S_SG",
              "WORD_FEMALE_DOG_POSS_2S_PL",
              "WORD_FEMALE_DOG_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_FEMALE_DOG_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_FEMALE_DOG_POSS_1P_SG",
              "WORD_FEMALE_DOG_POSS_1P_PL",
              "WORD_FEMALE_DOG_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_FEMALE_DOG_POSS_21P_SG",
              "WORD_FEMALE_DOG_POSS_21P_PL",
              "WORD_FEMALE_DOG_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_FEMALE_DOG_POSS_2P_SG",
              "WORD_FEMALE_DOG_POSS_2P_PL",
              "WORD_FEMALE_DOG_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_FEMALE_DOG_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_FEMALE_DOG_POSS_4_OBV"],
          },
        ],
      },
    },
  },
  {
    id: "mahkâtim",
    images: "https://loremflickr.com/800/600/large-dog",
    nls_key: "WORD_LARGE_DOG_ROOT",
    stem_label: "NA-1",
    synonyms: ["misatim"],
    sentences: [
      {
        setence: "large dog",
        example: "niwâpamâw mahkâtim. (I see a large dog.)",
      },
    ],
    width: 96,
    height: 32,
    children: [],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_LARGE_DOG_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_LARGE_DOG_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_LARGE_DOG_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_LARGE_DOG_POSS_1S_SG",
              "WORD_LARGE_DOG_POSS_1S_PL",
              "WORD_LARGE_DOG_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_LARGE_DOG_POSS_2S_SG",
              "WORD_LARGE_DOG_POSS_2S_PL",
              "WORD_LARGE_DOG_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_LARGE_DOG_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_LARGE_DOG_POSS_1P_SG",
              "WORD_LARGE_DOG_POSS_1P_PL",
              "WORD_LARGE_DOG_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_LARGE_DOG_POSS_21P_SG",
              "WORD_LARGE_DOG_POSS_21P_PL",
              "WORD_LARGE_DOG_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_LARGE_DOG_POSS_2P_SG",
              "WORD_LARGE_DOG_POSS_2P_PL",
              "WORD_LARGE_DOG_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_LARGE_DOG_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_LARGE_DOG_POSS_4_OBV"],
          },
        ],
      },
    },
  },
  {
    id: "apisâtim",
    images: "https://loremflickr.com/800/600/small-dog",
    nls_key: "WORD_SMALL_DOG_ROOT",
    stem_label: "NA-1",
    synonyms: ["acimosis"],
    sentences: [
      {
        setence: "small dog",
        example: "apisâtim mêtowêw. (The small dog is playing.)",
      },
    ],
    width: 96,
    height: 32,
    children: [],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_SMALL_DOG_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_SMALL_DOG_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_SMALL_DOG_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_SMALL_DOG_POSS_1S_SG",
              "WORD_SMALL_DOG_POSS_1S_PL",
              "WORD_SMALL_DOG_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_SMALL_DOG_POSS_2S_SG",
              "WORD_SMALL_DOG_POSS_2S_PL",
              "WORD_SMALL_DOG_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_SMALL_DOG_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_SMALL_DOG_POSS_1P_SG",
              "WORD_SMALL_DOG_POSS_1P_PL",
              "WORD_SMALL_DOG_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_SMALL_DOG_POSS_21P_SG",
              "WORD_SMALL_DOG_POSS_21P_PL",
              "WORD_SMALL_DOG_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_SMALL_DOG_POSS_2P_SG",
              "WORD_SMALL_DOG_POSS_2P_PL",
              "WORD_SMALL_DOG_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_SMALL_DOG_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_SMALL_DOG_POSS_4_OBV"],
          },
        ],
      },
    },
  },
  {
    id: "kaskitêwatim",
    images: "https://loremflickr.com/800/600/black-dog",
    nls_key: "WORD_BLACK_DOG_ROOT",
    stem_label: "NA-1",
    synonyms: [],
    sentences: [
      {
        setence: "black dog",
        example: "kaskitêwatim pimipahtâw. (The black dog is running.)",
      },
    ],
    width: 96,
    height: 32,
    children: [],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_BLACK_DOG_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_BLACK_DOG_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_BLACK_DOG_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_BLACK_DOG_POSS_1S_SG",
              "WORD_BLACK_DOG_POSS_1S_PL",
              "WORD_BLACK_DOG_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_BLACK_DOG_POSS_2S_SG",
              "WORD_BLACK_DOG_POSS_2S_PL",
              "WORD_BLACK_DOG_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_BLACK_DOG_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_BLACK_DOG_POSS_1P_SG",
              "WORD_BLACK_DOG_POSS_1P_PL",
              "WORD_BLACK_DOG_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_BLACK_DOG_POSS_21P_SG",
              "WORD_BLACK_DOG_POSS_21P_PL",
              "WORD_BLACK_DOG_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_BLACK_DOG_POSS_2P_SG",
              "WORD_BLACK_DOG_POSS_2P_PL",
              "WORD_BLACK_DOG_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_BLACK_DOG_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_BLACK_DOG_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  // MARK: BEAR
  {
    id: "maskwa",
    images: "https://loremflickr.com/800/600/bear1",
    nls_key: "WORD_BEAR_ROOT",
    stem_label: "NA-1",
    synonyms: ["okimâwmaskwa", "misimaskwa"],
    sentences: [
      { setence: "bear", example: "maskwa nipâw. (The bear is sleeping.)" },
      { setence: "a bear", example: "niwâpamâw maskwa. (I see a bear.)" },
      { setence: "the bear", example: "maskwa mîciw. (The bear is eating.)" },
      {
        setence: "a large bear",
        example: "maskwa matwêhkwâmiw. (The bear is growling.)",
      },
    ],
    width: 120,
    height: 40,
    children: ["nâpêmaskwa", "iskwêmaskwa", "maskwas"],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_BEAR_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_BEAR_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_BEAR_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [
          { labelKey: "SG", valueKey: "WORD_BEAR_DIM_SG", isBold: false },
        ],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_BEAR_POSS_1S_SG",
              "WORD_BEAR_POSS_1S_PL",
              "WORD_BEAR_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_BEAR_POSS_2S_SG",
              "WORD_BEAR_POSS_2S_PL",
              "WORD_BEAR_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_BEAR_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_BEAR_POSS_1P_SG",
              "WORD_BEAR_POSS_1P_PL",
              "WORD_BEAR_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_BEAR_POSS_21P_SG",
              "WORD_BEAR_POSS_21P_PL",
              "WORD_BEAR_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_BEAR_POSS_2P_SG",
              "WORD_BEAR_POSS_2P_PL",
              "WORD_BEAR_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_BEAR_POSS_3P_OBV"],
          },
          { labelKey: "POSS_4", valueKeys: ["—", "—", "WORD_BEAR_POSS_4_OBV"] },
        ],
      },
    },
  },

  // ── LEVEL 2 ─────────────────────────────────────────────────────────────

  {
    id: "nâpêmaskwa",
    images: "https://loremflickr.com/800/600/male-bear",
    nls_key: "WORD_MALE_BEAR_ROOT",
    stem_label: "NA-1",
    synonyms: [],
    sentences: [
      {
        setence: "male bear",
        example: "nâpêmaskwa pimohtêw. (The male bear is walking.)",
      },
    ],
    width: 96,
    height: 32,
    children: ["misimaskwa", "kaskitêwmaskwa"],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_MALE_BEAR_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_MALE_BEAR_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_MALE_BEAR_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_MALE_BEAR_POSS_1S_SG",
              "WORD_MALE_BEAR_POSS_1S_PL",
              "WORD_MALE_BEAR_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_MALE_BEAR_POSS_2S_SG",
              "WORD_MALE_BEAR_POSS_2S_PL",
              "WORD_MALE_BEAR_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_MALE_BEAR_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_MALE_BEAR_POSS_1P_SG",
              "WORD_MALE_BEAR_POSS_1P_PL",
              "WORD_MALE_BEAR_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_MALE_BEAR_POSS_21P_SG",
              "WORD_MALE_BEAR_POSS_21P_PL",
              "WORD_MALE_BEAR_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_MALE_BEAR_POSS_2P_SG",
              "WORD_MALE_BEAR_POSS_2P_PL",
              "WORD_MALE_BEAR_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_MALE_BEAR_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_MALE_BEAR_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  {
    id: "iskwêmaskwa",
    images: "https://loremflickr.com/800/600/female-bear",
    nls_key: "WORD_FEMALE_BEAR_ROOT",
    stem_label: "NA-1",
    synonyms: [],
    sentences: [
      {
        setence: "female bear",
        example:
          "iskwêmaskwa otâkosîhk wîkiw. (The female bear lives here since yesterday.)",
      },
    ],
    width: 96,
    height: 32,
    children: ["wâpimaskwa"],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_FEMALE_BEAR_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_FEMALE_BEAR_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_FEMALE_BEAR_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_FEMALE_BEAR_POSS_1S_SG",
              "WORD_FEMALE_BEAR_POSS_1S_PL",
              "WORD_FEMALE_BEAR_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_FEMALE_BEAR_POSS_2S_SG",
              "WORD_FEMALE_BEAR_POSS_2S_PL",
              "WORD_FEMALE_BEAR_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_FEMALE_BEAR_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_FEMALE_BEAR_POSS_1P_SG",
              "WORD_FEMALE_BEAR_POSS_1P_PL",
              "WORD_FEMALE_BEAR_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_FEMALE_BEAR_POSS_21P_SG",
              "WORD_FEMALE_BEAR_POSS_21P_PL",
              "WORD_FEMALE_BEAR_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_FEMALE_BEAR_POSS_2P_SG",
              "WORD_FEMALE_BEAR_POSS_2P_PL",
              "WORD_FEMALE_BEAR_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_FEMALE_BEAR_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_FEMALE_BEAR_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  {
    id: "maskwas",
    images: "https://loremflickr.com/800/600/bear-cub",
    nls_key: "WORD_BEAR_CUB_ROOT",
    stem_label: "NA-1",
    synonyms: ["apisimaskwas"],
    sentences: [
      {
        setence: "bear cub",
        example: "maskwas mêtowêw. (The bear cub is playing.)",
      },
    ],
    width: 96,
    height: 32,
    children: ["apisimaskwas"],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_BEAR_CUB_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_BEAR_CUB_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_BEAR_CUB_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [
          { labelKey: "SG", valueKey: "WORD_BEAR_CUB_DIM_SG", isBold: false },
        ],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_BEAR_CUB_POSS_1S_SG",
              "WORD_BEAR_CUB_POSS_1S_PL",
              "WORD_BEAR_CUB_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_BEAR_CUB_POSS_2S_SG",
              "WORD_BEAR_CUB_POSS_2S_PL",
              "WORD_BEAR_CUB_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_BEAR_CUB_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_BEAR_CUB_POSS_1P_SG",
              "WORD_BEAR_CUB_POSS_1P_PL",
              "WORD_BEAR_CUB_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_BEAR_CUB_POSS_21P_SG",
              "WORD_BEAR_CUB_POSS_21P_PL",
              "WORD_BEAR_CUB_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_BEAR_CUB_POSS_2P_SG",
              "WORD_BEAR_CUB_POSS_2P_PL",
              "WORD_BEAR_CUB_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_BEAR_CUB_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_BEAR_CUB_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  // ── LEVEL 3 ─────────────────────────────────────────────────────────────

  {
    id: "misimaskwa",
    images: "https://loremflickr.com/800/600/large-bear",
    nls_key: "WORD_LARGE_BEAR_ROOT",
    stem_label: "NA-1",
    synonyms: [],
    sentences: [
      {
        setence: "large bear",
        example: "niwâpamâw misimaskwa. (I see a large bear.)",
      },
    ],
    width: 96,
    height: 32,
    children: [],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_LARGE_BEAR_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_LARGE_BEAR_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_LARGE_BEAR_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_LARGE_BEAR_POSS_1S_SG",
              "WORD_LARGE_BEAR_POSS_1S_PL",
              "WORD_LARGE_BEAR_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_LARGE_BEAR_POSS_2S_SG",
              "WORD_LARGE_BEAR_POSS_2S_PL",
              "WORD_LARGE_BEAR_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_LARGE_BEAR_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_LARGE_BEAR_POSS_1P_SG",
              "WORD_LARGE_BEAR_POSS_1P_PL",
              "WORD_LARGE_BEAR_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_LARGE_BEAR_POSS_21P_SG",
              "WORD_LARGE_BEAR_POSS_21P_PL",
              "WORD_LARGE_BEAR_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_LARGE_BEAR_POSS_2P_SG",
              "WORD_LARGE_BEAR_POSS_2P_PL",
              "WORD_LARGE_BEAR_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_LARGE_BEAR_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_LARGE_BEAR_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  {
    id: "kaskitêwmaskwa",
    images: "https://loremflickr.com/800/600/black-bear",
    nls_key: "WORD_BLACK_BEAR_ROOT",
    stem_label: "NA-1",
    synonyms: [],
    sentences: [
      {
        setence: "black bear",
        example: "kaskitêwmaskwa pimipahtâw. (The black bear is running.)",
      },
    ],
    width: 96,
    height: 32,
    children: ["maskwacihciy", "maskwakay"],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_BLACK_BEAR_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_BLACK_BEAR_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_BLACK_BEAR_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_BLACK_BEAR_POSS_1S_SG",
              "WORD_BLACK_BEAR_POSS_1S_PL",
              "WORD_BLACK_BEAR_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_BLACK_BEAR_POSS_2S_SG",
              "WORD_BLACK_BEAR_POSS_2S_PL",
              "WORD_BLACK_BEAR_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_BLACK_BEAR_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_BLACK_BEAR_POSS_1P_SG",
              "WORD_BLACK_BEAR_POSS_1P_PL",
              "WORD_BLACK_BEAR_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_BLACK_BEAR_POSS_21P_SG",
              "WORD_BLACK_BEAR_POSS_21P_PL",
              "WORD_BLACK_BEAR_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_BLACK_BEAR_POSS_2P_SG",
              "WORD_BLACK_BEAR_POSS_2P_PL",
              "WORD_BLACK_BEAR_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_BLACK_BEAR_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_BLACK_BEAR_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  {
    id: "wâpimaskwa",
    images: "https://loremflickr.com/800/600/white-bear",
    nls_key: "WORD_WHITE_BEAR_ROOT",
    stem_label: "NA-1",
    synonyms: [],
    sentences: [
      {
        setence: "white/grey bear",
        example: "niwâpamâw wâpimaskwa. (I see a white bear.)",
      },
    ],
    width: 96,
    height: 32,
    children: ["maskwatimiy", "maskwamêhkwân"],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_WHITE_BEAR_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_WHITE_BEAR_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_WHITE_BEAR_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_WHITE_BEAR_POSS_1S_SG",
              "WORD_WHITE_BEAR_POSS_1S_PL",
              "WORD_WHITE_BEAR_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_WHITE_BEAR_POSS_2S_SG",
              "WORD_WHITE_BEAR_POSS_2S_PL",
              "WORD_WHITE_BEAR_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_WHITE_BEAR_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_WHITE_BEAR_POSS_1P_SG",
              "WORD_WHITE_BEAR_POSS_1P_PL",
              "WORD_WHITE_BEAR_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_WHITE_BEAR_POSS_21P_SG",
              "WORD_WHITE_BEAR_POSS_21P_PL",
              "WORD_WHITE_BEAR_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_WHITE_BEAR_POSS_2P_SG",
              "WORD_WHITE_BEAR_POSS_2P_PL",
              "WORD_WHITE_BEAR_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_WHITE_BEAR_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_WHITE_BEAR_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  {
    id: "apisimaskwas",
    images: "https://loremflickr.com/800/600/tiny-bear-cub",
    nls_key: "WORD_TINY_CUB_ROOT",
    stem_label: "NA-1",
    synonyms: [],
    sentences: [
      {
        setence: "tiny bear cub",
        example: "apisimaskwas nipâw. (The tiny bear cub is sleeping.)",
      },
    ],
    width: 96,
    height: 32,
    children: [],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_TINY_CUB_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_TINY_CUB_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_TINY_CUB_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_TINY_CUB_POSS_1S_SG",
              "WORD_TINY_CUB_POSS_1S_PL",
              "WORD_TINY_CUB_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_TINY_CUB_POSS_2S_SG",
              "WORD_TINY_CUB_POSS_2S_PL",
              "WORD_TINY_CUB_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_TINY_CUB_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_TINY_CUB_POSS_1P_SG",
              "WORD_TINY_CUB_POSS_1P_PL",
              "WORD_TINY_CUB_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_TINY_CUB_POSS_21P_SG",
              "WORD_TINY_CUB_POSS_21P_PL",
              "WORD_TINY_CUB_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_TINY_CUB_POSS_2P_SG",
              "WORD_TINY_CUB_POSS_2P_PL",
              "WORD_TINY_CUB_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_TINY_CUB_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_TINY_CUB_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  // ── LEVEL 4 ─────────────────────────────────────────────────────────────

  {
    id: "maskwacihciy",
    images: "https://loremflickr.com/800/600/bear-paw",
    nls_key: "WORD_BEAR_PAW_ROOT",
    stem_label: "NA-1",
    synonyms: [],
    sentences: [
      {
        setence: "bear paw",
        example: "niwâpamâw maskwacihciy. (I see a bear paw.)",
      },
    ],
    width: 96,
    height: 32,
    children: [],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_BEAR_PAW_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_BEAR_PAW_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_BEAR_PAW_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_BEAR_PAW_POSS_1S_SG",
              "WORD_BEAR_PAW_POSS_1S_PL",
              "WORD_BEAR_PAW_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_BEAR_PAW_POSS_2S_SG",
              "WORD_BEAR_PAW_POSS_2S_PL",
              "WORD_BEAR_PAW_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_BEAR_PAW_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_BEAR_PAW_POSS_1P_SG",
              "WORD_BEAR_PAW_POSS_1P_PL",
              "WORD_BEAR_PAW_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_BEAR_PAW_POSS_21P_SG",
              "WORD_BEAR_PAW_POSS_21P_PL",
              "WORD_BEAR_PAW_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_BEAR_PAW_POSS_2P_SG",
              "WORD_BEAR_PAW_POSS_2P_PL",
              "WORD_BEAR_PAW_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_BEAR_PAW_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_BEAR_PAW_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  {
    id: "maskwakay",
    images: "https://loremflickr.com/800/600/bearskin",
    nls_key: "WORD_BEAR_HIDE_ROOT",
    stem_label: "NI-1",
    synonyms: [],
    sentences: [
      {
        setence: "bearskin / bear hide",
        example: "niwâpamâw maskwakay. (I see a bearskin.)",
      },
    ],
    width: 96,
    height: 32,
    children: [],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_BEAR_HIDE_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_BEAR_HIDE_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_BEAR_HIDE_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_BEAR_HIDE_POSS_1S_SG",
              "WORD_BEAR_HIDE_POSS_1S_PL",
              "WORD_BEAR_HIDE_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_BEAR_HIDE_POSS_2S_SG",
              "WORD_BEAR_HIDE_POSS_2S_PL",
              "WORD_BEAR_HIDE_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_BEAR_HIDE_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_BEAR_HIDE_POSS_1P_SG",
              "WORD_BEAR_HIDE_POSS_1P_PL",
              "WORD_BEAR_HIDE_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_BEAR_HIDE_POSS_21P_SG",
              "WORD_BEAR_HIDE_POSS_21P_PL",
              "WORD_BEAR_HIDE_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_BEAR_HIDE_POSS_2P_SG",
              "WORD_BEAR_HIDE_POSS_2P_PL",
              "WORD_BEAR_HIDE_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_BEAR_HIDE_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_BEAR_HIDE_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  {
    id: "maskwatimiy",
    images: "https://loremflickr.com/800/600/bear-den",
    nls_key: "WORD_BEAR_DEN_ROOT",
    stem_label: "NI-1",
    synonyms: [],
    sentences: [
      {
        setence: "bear den",
        example:
          "maskwatimiy tâpiskôc maskwa wîkiw. (The bear den is where the bear lives.)",
      },
    ],
    width: 96,
    height: 32,
    children: [],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_BEAR_DEN_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_BEAR_DEN_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_BEAR_DEN_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_BEAR_DEN_POSS_1S_SG",
              "WORD_BEAR_DEN_POSS_1S_PL",
              "WORD_BEAR_DEN_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_BEAR_DEN_POSS_2S_SG",
              "WORD_BEAR_DEN_POSS_2S_PL",
              "WORD_BEAR_DEN_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_BEAR_DEN_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_BEAR_DEN_POSS_1P_SG",
              "WORD_BEAR_DEN_POSS_1P_PL",
              "WORD_BEAR_DEN_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_BEAR_DEN_POSS_21P_SG",
              "WORD_BEAR_DEN_POSS_21P_PL",
              "WORD_BEAR_DEN_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_BEAR_DEN_POSS_2P_SG",
              "WORD_BEAR_DEN_POSS_2P_PL",
              "WORD_BEAR_DEN_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_BEAR_DEN_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_BEAR_DEN_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  {
    id: "maskwamêhkwân",
    images: "https://loremflickr.com/800/600/bear-foot-track",
    nls_key: "WORD_BEAR_TRACK_ROOT",
    stem_label: "NI-1",
    synonyms: [],
    sentences: [
      {
        setence: "bear track",
        example: "niwâpamâw maskwamêhkwân. (I see a bear track.)",
      },
    ],
    width: 96,
    height: 32,
    children: [],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_BEAR_TRACK_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_BEAR_TRACK_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_BEAR_TRACK_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_BEAR_TRACK_POSS_1S_SG",
              "WORD_BEAR_TRACK_POSS_1S_PL",
              "WORD_BEAR_TRACK_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_BEAR_TRACK_POSS_2S_SG",
              "WORD_BEAR_TRACK_POSS_2S_PL",
              "WORD_BEAR_TRACK_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_BEAR_TRACK_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_BEAR_TRACK_POSS_1P_SG",
              "WORD_BEAR_TRACK_POSS_1P_PL",
              "WORD_BEAR_TRACK_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_BEAR_TRACK_POSS_21P_SG",
              "WORD_BEAR_TRACK_POSS_21P_PL",
              "WORD_BEAR_TRACK_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_BEAR_TRACK_POSS_2P_SG",
              "WORD_BEAR_TRACK_POSS_2P_PL",
              "WORD_BEAR_TRACK_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_BEAR_TRACK_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_BEAR_TRACK_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  // MARK: RABBIT
  {
    id: "wâpos",
    images: "https://loremflickr.com/800/600/rabbit",
    nls_key: "WORD_RABBIT_ROOT",
    stem_label: "NA-1",
    synonyms: ["misiwâpos"],
    sentences: [
      {
        setence: "rabbit",
        example: "wâpos pimohtêw. (The rabbit is walking.)",
      },
      { setence: "a rabbit", example: "niwâpamâw wâpos. (I see a rabbit.)" },
      {
        setence: "the rabbit",
        example: "wâpos mîciw. (The rabbit is eating.)",
      },
      {
        setence: "a snowshoe hare",
        example: "wâpos sîpîhk ayâw. (The rabbit is by the river.)",
      },
    ],
    width: 120,
    height: 40,
    children: ["nâpêwâpos", "iskwêwâpos", "wâposis"],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_RABBIT_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_RABBIT_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_RABBIT_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [
          { labelKey: "SG", valueKey: "WORD_RABBIT_DIM_SG", isBold: false },
        ],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_RABBIT_POSS_1S_SG",
              "WORD_RABBIT_POSS_1S_PL",
              "WORD_RABBIT_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_RABBIT_POSS_2S_SG",
              "WORD_RABBIT_POSS_2S_PL",
              "WORD_RABBIT_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_RABBIT_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_RABBIT_POSS_1P_SG",
              "WORD_RABBIT_POSS_1P_PL",
              "WORD_RABBIT_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_RABBIT_POSS_21P_SG",
              "WORD_RABBIT_POSS_21P_PL",
              "WORD_RABBIT_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_RABBIT_POSS_2P_SG",
              "WORD_RABBIT_POSS_2P_PL",
              "WORD_RABBIT_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_RABBIT_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_RABBIT_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  // ── LEVEL 2 ─────────────────────────────────────────────────────────────

  {
    id: "nâpêwâpos",
    images: "https://loremflickr.com/800/600/male-rabbit",
    nls_key: "WORD_MALE_RABBIT_ROOT",
    stem_label: "NA-1",
    synonyms: [],
    sentences: [
      {
        setence: "male rabbit",
        example: "nâpêwâpos pimohtêw. (The male rabbit is walking.)",
      },
    ],
    width: 96,
    height: 32,
    children: ["misiwâpos", "kaskitêwâpos"],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_MALE_RABBIT_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_MALE_RABBIT_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_MALE_RABBIT_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_MALE_RABBIT_POSS_1S_SG",
              "WORD_MALE_RABBIT_POSS_1S_PL",
              "WORD_MALE_RABBIT_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_MALE_RABBIT_POSS_2S_SG",
              "WORD_MALE_RABBIT_POSS_2S_PL",
              "WORD_MALE_RABBIT_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_MALE_RABBIT_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_MALE_RABBIT_POSS_1P_SG",
              "WORD_MALE_RABBIT_POSS_1P_PL",
              "WORD_MALE_RABBIT_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_MALE_RABBIT_POSS_21P_SG",
              "WORD_MALE_RABBIT_POSS_21P_PL",
              "WORD_MALE_RABBIT_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_MALE_RABBIT_POSS_2P_SG",
              "WORD_MALE_RABBIT_POSS_2P_PL",
              "WORD_MALE_RABBIT_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_MALE_RABBIT_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_MALE_RABBIT_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  {
    id: "iskwêwâpos",
    images: "https://loremflickr.com/800/600/female-rabbit",
    nls_key: "WORD_FEMALE_RABBIT_ROOT",
    stem_label: "NA-1",
    synonyms: [],
    sentences: [
      {
        setence: "female rabbit",
        example:
          "iskwêwâpos wâskahikanihk ayâw. (The female rabbit is at the house.)",
      },
    ],
    width: 96,
    height: 32,
    children: ["wâpiskwâpos"],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_FEMALE_RABBIT_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_FEMALE_RABBIT_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_FEMALE_RABBIT_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_FEMALE_RABBIT_POSS_1S_SG",
              "WORD_FEMALE_RABBIT_POSS_1S_PL",
              "WORD_FEMALE_RABBIT_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_FEMALE_RABBIT_POSS_2S_SG",
              "WORD_FEMALE_RABBIT_POSS_2S_PL",
              "WORD_FEMALE_RABBIT_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_FEMALE_RABBIT_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_FEMALE_RABBIT_POSS_1P_SG",
              "WORD_FEMALE_RABBIT_POSS_1P_PL",
              "WORD_FEMALE_RABBIT_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_FEMALE_RABBIT_POSS_21P_SG",
              "WORD_FEMALE_RABBIT_POSS_21P_PL",
              "WORD_FEMALE_RABBIT_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_FEMALE_RABBIT_POSS_2P_SG",
              "WORD_FEMALE_RABBIT_POSS_2P_PL",
              "WORD_FEMALE_RABBIT_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_FEMALE_RABBIT_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_FEMALE_RABBIT_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  {
    id: "wâposis",
    images: "https://loremflickr.com/800/600/rabbit-kit",
    nls_key: "WORD_RABBIT_KIT_ROOT",
    stem_label: "NA-1",
    synonyms: ["apisiwâposis"],
    sentences: [
      {
        setence: "rabbit kit",
        example: "wâposis mêtowêw. (The rabbit kit is playing.)",
      },
    ],
    width: 96,
    height: 32,
    children: ["apisiwâposis"],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_RABBIT_KIT_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_RABBIT_KIT_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_RABBIT_KIT_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [
          { labelKey: "SG", valueKey: "WORD_RABBIT_KIT_DIM_SG", isBold: false },
        ],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_RABBIT_KIT_POSS_1S_SG",
              "WORD_RABBIT_KIT_POSS_1S_PL",
              "WORD_RABBIT_KIT_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_RABBIT_KIT_POSS_2S_SG",
              "WORD_RABBIT_KIT_POSS_2S_PL",
              "WORD_RABBIT_KIT_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_RABBIT_KIT_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_RABBIT_KIT_POSS_1P_SG",
              "WORD_RABBIT_KIT_POSS_1P_PL",
              "WORD_RABBIT_KIT_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_RABBIT_KIT_POSS_21P_SG",
              "WORD_RABBIT_KIT_POSS_21P_PL",
              "WORD_RABBIT_KIT_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_RABBIT_KIT_POSS_2P_SG",
              "WORD_RABBIT_KIT_POSS_2P_PL",
              "WORD_RABBIT_KIT_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_RABBIT_KIT_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_RABBIT_KIT_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  // ── LEVEL 3 ─────────────────────────────────────────────────────────────

  {
    id: "misiwâpos",
    images: "https://loremflickr.com/800/600/large-rabbit",
    nls_key: "WORD_LARGE_RABBIT_ROOT",
    stem_label: "NA-1",
    synonyms: [],
    sentences: [
      {
        setence: "large rabbit",
        example: "niwâpamâw misiwâpos. (I see a large rabbit.)",
      },
    ],
    width: 96,
    height: 32,
    children: [],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_LARGE_RABBIT_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_LARGE_RABBIT_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_LARGE_RABBIT_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_LARGE_RABBIT_POSS_1S_SG",
              "WORD_LARGE_RABBIT_POSS_1S_PL",
              "WORD_LARGE_RABBIT_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_LARGE_RABBIT_POSS_2S_SG",
              "WORD_LARGE_RABBIT_POSS_2S_PL",
              "WORD_LARGE_RABBIT_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_LARGE_RABBIT_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_LARGE_RABBIT_POSS_1P_SG",
              "WORD_LARGE_RABBIT_POSS_1P_PL",
              "WORD_LARGE_RABBIT_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_LARGE_RABBIT_POSS_21P_SG",
              "WORD_LARGE_RABBIT_POSS_21P_PL",
              "WORD_LARGE_RABBIT_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_LARGE_RABBIT_POSS_2P_SG",
              "WORD_LARGE_RABBIT_POSS_2P_PL",
              "WORD_LARGE_RABBIT_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_LARGE_RABBIT_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_LARGE_RABBIT_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  {
    id: "wâpiskwâpos",
    images: "https://loremflickr.com/800/600/white-rabbit",
    nls_key: "WORD_WHITE_RABBIT_ROOT",
    stem_label: "NA-1",
    synonyms: [],
    sentences: [
      {
        setence: "white rabbit",
        example: "niwâpamâw wâpiskwâpos. (I see a white rabbit.)",
      },
    ],
    width: 96,
    height: 32,
    children: ["wâposkân", "wâposkay"],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_WHITE_RABBIT_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_WHITE_RABBIT_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_WHITE_RABBIT_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_WHITE_RABBIT_POSS_1S_SG",
              "WORD_WHITE_RABBIT_POSS_1S_PL",
              "WORD_WHITE_RABBIT_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_WHITE_RABBIT_POSS_2S_SG",
              "WORD_WHITE_RABBIT_POSS_2S_PL",
              "WORD_WHITE_RABBIT_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_WHITE_RABBIT_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_WHITE_RABBIT_POSS_1P_SG",
              "WORD_WHITE_RABBIT_POSS_1P_PL",
              "WORD_WHITE_RABBIT_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_WHITE_RABBIT_POSS_21P_SG",
              "WORD_WHITE_RABBIT_POSS_21P_PL",
              "WORD_WHITE_RABBIT_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_WHITE_RABBIT_POSS_2P_SG",
              "WORD_WHITE_RABBIT_POSS_2P_PL",
              "WORD_WHITE_RABBIT_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_WHITE_RABBIT_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_WHITE_RABBIT_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  {
    id: "kaskitêwâpos",
    images: "https://loremflickr.com/800/600/brown-rabbit",
    nls_key: "WORD_DARK_RABBIT_ROOT",
    stem_label: "NA-1",
    synonyms: [],
    sentences: [
      {
        setence: "dark/brown rabbit",
        example: "kaskitêwâpos pimipahtâw. (The dark rabbit is running.)",
      },
    ],
    width: 96,
    height: 32,
    children: ["wâposmêhkwân"],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_DARK_RABBIT_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_DARK_RABBIT_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_DARK_RABBIT_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_DARK_RABBIT_POSS_1S_SG",
              "WORD_DARK_RABBIT_POSS_1S_PL",
              "WORD_DARK_RABBIT_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_DARK_RABBIT_POSS_2S_SG",
              "WORD_DARK_RABBIT_POSS_2S_PL",
              "WORD_DARK_RABBIT_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_DARK_RABBIT_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_DARK_RABBIT_POSS_1P_SG",
              "WORD_DARK_RABBIT_POSS_1P_PL",
              "WORD_DARK_RABBIT_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_DARK_RABBIT_POSS_21P_SG",
              "WORD_DARK_RABBIT_POSS_21P_PL",
              "WORD_DARK_RABBIT_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_DARK_RABBIT_POSS_2P_SG",
              "WORD_DARK_RABBIT_POSS_2P_PL",
              "WORD_DARK_RABBIT_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_DARK_RABBIT_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_DARK_RABBIT_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  {
    id: "apisiwâposis",
    images: "https://loremflickr.com/800/600/tiny-rabbit-kit",
    nls_key: "WORD_TINY_KIT_ROOT",
    stem_label: "NA-1",
    synonyms: [],
    sentences: [
      {
        setence: "tiny rabbit kit",
        example: "apisiwâposis nipâw. (The tiny rabbit kit is sleeping.)",
      },
    ],
    width: 96,
    height: 32,
    children: [],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_TINY_KIT_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_TINY_KIT_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_TINY_KIT_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_TINY_KIT_POSS_1S_SG",
              "WORD_TINY_KIT_POSS_1S_PL",
              "WORD_TINY_KIT_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_TINY_KIT_POSS_2S_SG",
              "WORD_TINY_KIT_POSS_2S_PL",
              "WORD_TINY_KIT_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_TINY_KIT_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_TINY_KIT_POSS_1P_SG",
              "WORD_TINY_KIT_POSS_1P_PL",
              "WORD_TINY_KIT_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_TINY_KIT_POSS_21P_SG",
              "WORD_TINY_KIT_POSS_21P_PL",
              "WORD_TINY_KIT_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_TINY_KIT_POSS_2P_SG",
              "WORD_TINY_KIT_POSS_2P_PL",
              "WORD_TINY_KIT_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_TINY_KIT_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_TINY_KIT_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  // ── LEVEL 4 ─────────────────────────────────────────────────────────────

  {
    id: "wâposkân",
    images: "https://loremflickr.com/800/600/rabbit-snare",
    nls_key: "WORD_RABBIT_SNARE_ROOT",
    stem_label: "NI-1",
    synonyms: [],
    sentences: [
      {
        setence: "rabbit snare",
        example: "niwâpamâw wâposkân. (I see a rabbit snare.)",
      },
    ],
    width: 96,
    height: 32,
    children: [],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_RABBIT_SNARE_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_RABBIT_SNARE_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_RABBIT_SNARE_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_RABBIT_SNARE_POSS_1S_SG",
              "WORD_RABBIT_SNARE_POSS_1S_PL",
              "WORD_RABBIT_SNARE_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_RABBIT_SNARE_POSS_2S_SG",
              "WORD_RABBIT_SNARE_POSS_2S_PL",
              "WORD_RABBIT_SNARE_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_RABBIT_SNARE_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_RABBIT_SNARE_POSS_1P_SG",
              "WORD_RABBIT_SNARE_POSS_1P_PL",
              "WORD_RABBIT_SNARE_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_RABBIT_SNARE_POSS_21P_SG",
              "WORD_RABBIT_SNARE_POSS_21P_PL",
              "WORD_RABBIT_SNARE_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_RABBIT_SNARE_POSS_2P_SG",
              "WORD_RABBIT_SNARE_POSS_2P_PL",
              "WORD_RABBIT_SNARE_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_RABBIT_SNARE_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_RABBIT_SNARE_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  {
    id: "wâposkay",
    images: "https://loremflickr.com/800/600/rabbit-pelt",
    nls_key: "WORD_RABBIT_HIDE_ROOT",
    stem_label: "NI-1",
    synonyms: [],
    sentences: [
      {
        setence: "rabbit hide / pelt",
        example: "niwâpamâw wâposkay. (I see a rabbit hide.)",
      },
    ],
    width: 96,
    height: 32,
    children: [],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_RABBIT_HIDE_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_RABBIT_HIDE_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_RABBIT_HIDE_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_RABBIT_HIDE_POSS_1S_SG",
              "WORD_RABBIT_HIDE_POSS_1S_PL",
              "WORD_RABBIT_HIDE_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_RABBIT_HIDE_POSS_2S_SG",
              "WORD_RABBIT_HIDE_POSS_2S_PL",
              "WORD_RABBIT_HIDE_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_RABBIT_HIDE_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_RABBIT_HIDE_POSS_1P_SG",
              "WORD_RABBIT_HIDE_POSS_1P_PL",
              "WORD_RABBIT_HIDE_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_RABBIT_HIDE_POSS_21P_SG",
              "WORD_RABBIT_HIDE_POSS_21P_PL",
              "WORD_RABBIT_HIDE_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_RABBIT_HIDE_POSS_2P_SG",
              "WORD_RABBIT_HIDE_POSS_2P_PL",
              "WORD_RABBIT_HIDE_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_RABBIT_HIDE_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_RABBIT_HIDE_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  {
    id: "wâposmêhkwân",
    images: "https://loremflickr.com/800/600/rabbit-track",
    nls_key: "WORD_RABBIT_TRACK_ROOT",
    stem_label: "NI-1",
    synonyms: [],
    sentences: [
      {
        setence: "rabbit track",
        example: "niwâpamâw wâposmêhkwân. (I see a rabbit track.)",
      },
    ],
    width: 96,
    height: 32,
    children: [],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_RABBIT_TRACK_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_RABBIT_TRACK_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_RABBIT_TRACK_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_RABBIT_TRACK_POSS_1S_SG",
              "WORD_RABBIT_TRACK_POSS_1S_PL",
              "WORD_RABBIT_TRACK_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_RABBIT_TRACK_POSS_2S_SG",
              "WORD_RABBIT_TRACK_POSS_2S_PL",
              "WORD_RABBIT_TRACK_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_RABBIT_TRACK_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_RABBIT_TRACK_POSS_1P_SG",
              "WORD_RABBIT_TRACK_POSS_1P_PL",
              "WORD_RABBIT_TRACK_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_RABBIT_TRACK_POSS_21P_SG",
              "WORD_RABBIT_TRACK_POSS_21P_PL",
              "WORD_RABBIT_TRACK_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_RABBIT_TRACK_POSS_2P_SG",
              "WORD_RABBIT_TRACK_POSS_2P_PL",
              "WORD_RABBIT_TRACK_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_RABBIT_TRACK_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_RABBIT_TRACK_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  // MARK: ANIMAL
  {
    id: "pisiskiw",
    images: "https://loremflickr.com/800/600/animal",
    nls_key: "WORD_ANIMAL_ROOT",
    stem_label: "NA-1",
    synonyms: ["awâsis-pisiskiw", "nâpêpisiskiw"],
    sentences: [
      {
        setence: "animal",
        example: "pisiskiw pimâtiw. (The animal is alive.)",
      },
      {
        setence: "a wild animal",
        example: "niwâpamâw pisiskiw. (I see an animal.)",
      },
      {
        setence: "the animal",
        example: "pisiskiw mîciw. (The animal is eating.)",
      },
      {
        setence: "a large animal",
        example: "pisiskiw matwêhkwâmiw. (The animal is making noise.)",
      },
    ],
    width: 120,
    height: 40,
    children: [
      "nâpêpisiskiw",
      "iskwêwpisiskiw",
      "pisiskiwâsis",
      "wâpipisiskiw",
    ],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_ANIMAL_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_ANIMAL_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_ANIMAL_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [
          { labelKey: "SG", valueKey: "WORD_ANIMAL_DIM_SG", isBold: false },
        ],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_ANIMAL_POSS_1S_SG",
              "WORD_ANIMAL_POSS_1S_PL",
              "WORD_ANIMAL_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_ANIMAL_POSS_2S_SG",
              "WORD_ANIMAL_POSS_2S_PL",
              "WORD_ANIMAL_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_ANIMAL_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_ANIMAL_POSS_1P_SG",
              "WORD_ANIMAL_POSS_1P_PL",
              "WORD_ANIMAL_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_ANIMAL_POSS_21P_SG",
              "WORD_ANIMAL_POSS_21P_PL",
              "WORD_ANIMAL_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_ANIMAL_POSS_2P_SG",
              "WORD_ANIMAL_POSS_2P_PL",
              "WORD_ANIMAL_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_ANIMAL_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_ANIMAL_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  // ── LEVEL 2 ─────────────────────────────────────────────────────────────

  {
    id: "nâpêpisiskiw",
    images: "https://loremflickr.com/800/600/bull,male-animal",
    nls_key: "WORD_MALE_ANIMAL_ROOT",
    stem_label: "NA-1",
    synonyms: [],
    sentences: [
      {
        setence: "male animal",
        example: "nâpêpisiskiw pimohtêw. (The male animal is walking.)",
      },
    ],
    width: 96,
    height: 32,
    children: ["omisimâwpisiskiw"],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_MALE_ANIMAL_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_MALE_ANIMAL_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_MALE_ANIMAL_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_MALE_ANIMAL_POSS_1S_SG",
              "WORD_MALE_ANIMAL_POSS_1S_PL",
              "WORD_MALE_ANIMAL_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_MALE_ANIMAL_POSS_2S_SG",
              "WORD_MALE_ANIMAL_POSS_2S_PL",
              "WORD_MALE_ANIMAL_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_MALE_ANIMAL_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_MALE_ANIMAL_POSS_1P_SG",
              "WORD_MALE_ANIMAL_POSS_1P_PL",
              "WORD_MALE_ANIMAL_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_MALE_ANIMAL_POSS_21P_SG",
              "WORD_MALE_ANIMAL_POSS_21P_PL",
              "WORD_MALE_ANIMAL_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_MALE_ANIMAL_POSS_2P_SG",
              "WORD_MALE_ANIMAL_POSS_2P_PL",
              "WORD_MALE_ANIMAL_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_MALE_ANIMAL_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_MALE_ANIMAL_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  {
    id: "iskwêwpisiskiw",
    images: "https://loremflickr.com/800/600/cow,female-animal",
    nls_key: "WORD_FEMALE_ANIMAL_ROOT",
    stem_label: "NA-1",
    synonyms: [],
    sentences: [
      {
        setence: "female animal",
        example: "iskwêwpisiskiw nipâw. (The female animal is sleeping.)",
      },
    ],
    width: 96,
    height: 32,
    children: [],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_FEMALE_ANIMAL_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_FEMALE_ANIMAL_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_FEMALE_ANIMAL_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_FEMALE_ANIMAL_POSS_1S_SG",
              "WORD_FEMALE_ANIMAL_POSS_1S_PL",
              "WORD_FEMALE_ANIMAL_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_FEMALE_ANIMAL_POSS_2S_SG",
              "WORD_FEMALE_ANIMAL_POSS_2S_PL",
              "WORD_FEMALE_ANIMAL_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_FEMALE_ANIMAL_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_FEMALE_ANIMAL_POSS_1P_SG",
              "WORD_FEMALE_ANIMAL_POSS_1P_PL",
              "WORD_FEMALE_ANIMAL_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_FEMALE_ANIMAL_POSS_21P_SG",
              "WORD_FEMALE_ANIMAL_POSS_21P_PL",
              "WORD_FEMALE_ANIMAL_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_FEMALE_ANIMAL_POSS_2P_SG",
              "WORD_FEMALE_ANIMAL_POSS_2P_PL",
              "WORD_FEMALE_ANIMAL_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_FEMALE_ANIMAL_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_FEMALE_ANIMAL_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  {
    id: "pisiskiwâsis",
    images: "https://loremflickr.com/800/600/baby-animal",
    nls_key: "WORD_YOUNG_ANIMAL_ROOT",
    stem_label: "NA-1",
    synonyms: ["apisîsispisiskiw"],
    sentences: [
      {
        setence: "young animal / baby animal",
        example: "pisiskiwâsis mêtowêw. (The baby animal is playing.)",
      },
    ],
    width: 96,
    height: 32,
    children: ["apisîsispisiskiw"],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_YOUNG_ANIMAL_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_YOUNG_ANIMAL_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_YOUNG_ANIMAL_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [
          {
            labelKey: "SG",
            valueKey: "WORD_YOUNG_ANIMAL_DIM_SG",
            isBold: false,
          },
        ],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_YOUNG_ANIMAL_POSS_1S_SG",
              "WORD_YOUNG_ANIMAL_POSS_1S_PL",
              "WORD_YOUNG_ANIMAL_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_YOUNG_ANIMAL_POSS_2S_SG",
              "WORD_YOUNG_ANIMAL_POSS_2S_PL",
              "WORD_YOUNG_ANIMAL_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_YOUNG_ANIMAL_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_YOUNG_ANIMAL_POSS_1P_SG",
              "WORD_YOUNG_ANIMAL_POSS_1P_PL",
              "WORD_YOUNG_ANIMAL_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_YOUNG_ANIMAL_POSS_21P_SG",
              "WORD_YOUNG_ANIMAL_POSS_21P_PL",
              "WORD_YOUNG_ANIMAL_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_YOUNG_ANIMAL_POSS_2P_SG",
              "WORD_YOUNG_ANIMAL_POSS_2P_PL",
              "WORD_YOUNG_ANIMAL_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_YOUNG_ANIMAL_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_YOUNG_ANIMAL_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  {
    id: "wâpipisiskiw",
    images: "https://loremflickr.com/800/600/wildlife",
    nls_key: "WORD_WILD_ANIMAL_ROOT",
    stem_label: "NA-1",
    synonyms: [],
    sentences: [
      {
        setence: "wild animal",
        example: "niwâpamâw wâpipisiskiw. (I see a wild animal.)",
      },
    ],
    width: 96,
    height: 32,
    children: [],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_WILD_ANIMAL_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_WILD_ANIMAL_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_WILD_ANIMAL_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_WILD_ANIMAL_POSS_1S_SG",
              "WORD_WILD_ANIMAL_POSS_1S_PL",
              "WORD_WILD_ANIMAL_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_WILD_ANIMAL_POSS_2S_SG",
              "WORD_WILD_ANIMAL_POSS_2S_PL",
              "WORD_WILD_ANIMAL_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_WILD_ANIMAL_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_WILD_ANIMAL_POSS_1P_SG",
              "WORD_WILD_ANIMAL_POSS_1P_PL",
              "WORD_WILD_ANIMAL_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_WILD_ANIMAL_POSS_21P_SG",
              "WORD_WILD_ANIMAL_POSS_21P_PL",
              "WORD_WILD_ANIMAL_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_WILD_ANIMAL_POSS_2P_SG",
              "WORD_WILD_ANIMAL_POSS_2P_PL",
              "WORD_WILD_ANIMAL_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_WILD_ANIMAL_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_WILD_ANIMAL_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  // ── LEVEL 3 ─────────────────────────────────────────────────────────────

  {
    id: "omisimâwpisiskiw",
    images: "https://loremflickr.com/800/600/moose,large-animal",
    nls_key: "WORD_LARGE_ANIMAL_ROOT",
    stem_label: "NA-1",
    synonyms: [],
    sentences: [
      {
        setence: "large animal",
        example: "niwâpamâw omisimâwpisiskiw. (I see a large animal.)",
      },
    ],
    width: 96,
    height: 32,
    children: [],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_LARGE_ANIMAL_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_LARGE_ANIMAL_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_LARGE_ANIMAL_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_LARGE_ANIMAL_POSS_1S_SG",
              "WORD_LARGE_ANIMAL_POSS_1S_PL",
              "WORD_LARGE_ANIMAL_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_LARGE_ANIMAL_POSS_2S_SG",
              "WORD_LARGE_ANIMAL_POSS_2S_PL",
              "WORD_LARGE_ANIMAL_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_LARGE_ANIMAL_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_LARGE_ANIMAL_POSS_1P_SG",
              "WORD_LARGE_ANIMAL_POSS_1P_PL",
              "WORD_LARGE_ANIMAL_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_LARGE_ANIMAL_POSS_21P_SG",
              "WORD_LARGE_ANIMAL_POSS_21P_PL",
              "WORD_LARGE_ANIMAL_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_LARGE_ANIMAL_POSS_2P_SG",
              "WORD_LARGE_ANIMAL_POSS_2P_PL",
              "WORD_LARGE_ANIMAL_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_LARGE_ANIMAL_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_LARGE_ANIMAL_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  {
    id: "apisîsispisiskiw",
    images: "https://loremflickr.com/800/600/mouse,small-animal",
    nls_key: "WORD_TINY_ANIMAL_ROOT",
    stem_label: "NA-1",
    synonyms: [],
    sentences: [
      {
        setence: "tiny animal",
        example: "apisîsispisiskiw nipâw. (The tiny animal is sleeping.)",
      },
    ],
    width: 96,
    height: 32,
    children: [],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_TINY_ANIMAL_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_TINY_ANIMAL_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_TINY_ANIMAL_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_TINY_ANIMAL_POSS_1S_SG",
              "WORD_TINY_ANIMAL_POSS_1S_PL",
              "WORD_TINY_ANIMAL_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_TINY_ANIMAL_POSS_2S_SG",
              "WORD_TINY_ANIMAL_POSS_2S_PL",
              "WORD_TINY_ANIMAL_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_TINY_ANIMAL_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_TINY_ANIMAL_POSS_1P_SG",
              "WORD_TINY_ANIMAL_POSS_1P_PL",
              "WORD_TINY_ANIMAL_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_TINY_ANIMAL_POSS_21P_SG",
              "WORD_TINY_ANIMAL_POSS_21P_PL",
              "WORD_TINY_ANIMAL_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_TINY_ANIMAL_POSS_2P_SG",
              "WORD_TINY_ANIMAL_POSS_2P_PL",
              "WORD_TINY_ANIMAL_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_TINY_ANIMAL_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_TINY_ANIMAL_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  // MARK: ICE
  {
    id: "mîskwamiy",
    images: "https://loremflickr.com/800/600/ice",
    nls_key: "WORD_ICE_ROOT",
    stem_label: "NI-1",
    synonyms: ["maskwamiy", "tahkwamiy"],
    sentences: [
      { setence: "ice", example: "mîskwamiy tahkâw. (The ice is cold.)" },
      {
        setence: "there is ice",
        example: "mîskwamiy astew. (There is ice lying there.)",
      },
      {
        setence: "on the ice",
        example: "mîskwamihk pimisinin. (It is lying on the ice.)",
      },
      {
        setence: "the ice is forming",
        example: "mîskwamiy mâci-ohtâkopayiw. (The ice is beginning to form.)",
      },
    ],
    width: 120,
    height: 40,
    children: ["apiscimîskwamiy", "miskomîskwamiy", "sîpîmîskwamiy"],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_ICE_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_ICE_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_ICE_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "WORD_ICE_DIM_SG", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_ICE_POSS_1S_SG",
              "WORD_ICE_POSS_1S_PL",
              "WORD_ICE_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_ICE_POSS_2S_SG",
              "WORD_ICE_POSS_2S_PL",
              "WORD_ICE_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_ICE_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_ICE_POSS_1P_SG",
              "WORD_ICE_POSS_1P_PL",
              "WORD_ICE_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_ICE_POSS_21P_SG",
              "WORD_ICE_POSS_21P_PL",
              "WORD_ICE_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_ICE_POSS_2P_SG",
              "WORD_ICE_POSS_2P_PL",
              "WORD_ICE_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_ICE_POSS_3P_OBV"],
          },
          { labelKey: "POSS_4", valueKeys: ["—", "—", "WORD_ICE_POSS_4_OBV"] },
        ],
      },
    },
  },

  {
    id: "apiscimîskwamiy",
    images: "https://loremflickr.com/800/600/thin-ice",
    nls_key: "WORD_THIN_ICE_ROOT",
    stem_label: "NI-1",
    synonyms: [],
    sentences: [
      {
        setence: "thin / small ice",
        example: "apiscimîskwamiy nakatew. (The thin ice is breaking.)",
      },
    ],
    width: 96,
    height: 32,
    children: [],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_THIN_ICE_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_THIN_ICE_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_THIN_ICE_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_THIN_ICE_POSS_1S_SG",
              "WORD_THIN_ICE_POSS_1S_PL",
              "WORD_THIN_ICE_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_THIN_ICE_POSS_2S_SG",
              "WORD_THIN_ICE_POSS_2S_PL",
              "WORD_THIN_ICE_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_THIN_ICE_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_THIN_ICE_POSS_1P_SG",
              "WORD_THIN_ICE_POSS_1P_PL",
              "WORD_THIN_ICE_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_THIN_ICE_POSS_21P_SG",
              "WORD_THIN_ICE_POSS_21P_PL",
              "WORD_THIN_ICE_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_THIN_ICE_POSS_2P_SG",
              "WORD_THIN_ICE_POSS_2P_PL",
              "WORD_THIN_ICE_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_THIN_ICE_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_THIN_ICE_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  {
    id: "miskomîskwamiy",
    images: "https://loremflickr.com/800/600/glacier,ice",
    nls_key: "WORD_THICK_ICE_ROOT",
    stem_label: "NI-1",
    synonyms: [],
    sentences: [
      {
        setence: "thick / large ice",
        example: "miskomîskwamiy maskawâw. (The thick ice is strong.)",
      },
    ],
    width: 96,
    height: 32,
    children: [],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_THICK_ICE_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_THICK_ICE_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_THICK_ICE_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_THICK_ICE_POSS_1S_SG",
              "WORD_THICK_ICE_POSS_1S_PL",
              "WORD_THICK_ICE_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_THICK_ICE_POSS_2S_SG",
              "WORD_THICK_ICE_POSS_2S_PL",
              "WORD_THICK_ICE_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_THICK_ICE_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_THICK_ICE_POSS_1P_SG",
              "WORD_THICK_ICE_POSS_1P_PL",
              "WORD_THICK_ICE_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_THICK_ICE_POSS_21P_SG",
              "WORD_THICK_ICE_POSS_21P_PL",
              "WORD_THICK_ICE_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_THICK_ICE_POSS_2P_SG",
              "WORD_THICK_ICE_POSS_2P_PL",
              "WORD_THICK_ICE_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_THICK_ICE_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_THICK_ICE_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  {
    id: "sîpîmîskwamiy",
    images: "https://loremflickr.com/800/600/frozen-river",
    nls_key: "WORD_RIVER_ICE_ROOT",
    stem_label: "NI-1",
    synonyms: [],
    sentences: [
      {
        setence: "river ice",
        example:
          "sîpîmîskwamiy pahkisin. (The river ice is falling / breaking up.)",
      },
    ],
    width: 96,
    height: 32,
    children: [],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_RIVER_ICE_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_RIVER_ICE_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_RIVER_ICE_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_RIVER_ICE_POSS_1S_SG",
              "WORD_RIVER_ICE_POSS_1S_PL",
              "WORD_RIVER_ICE_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_RIVER_ICE_POSS_2S_SG",
              "WORD_RIVER_ICE_POSS_2S_PL",
              "WORD_RIVER_ICE_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_RIVER_ICE_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_RIVER_ICE_POSS_1P_SG",
              "WORD_RIVER_ICE_POSS_1P_PL",
              "WORD_RIVER_ICE_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_RIVER_ICE_POSS_21P_SG",
              "WORD_RIVER_ICE_POSS_21P_PL",
              "WORD_RIVER_ICE_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_RIVER_ICE_POSS_2P_SG",
              "WORD_RIVER_ICE_POSS_2P_PL",
              "WORD_RIVER_ICE_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_RIVER_ICE_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_RIVER_ICE_POSS_4_OBV"],
          },
        ],
      },
    },
  },

  //MARK: Summer
  {
    id: "nîpin",
    images: "https://loremflickr.com/800/600/summer",
    nls_key: "WORD_SUMMER_ROOT",
    stem_label: "NI-1",
    synonyms: ["nîpinohk", "miyo-nîpin"],
    sentences: [
      {
        setence: "summer",
        example: "nîpin miyomahcihowin. (Summer is a good feeling.)",
      },
      {
        setence: "in summer",
        example: "nîpinohk niwîcihânân. (In summer we help each other.)",
      },
      {
        setence: "it is summer",
        example: "nîpin anohc. (It is summer today.)",
      },
      {
        setence: "a good summer",
        example: "miyo-nîpin kâ-ihtakosiyan. (May you have a good summer.)",
      },
    ],
    width: 120,
    height: 40,
    children: ["miyo-nîpin", "nîpinohk"],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_SUMMER_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_SUMMER_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_SUMMER_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_SUMMER_POSS_1S_SG",
              "WORD_SUMMER_POSS_1S_PL",
              "WORD_SUMMER_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_SUMMER_POSS_2S_SG",
              "WORD_SUMMER_POSS_2S_PL",
              "WORD_SUMMER_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_SUMMER_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_SUMMER_POSS_1P_SG",
              "WORD_SUMMER_POSS_1P_PL",
              "WORD_SUMMER_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_SUMMER_POSS_21P_SG",
              "WORD_SUMMER_POSS_21P_PL",
              "WORD_SUMMER_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_SUMMER_POSS_2P_SG",
              "WORD_SUMMER_POSS_2P_PL",
              "WORD_SUMMER_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_SUMMER_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_SUMMER_POSS_4_OBV"],
          },
        ],
      },
    },
  },
  {
    id: "sîkwan",
    images: "https://loremflickr.com/800/600/spring-season",
    nls_key: "WORD_SPRING_ROOT",
    stem_label: "NI-1",
    synonyms: ["sîkwanohk"],
    sentences: [
      { setence: "spring", example: "sîkwan âstam. (Spring is coming.)" },
    ],
    width: 96,
    height: 32,
    children: [],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_SPRING_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_SPRING_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_SPRING_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_SPRING_POSS_1S_SG",
              "WORD_SPRING_POSS_1S_PL",
              "WORD_SPRING_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_SPRING_POSS_2S_SG",
              "WORD_SPRING_POSS_2S_PL",
              "WORD_SPRING_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_SPRING_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_SPRING_POSS_1P_SG",
              "WORD_SPRING_POSS_1P_PL",
              "WORD_SPRING_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_SPRING_POSS_21P_SG",
              "WORD_SPRING_POSS_21P_PL",
              "WORD_SPRING_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_SPRING_POSS_2P_SG",
              "WORD_SPRING_POSS_2P_PL",
              "WORD_SPRING_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_SPRING_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_SPRING_POSS_4_OBV"],
          },
        ],
      },
    },
  },
  {
    id: "takwâkin",
    images: "https://loremflickr.com/800/600/autumn",
    nls_key: "WORD_AUTUMN_ROOT",
    stem_label: "NI-1",
    synonyms: ["takwâkinohk"],
    sentences: [
      {
        setence: "autumn / fall",
        example: "takwâkin mihkwâw. (Autumn is red/colourful.)",
      },
    ],
    width: 96,
    height: 32,
    children: [],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_AUTUMN_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_AUTUMN_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_AUTUMN_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_AUTUMN_POSS_1S_SG",
              "WORD_AUTUMN_POSS_1S_PL",
              "WORD_AUTUMN_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_AUTUMN_POSS_2S_SG",
              "WORD_AUTUMN_POSS_2S_PL",
              "WORD_AUTUMN_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_AUTUMN_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_AUTUMN_POSS_1P_SG",
              "WORD_AUTUMN_POSS_1P_PL",
              "WORD_AUTUMN_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_AUTUMN_POSS_21P_SG",
              "WORD_AUTUMN_POSS_21P_PL",
              "WORD_AUTUMN_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_AUTUMN_POSS_2P_SG",
              "WORD_AUTUMN_POSS_2P_PL",
              "WORD_AUTUMN_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_AUTUMN_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_AUTUMN_POSS_4_OBV"],
          },
        ],
      },
    },
  },
  {
    id: "pipon",
    images: "https://loremflickr.com/800/600/winter",
    nls_key: "WORD_WINTER_ROOT",
    stem_label: "NI-1",
    synonyms: ["piponohk"],
    sentences: [
      { setence: "winter", example: "pipon tahkâw. (Winter is cold.)" },
    ],
    width: 96,
    height: 32,
    children: [],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_WINTER_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_WINTER_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_WINTER_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_WINTER_POSS_1S_SG",
              "WORD_WINTER_POSS_1S_PL",
              "WORD_WINTER_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_WINTER_POSS_2S_SG",
              "WORD_WINTER_POSS_2S_PL",
              "WORD_WINTER_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_WINTER_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_WINTER_POSS_1P_SG",
              "WORD_WINTER_POSS_1P_PL",
              "WORD_WINTER_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_WINTER_POSS_21P_SG",
              "WORD_WINTER_POSS_21P_PL",
              "WORD_WINTER_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_WINTER_POSS_2P_SG",
              "WORD_WINTER_POSS_2P_PL",
              "WORD_WINTER_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_WINTER_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_WINTER_POSS_4_OBV"],
          },
        ],
      },
    },
  },
  {
    id: "miyo-nîpin",
    images: "https://loremflickr.com/800/600/sunny-summer",
    nls_key: "WORD_GOOD_SUMMER_ROOT",
    stem_label: "NI-1",
    synonyms: ["nîpin"],
    sentences: [
      {
        setence: "a good summer",
        example: "miyo-nîpin kâ-ihtakosiyan. (May you have a good summer.)",
      },
    ],
    width: 96,
    height: 32,
    children: [],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_GOOD_SUMMER_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_GOOD_SUMMER_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_GOOD_SUMMER_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_GOOD_SUMMER_POSS_1S_SG",
              "WORD_GOOD_SUMMER_POSS_1S_PL",
              "WORD_GOOD_SUMMER_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_GOOD_SUMMER_POSS_2S_SG",
              "WORD_GOOD_SUMMER_POSS_2S_PL",
              "WORD_GOOD_SUMMER_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_GOOD_SUMMER_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_GOOD_SUMMER_POSS_1P_SG",
              "WORD_GOOD_SUMMER_POSS_1P_PL",
              "WORD_GOOD_SUMMER_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_GOOD_SUMMER_POSS_21P_SG",
              "WORD_GOOD_SUMMER_POSS_21P_PL",
              "WORD_GOOD_SUMMER_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_GOOD_SUMMER_POSS_2P_SG",
              "WORD_GOOD_SUMMER_POSS_2P_PL",
              "WORD_GOOD_SUMMER_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_GOOD_SUMMER_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_GOOD_SUMMER_POSS_4_OBV"],
          },
        ],
      },
    },
  },
  {
    id: "nîpinohk",
    images: "https://loremflickr.com/800/600/summer-landscape",
    nls_key: "WORD_IN_SUMMER_ROOT",
    stem_label: "LOC",
    synonyms: ["nîpin"],
    sentences: [
      {
        setence: "in summer",
        example: "nîpinohk niwîcihânân. (In summer we help each other.)",
      },
    ],
    width: 96,
    height: 32,
    children: [],
    word_conjugation: {
      basic: [
        { labelKey: "SG", valueKey: "WORD_IN_SUMMER_SG", isBold: false },
        { labelKey: "PL", valueKey: "WORD_IN_SUMMER_PL", isBold: true },
        { labelKey: "OBV", valueKey: "WORD_IN_SUMMER_OBV", isBold: true },
      ],
      diminutive: {
        titleKey: "DIMINUTIVE_TITLE",
        items: [{ labelKey: "SG", valueKey: "—", isBold: false }],
      },
      possession: {
        titleKey: "POSSESSION_TITLE",
        columns: ["SG", "PL", "OBV"],
        rows: [
          {
            labelKey: "POSS_1S",
            valueKeys: [
              "WORD_IN_SUMMER_POSS_1S_SG",
              "WORD_IN_SUMMER_POSS_1S_PL",
              "WORD_IN_SUMMER_POSS_1S_OBV",
            ],
          },
          {
            labelKey: "POSS_2S",
            valueKeys: [
              "WORD_IN_SUMMER_POSS_2S_SG",
              "WORD_IN_SUMMER_POSS_2S_PL",
              "WORD_IN_SUMMER_POSS_2S_OBV",
            ],
          },
          {
            labelKey: "POSS_3S",
            valueKeys: ["—", "—", "WORD_IN_SUMMER_POSS_3S_OBV"],
          },
          {
            labelKey: "POSS_1P",
            valueKeys: [
              "WORD_IN_SUMMER_POSS_1P_SG",
              "WORD_IN_SUMMER_POSS_1P_PL",
              "WORD_IN_SUMMER_POSS_1P_OBV",
            ],
          },
          {
            labelKey: "POSS_21P",
            valueKeys: [
              "WORD_IN_SUMMER_POSS_21P_SG",
              "WORD_IN_SUMMER_POSS_21P_PL",
              "WORD_IN_SUMMER_POSS_21P_OBV",
            ],
          },
          {
            labelKey: "POSS_2P",
            valueKeys: [
              "WORD_IN_SUMMER_POSS_2P_SG",
              "WORD_IN_SUMMER_POSS_2P_PL",
              "WORD_IN_SUMMER_POSS_2P_OBV",
            ],
          },
          {
            labelKey: "POSS_3P",
            valueKeys: ["—", "—", "WORD_IN_SUMMER_POSS_3P_OBV"],
          },
          {
            labelKey: "POSS_4",
            valueKeys: ["—", "—", "WORD_IN_SUMMER_POSS_4_OBV"],
          },
        ],
      },
    },
  },
];
