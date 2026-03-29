import { RawNode } from "./types";

// export const ROOT_IDS = ["animals", "clothes"];

// export const RAW_NODES: RawNode[] = [
//   // ==========================================
//   // --- CLOTHES TREE ---
//   // ==========================================

//   // --- ROOT & LEVEL 1 ---
//   {
//     id: "clothes",
//     label: "Clothes",
//     width: 120,
//     height: 40,
//     children: ["tops", "bottoms", "outerwear", "footwear", "accessories"],
//   },

//   // --- LEVEL 2 (Main Categories) ---
//   {
//     id: "tops",
//     label: "Tops",
//     width: 110,
//     height: 36,
//     children: ["tshirts", "shirts", "sweaters"],
//   },
//   {
//     id: "bottoms",
//     label: "Bottoms",
//     width: 110,
//     height: 36,
//     children: ["pants", "shorts", "skirts"],
//   },
//   {
//     id: "outerwear",
//     label: "Outerwear",
//     width: 120,
//     height: 36,
//     children: ["jackets", "coats"],
//   },
//   {
//     id: "footwear",
//     label: "Footwear",
//     width: 110,
//     height: 36,
//     children: ["shoes", "boots", "sandals"],
//   },
//   {
//     id: "accessories",
//     label: "Accessories",
//     width: 130,
//     height: 36,
//     children: ["hats", "belts", "scarves"],
//   },

//   // --- LEVEL 3 (Sub-categories) ---
//   // Tops
//   {
//     id: "tshirts",
//     label: "T-Shirts",
//     width: 110,
//     height: 32,
//     children: ["crewneck", "vneck", "graphic_tee"],
//   },
//   {
//     id: "shirts",
//     label: "Shirts",
//     width: 100,
//     height: 32,
//     children: ["buttondown", "polo", "flannel"],
//   },
//   {
//     id: "sweaters",
//     label: "Sweaters",
//     width: 110,
//     height: 32,
//     children: ["hoodie", "cardigan", "pullover"],
//   },

//   // Bottoms
//   {
//     id: "pants",
//     label: "Pants",
//     width: 100,
//     height: 32,
//     children: ["jeans", "chinos", "sweatpants", "trousers"],
//   },
//   {
//     id: "shorts",
//     label: "Shorts",
//     width: 100,
//     height: 32,
//     children: ["boardshorts", "cargos", "athletic_shorts"],
//   },
//   {
//     id: "skirts",
//     label: "Skirts",
//     width: 100,
//     height: 32,
//     children: ["miniskirt", "maxiskirt", "pleated_skirt"],
//   },

//   // Outerwear
//   {
//     id: "jackets",
//     label: "Jackets",
//     width: 100,
//     height: 32,
//     children: ["leather_jacket", "denim_jacket", "bomber", "windbreaker"],
//   },
//   {
//     id: "coats",
//     label: "Coats",
//     width: 100,
//     height: 32,
//     children: ["trenchcoat", "parka", "peacoat"],
//   },

//   // Footwear
//   {
//     id: "shoes",
//     label: "Shoes",
//     width: 100,
//     height: 32,
//     children: ["sneakers", "loafers", "heels", "oxfords"],
//   },
//   {
//     id: "boots",
//     label: "Boots",
//     width: 100,
//     height: 32,
//     children: ["chelsea_boots", "snow_boots", "combat_boots"],
//   },
//   {
//     id: "sandals",
//     label: "Sandals",
//     width: 110,
//     height: 32,
//     children: ["flipflops", "slides", "gladiators"],
//   },

//   // Accessories
//   {
//     id: "hats",
//     label: "Hats",
//     width: 96,
//     height: 32,
//     children: ["cap", "beanie", "fedora"],
//   },
//   {
//     id: "belts",
//     label: "Belts",
//     width: 96,
//     height: 32,
//     children: ["leather_belt", "canvas_belt"],
//   },
//   {
//     id: "scarves",
//     label: "Scarves",
//     width: 100,
//     height: 32,
//     children: ["winter_scarf", "silk_scarf"],
//   },

//   // --- LEVEL 4 (Leaves / Specific Items) ---

