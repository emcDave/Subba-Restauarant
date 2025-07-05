import { useState } from "react";
import MenuItem from "./MenuItem";

interface MenuCategoryProps {
  title: string;
  items: string[] | { [subCategory: string]: string[] };
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ title, items }) => {
  const [openSub, setOpenSub] = useState<Record<string, boolean>>({});

  const toggleSub = (sub: string) => {
    setOpenSub((prev) => ({ ...prev, [sub]: !prev[sub] }));
  };

  return (
    <div className="category">
      <h2>{title}</h2>

      {Array.isArray(items) ? (
        <div className="grid">
          {items.map((item, idx) => (
            <MenuItem key={idx} name={item} />
          ))}
        </div>
      ) : (
        Object.entries(items).map(([sub, subItems]) => (
          <div key={sub} className="sub-category">
            <button className="sub-toggle" onClick={() => toggleSub(sub)}>
              {sub} {openSub[sub] ? "▲" : "▼"}
            </button>

            {openSub[sub] && (
              <div className="grid">
                {subItems.map((item, idx) => (
                  <MenuItem key={idx} name={item} />
                ))}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default MenuCategory;
