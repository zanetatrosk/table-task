export interface CharacterData {
  ID: string;
  Name: string;
  Gender: string;
  Ability: string | null;
  "Minimal distance": string;
  Weight: string;
  Born: string;
  "In space since": string;
  "Beer consumption (l/y)": string;
  "Knows the answer?": string;
}

export interface NemesisData {
  ID: string;
  "Character ID": string;
  "Is alive?": string;
  Years: string;
}

export interface SecreteData {
  ID: string;
  "Nemesis ID": string;
  "Secrete Code": string;
}

export interface HierarchyRecord {
  id: string;
  data: CharacterData | NemesisData | SecreteData;
  children: HierarchyRecord[];
}

export type HierarchyData = HierarchyRecord[];