//   // Tops Leaves
//   { id: "crewneck", label: "Crewneck", width: 110, height: 32 },
//   { id: "vneck", label: "V-Neck", width: 96, height: 32 },
//   { id: "graphic_tee", label: "Graphic Tee", width: 120, height: 32 },
//   { id: "buttondown", label: "Button-Down", width: 120, height: 32 },
//   { id: "polo", label: "Polo", width: 96, height: 32 },
//   { id: "flannel", label: "Flannel", width: 100, height: 32 },
//   { id: "hoodie", label: "Hoodie", width: 96, height: 32 },
//   { id: "cardigan", label: "Cardigan", width: 110, height: 32 },
//   { id: "pullover", label: "Pullover", width: 110, height: 32 },

//   // Bottoms Leaves
//   { id: "jeans", label: "Jeans", width: 96, height: 32 },
//   { id: "chinos", label: "Chinos", width: 96, height: 32 },
//   { id: "sweatpants", label: "Sweatpants", width: 120, height: 32 },
//   { id: "trousers", label: "Trousers", width: 110, height: 32 },
//   { id: "boardshorts", label: "Boardshorts", width: 120, height: 32 },
//   { id: "cargos", label: "Cargos", width: 96, height: 32 },
//   { id: "athletic_shorts", label: "Athletic Shorts", width: 130, height: 32 },
//   { id: "miniskirt", label: "Miniskirt", width: 110, height: 32 },
//   { id: "maxiskirt", label: "Maxiskirt", width: 110, height: 32 },
//   { id: "pleated_skirt", label: "Pleated Skirt", width: 130, height: 32 },

//   // Outerwear Leaves
//   { id: "leather_jacket", label: "Leather Jacket", width: 130, height: 32 },
//   { id: "denim_jacket", label: "Denim Jacket", width: 130, height: 32 },
//   { id: "bomber", label: "Bomber", width: 100, height: 32 },
//   { id: "windbreaker", label: "Windbreaker", width: 130, height: 32 },
//   { id: "trenchcoat", label: "Trenchcoat", width: 120, height: 32 },
//   { id: "parka", label: "Parka", width: 96, height: 32 },
//   { id: "peacoat", label: "Peacoat", width: 100, height: 32 },

//   // Footwear Leaves
//   { id: "sneakers", label: "Sneakers", width: 110, height: 32 },
//   { id: "loafers", label: "Loafers", width: 100, height: 32 },
//   { id: "heels", label: "Heels", width: 96, height: 32 },
//   { id: "oxfords", label: "Oxfords", width: 100, height: 32 },
//   { id: "chelsea_boots", label: "Chelsea Boots", width: 130, height: 32 },
//   { id: "snow_boots", label: "Snow Boots", width: 120, height: 32 },
//   { id: "combat_boots", label: "Combat Boots", width: 130, height: 32 },
//   { id: "flipflops", label: "Flip Flops", width: 110, height: 32 },
//   { id: "slides", label: "Slides", width: 96, height: 32 },
//   { id: "gladiators", label: "Gladiators", width: 120, height: 32 },

//   // Accessories Leaves
//   { id: "cap", label: "Cap", width: 96, height: 32 },
//   { id: "beanie", label: "Beanie", width: 96, height: 32 },
//   { id: "fedora", label: "Fedora", width: 96, height: 32 },
//   { id: "leather_belt", label: "Leather Belt", width: 120, height: 32 },
//   { id: "canvas_belt", label: "Canvas Belt", width: 120, height: 32 },
//   { id: "winter_scarf", label: "Winter Scarf", width: 120, height: 32 },
//   { id: "silk_scarf", label: "Silk Scarf", width: 110, height: 32 },
//   // --- ROOT & LEVEL 1 ---
//   {
//     id: "animals",
//     label: "data.animals",
//     width: 120,
//     height: 40,
//     children: ["vertebrates", "invertebrates"],
//   },

//   // --- LEVEL 2 ---
//   {
//     id: "vertebrates",
//     label: "Vertebrates",
//     width: 120,
//     height: 40,
//     children: ["mammals", "birds", "reptiles", "amphibians", "fish"],
//   },
//   {
//     id: "invertebrates",
//     label: "Invertebrates",
//     width: 130,
//     height: 40,
//     children: ["insects", "arachnids", "mollusks", "crustaceans", "annelids"],
//   },

