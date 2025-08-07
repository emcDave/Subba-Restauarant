// src/components/MenuItem.tsx

import type { MenuItem as MenuItemType } from "../types/menu";

interface MenuItemProps {
  item: MenuItemType;
}


import { useState } from "react";

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <div className="menu-card" onClick={() => setShowPopup(true)} tabIndex={0} role="button" aria-label={`Show details for ${item.name}`}> 
        <div className="menu-card-img-wrapper">
          <img src={item.img || "placeholder.jpg"} alt={item.name} className="menu-card-img" />
        </div>
        <div className="menu-card-info">
          <span className="menu-card-name">{item.name}</span>
          {item.price !== undefined && (
            <span className="menu-card-price">${item.price.toFixed(2)}</span>
          )}
        </div>
      </div>
      {showPopup && (
        <div className="menu-popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="menu-popup" onClick={e => e.stopPropagation()}>
            <h3>{item.name}</h3>
            <img src={item.img || "placeholder.jpg"} alt={item.name} className="menu-popup-img" />
            <p className="menu-popup-desc">{item.description}</p>
            <button className="menu-popup-close" onClick={() => setShowPopup(false)} aria-label="Close">Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuItem;
