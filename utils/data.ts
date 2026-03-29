import { RawNode } from "./types";

export const ROOT_IDS = ["acimosis", "maskwa"];
export const RAW_NODES: RawNode[] = [
  // MARK: DOG
  {
    id: "acimosis",
    images: "https://picsum.photos/seed/696/3000/2000",
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
    images: "https://picsum.photos/seed/napewatim/3000/2000",
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
    images: "https://picsum.photos/seed/mahkatim/3000/2000",
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
    images: "https://picsum.photos/seed/apisatim/3000/2000",
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
    images: "https://picsum.photos/seed/kaskitewatim/3000/2000",
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
    images: "https://picsum.photos/seed/maskwa/3000/2000",
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
    images: "https://picsum.photos/seed/napemaskwa/3000/2000",
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
    images: "https://picsum.photos/seed/iskwemaskwa/3000/2000",
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
    images: "https://picsum.photos/seed/maskwas/3000/2000",
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
    images: "https://picsum.photos/seed/misimaskwa/3000/2000",
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
    images: "https://picsum.photos/seed/kaskitewmaskwa/3000/2000",
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
    images: "https://picsum.photos/seed/wapimaskwa/3000/2000",
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
    images: "https://picsum.photos/seed/apisimaskwas/3000/2000",
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
    images: "https://picsum.photos/seed/maskwacihciy/3000/2000",
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
    images: "https://picsum.photos/seed/maskwakay/3000/2000",
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
    images: "https://picsum.photos/seed/maskwatimiy/3000/2000",
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
    images: "https://picsum.photos/seed/maskwamehkwan/3000/2000",
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
];