//   // --- LEVEL 3 (Vertebrates) ---
//   {
//     id: "mammals",
//     label: "Mammals",
//     width: 110,
//     height: 36,
//     children: ["primates", "carnivores", "ungulates", "rodents", "cetaceans"],
//   },
//   {
//     id: "birds",
//     label: "Birds",
//     width: 110,
//     height: 36,
//     children: ["raptors", "waterfowl", "songbirds", "flightless"],
//   },
//   {
//     id: "reptiles",
//     label: "Reptiles",
//     width: 110,
//     height: 36,
//     children: ["squamata", "crocodilia", "testudines"],
//   },
//   {
//     id: "amphibians",
//     label: "Amphibians",
//     width: 120,
//     height: 36,
//     children: ["frogs", "salamanders"],
//   },
//   {
//     id: "fish",
//     label: "Fish",
//     width: 110,
//     height: 36,
//     children: ["cartilaginous", "bony"],
//   },

//   // --- LEVEL 3 (Invertebrates) ---
//   {
//     id: "insects",
//     label: "Insects",
//     width: 110,
//     height: 36,
//     children: ["hymenoptera", "lepidoptera", "coleoptera", "diptera"],
//   },
//   {
//     id: "arachnids",
//     label: "Arachnids",
//     width: 110,
//     height: 36,
//     children: ["spiders", "scorpions", "ticks"],
//   },
//   {
//     id: "mollusks",
//     label: "Mollusks",
//     width: 110,
//     height: 36,
//     children: ["gastropods", "cephalopods", "bivalves"],
//   },
//   {
//     id: "crustaceans",
//     label: "Crustaceans",
//     width: 120,
//     height: 36,
//     children: ["crabs", "lobsters", "shrimp"],
//   },
//   {
//     id: "annelids",
//     label: "Annelids",
//     width: 110,
//     height: 36,
//     children: ["earthworms", "leeches"],
//   },

//   // --- LEVEL 4 & 5 (Leaves / Sub-categories) ---
//   // Mammal Sub-categories
//   {
//     id: "primates",
//     label: "Primates",
//     width: 100,
//     height: 32,
//     children: ["human", "chimpanzee", "gorilla", "lemur"],
//   },
//   {
//     id: "carnivores",
//     label: "Carnivores",
//     width: 110,
//     height: 32,
//     children: ["lion", "tiger", "bear", "wolf", "fox"],
//   },
//   {
//     id: "ungulates",
//     label: "Ungulates",
//     width: 110,
//     height: 32,
//     children: ["horse", "cow", "pig", "deer", "giraffe"],
//   },
//   {
//     id: "rodents",
//     label: "Rodents",
//     width: 100,
//     height: 32,
//     children: ["mouse", "rat", "squirrel", "beaver"],
//   },
//   {
//     id: "cetaceans",
//     label: "Cetaceans",
//     width: 110,
//     height: 32,
//     children: ["dolphin", "orca", "blue_whale"],
//   },

//   // Bird Sub-categories
//   {
//     id: "raptors",
//     label: "Raptors",
//     width: 100,
//     height: 32,
//     children: ["eagle", "hawk", "falcon", "owl"],
//   },
//   {
//     id: "waterfowl",
//     label: "Waterfowl",
//     width: 110,
//     height: 32,
//     children: ["duck", "goose", "swan"],
//   },
//   {
//     id: "songbirds",
//     label: "Songbirds",
//     width: 110,
//     height: 32,
//     children: ["sparrow", "robin", "crow", "finch"],
//   },
//   {
//     id: "flightless",
//     label: "Flightless",
//     width: 110,
//     height: 32,
//     children: ["ostrich", "penguin", "kiwi"],
//   },

//   // Reptile Sub-categories
//   {
//     id: "squamata",
//     label: "Squamata",
//     width: 110,
//     height: 32,
//     children: ["snake", "lizard", "chameleon"],
//   },
//   {
//     id: "crocodilia",
//     label: "Crocodilia",
//     width: 110,
//     height: 32,
//     children: ["crocodile", "alligator"],
//   },
//   {
//     id: "testudines",
//     label: "Testudines",
//     width: 110,
//     height: 32,
//     children: ["turtle", "tortoise"],
//   },

