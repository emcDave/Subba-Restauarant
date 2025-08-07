
import { useState } from "react";
import MenuItem from "./MenuItem";
import type { MenuItem as MenuItemType } from "../types/menu";

interface MenuCategoryProps {
  title: string;
  items: MenuItemType[] | { [subCategory: string]: MenuItemType[] };
  search?: string;
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ title, items, search = "" }) => {
  const [openSub, setOpenSub] = useState<Record<string, boolean>>({});

  const toggleSub = (sub: string) => {
    setOpenSub((prev) => ({ ...prev, [sub]: !prev[sub] }));
  };

  // Filter items by search term
  const filterItems = (arr: MenuItemType[]) =>
    arr.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(search.toLowerCase()))
    );

  return (
    <div className="category">
      <h2>{title}</h2>

      {Array.isArray(items) ? (
        <div className="grid mobile-grid">
          {filterItems(items).map((item, idx) => (
            <MenuItem key={idx} item={item} />
          ))}
        </div>
      ) : (
        Object.entries(items).map(([sub, subItems]) => {
          const filteredSubItems = filterItems(subItems);
          if (filteredSubItems.length === 0) return null;
          return (
            <div key={sub} className="sub-category">
              <button
                className="sub-toggle"
                onClick={() => toggleSub(sub)}
                aria-expanded={!!openSub[sub]}
                aria-controls={`subcategory-${sub}`}
                tabIndex={0}
                style={{width: "100%"}}
              >
                <span style={{fontWeight:600}}>{sub}</span> <span aria-hidden="true">{openSub[sub] ? "▲" : "▼"}</span>
              </button>

              <div
                id={`subcategory-${sub}`}
                role="region"
                aria-hidden={!openSub[sub]}
                style={{
                  maxHeight: openSub[sub] ? "1000px" : "0",
                  overflowX:"hidden",
                  overflowY: openSub[sub] ? "auto" : "hidden",
                  transition: "max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                }}
              >
                {openSub[sub] && (
                  <div className="grid mobile-grid">
                    {filteredSubItems.map((item, idx) => (
                      <MenuItem key={idx} item={item} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default MenuCategory;
