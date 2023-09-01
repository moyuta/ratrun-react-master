interface data {
  name: string;
}

export interface Languages {
  develops: data[];
  frameworks: data[];
  infrastructures: data[];
  designs: data[];
  others: data[];
}

export interface Keywords {
  id: number;
  name: string;
}

export interface Prefectures {
  id: number;
  name: string;
  area: string;
}

export interface Matters {
  id: number;
  title: string;
  area: string;
  contract: string;
  description: string;
  language: string;
  unit_price: string;
}