//   // Amphibian Sub-categories
//   {
//     id: "frogs",
//     label: "Frogs",
//     width: 100,
//     height: 32,
//     children: ["tree_frog", "bullfrog", "poison_dart"],
//   },
//   {
//     id: "salamanders",
//     label: "Salamanders",
//     width: 120,
//     height: 32,
//     children: ["axolotl", "newt"],
//   },

//   // Fish Sub-categories
//   {
//     id: "cartilaginous",
//     label: "Cartilaginous",
//     width: 130,
//     height: 32,
//     children: ["shark", "ray"],
//   },
//   {
//     id: "bony",
//     label: "Bony",
//     width: 100,
//     height: 32,
//     children: ["salmon", "tuna", "clownfish"],
//   },

//   // Insect Sub-categories
//   {
//     id: "hymenoptera",
//     label: "Hymenoptera",
//     width: 130,
//     height: 32,
//     children: ["ant", "bee", "wasp"],
//   },
//   {
//     id: "lepidoptera",
//     label: "Lepidoptera",
//     width: 130,
//     height: 32,
//     children: ["butterfly", "moth"],
//   },
//   {
//     id: "coleoptera",
//     label: "Coleoptera",
//     width: 120,
//     height: 32,
//     children: ["beetle", "ladybug"],
//   },
//   {
//     id: "diptera",
//     label: "Diptera",
//     width: 100,
//     height: 32,
//     children: ["fly", "mosquito"],
//   },

//   // Arachnid & Mollusk Sub-categories
//   {
//     id: "spiders",
//     label: "Spiders",
//     width: 100,
//     height: 32,
//     children: ["tarantula", "widow"],
//   },
//   { id: "scorpions", label: "Scorpions", width: 110, height: 32 },
//   { id: "ticks", label: "Ticks", width: 90, height: 32 },
//   {
//     id: "gastropods",
//     label: "Gastropods",
//     width: 120,
//     height: 32,
//     children: ["snail", "slug"],
//   },
//   {
//     id: "cephalopods",
//     label: "Cephalopods",
//     width: 130,
//     height: 32,
//     children: ["octopus", "squid"],
//   },
//   {
//     id: "bivalves",
//     label: "Bivalves",
//     width: 110,
//     height: 32,
//     children: ["clam", "oyster"],
//   },

//   // Crustacean & Annelid Sub-categories
//   { id: "crabs", label: "Crabs", width: 96, height: 32 },
//   { id: "lobsters", label: "Lobsters", width: 100, height: 32 },
//   { id: "shrimp", label: "Shrimp", width: 96, height: 32 },
//   { id: "earthworms", label: "Earthworms", width: 120, height: 32 },
//   { id: "leeches", label: "Leeches", width: 100, height: 32 },

