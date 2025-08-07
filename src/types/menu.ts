// src/types/menu.ts

export interface MenuItem {
  name: string;
  price?: number;
  description?: string;
  img?: string;
}

export interface MenuData {
  [category: string]:
    | MenuItem[]
    | {
        [subCategory: string]: MenuItem[];
      };
}
