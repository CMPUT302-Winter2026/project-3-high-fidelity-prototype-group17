export type RawNode = {
  id: string;
  nls_key: string;
  stem_label: string;
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

export type LayoutNode = RawNode & {
  x: number;
  y: number;
  isRoot: boolean;
  depth: number;
  angle: number;
  startAngle: number;
  endAngle: number;
  subtreeSize: number;
};

export type Edge = {
  id: string;
  x1: number;
  y1: number;
  cx1: number;
  cy1: number;
  cx2: number;
  cy2: number;
  x2: number;
  y2: number;
};