//   // --- LEAF NODES (Just a few explicit declarations, others will safely map to missing children arrays) ---
//   { id: "human", label: "Human", width: 96, height: 32 },
//   { id: "chimpanzee", label: "Chimpanzee", width: 120, height: 32 },
//   { id: "gorilla", label: "Gorilla", width: 96, height: 32 },
//   { id: "lemur", label: "Lemur", width: 96, height: 32 },
//   { id: "lion", label: "Lion", width: 96, height: 32 },
//   { id: "tiger", label: "Tiger", width: 96, height: 32 },
//   { id: "bear", label: "Bear", width: 96, height: 32 },
//   { id: "wolf", label: "Wolf", width: 96, height: 32 },
//   { id: "fox", label: "Fox", width: 96, height: 32 },
//   { id: "horse", label: "Horse", width: 96, height: 32 },
//   { id: "cow", label: "Cow", width: 96, height: 32 },
//   { id: "pig", label: "Pig", width: 96, height: 32 },
//   { id: "deer", label: "Deer", width: 96, height: 32 },
//   { id: "giraffe", label: "Giraffe", width: 96, height: 32 },
//   { id: "mouse", label: "Mouse", width: 96, height: 32 },
//   { id: "rat", label: "Rat", width: 96, height: 32 },
//   { id: "squirrel", label: "Squirrel", width: 100, height: 32 },
//   { id: "beaver", label: "Beaver", width: 96, height: 32 },
//   { id: "dolphin", label: "Dolphin", width: 100, height: 32 },
//   { id: "orca", label: "Orca", width: 96, height: 32 },
//   { id: "blue_whale", label: "Blue Whale", width: 120, height: 32 },
//   { id: "eagle", label: "Eagle", width: 96, height: 32 },
//   { id: "hawk", label: "Hawk", width: 96, height: 32 },
//   { id: "falcon", label: "Falcon", width: 96, height: 32 },
//   { id: "owl", label: "Owl", width: 96, height: 32 },
//   { id: "duck", label: "Duck", width: 96, height: 32 },
//   { id: "goose", label: "Goose", width: 96, height: 32 },
//   { id: "swan", label: "Swan", width: 96, height: 32 },
//   { id: "sparrow", label: "Sparrow", width: 100, height: 32 },
//   { id: "robin", label: "Robin", width: 96, height: 32 },
//   { id: "crow", label: "Crow", width: 96, height: 32 },
//   { id: "finch", label: "Finch", width: 96, height: 32 },
//   { id: "ostrich", label: "Ostrich", width: 100, height: 32 },
//   { id: "penguin", label: "Penguin", width: 100, height: 32 },
//   { id: "kiwi", label: "Kiwi", width: 96, height: 32 },
//   { id: "snake", label: "Snake", width: 96, height: 32 },
//   { id: "lizard", label: "Lizard", width: 96, height: 32 },
//   { id: "chameleon", label: "Chameleon", width: 120, height: 32 },
//   { id: "crocodile", label: "Crocodile", width: 110, height: 32 },
//   { id: "alligator", label: "Alligator", width: 110, height: 32 },
//   { id: "turtle", label: "Turtle", width: 96, height: 32 },
//   { id: "tortoise", label: "Tortoise", width: 100, height: 32 },
//   { id: "tree_frog", label: "Tree Frog", width: 110, height: 32 },
//   { id: "bullfrog", label: "Bullfrog", width: 100, height: 32 },
//   { id: "poison_dart", label: "Poison Dart", width: 120, height: 32 },
//   { id: "axolotl", label: "Axolotl", width: 96, height: 32 },
//   { id: "newt", label: "Newt", width: 96, height: 32 },
//   { id: "shark", label: "Shark", width: 96, height: 32 },
//   { id: "ray", label: "Ray", width: 96, height: 32 },
//   { id: "salmon", label: "Salmon", width: 96, height: 32 },
//   { id: "tuna", label: "Tuna", width: 96, height: 32 },
//   { id: "clownfish", label: "Clownfish", width: 110, height: 32 },
//   { id: "ant", label: "Ant", width: 96, height: 32 },
//   { id: "bee", label: "Bee", width: 96, height: 32 },
//   { id: "wasp", label: "Wasp", width: 96, height: 32 },
//   { id: "butterfly", label: "Butterfly", width: 110, height: 32 },
//   { id: "moth", label: "Moth", width: 96, height: 32 },
//   { id: "beetle", label: "Beetle", width: 96, height: 32 },
//   { id: "ladybug", label: "Ladybug", width: 100, height: 32 },
//   { id: "fly", label: "Fly", width: 96, height: 32 },
//   { id: "mosquito", label: "Mosquito", width: 100, height: 32 },
//   { id: "tarantula", label: "Tarantula", width: 110, height: 32 },
//   { id: "widow", label: "Widow", width: 96, height: 32 },
//   { id: "snail", label: "Snail", width: 96, height: 32 },
//   { id: "slug", label: "Slug", width: 96, height: 32 },
//   { id: "octopus", label: "Octopus", width: 100, height: 32 },
//   { id: "squid", label: "Squid", width: 96, height: 32 },
//   { id: "clam", label: "Clam", width: 96, height: 32 },
//   { id: "oyster", label: "Oyster", width: 96, height: 32 },
// ];

export const ROOT_IDS = ["acimosis"];
export const RAW_NODES: RawNode[] = [
  {
    id: "acimosis",
    nls_key: "WORD_DOG_ROOT",
    stem_label: "NA-1",
    synonyms: ["pahkwêsikan", "asikan"],
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
    width: 96,
    height: 32,
    children: [
      // "atim",
      // "nitêm",
      // "otêma",
      // "mikisimow",
      // "atimo-",
      // "simâkanisîwatim",
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
];
