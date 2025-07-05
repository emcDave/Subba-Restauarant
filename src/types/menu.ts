// src/types/menu.ts

export interface MenuData {
  [category: string]:
    | string[]
    | {
        [subCategory: string]: string[];
      };
}
