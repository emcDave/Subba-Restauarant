import menuData from "./menu.json";
import type { MenuData } from "./types/menu";
import MenuCategory from "./components/MenuCategory";
import logo from './assets/subba.jpg';

import { useState } from "react";

const App: React.FC = () => {
  const data: MenuData = menuData;
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState("dark");
  const [selectedCategory, setSelectedCategory] = useState(Object.keys(data)[0]);
  // Get subcategories for selected category
  // Removed subcategory logic

  // Toggle theme
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  // Centralized filter function
  const filterItems = (arr: any[]) =>
    arr.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(search.toLowerCase()))
    );

  // If search is active, show results from the whole dataset
  let itemsToShow: any[] = [];
  if (search.trim()) {
    Object.values(data).forEach(categoryData => {
      if (Array.isArray(categoryData)) {
        itemsToShow.push(...filterItems(categoryData));
      } else {
        Object.values(categoryData).forEach(subItems => {
          itemsToShow.push(...filterItems(subItems));
        });
      }
    });
  } else {
    const categoryData = data[selectedCategory];
    if (Array.isArray(categoryData)) {
      itemsToShow = categoryData;
    } else if (categoryData) {
      // Flatten all subcategory items into one array
      itemsToShow = Object.values(categoryData).flat();
    }
  }

  return (
    <div className={theme === "dark" ? "theme-dark" : "theme-light"}>
      <header className="header">
        <div className="header-content horizontal space-between">
          <img src={logo} alt="Subba Logo" className="logo-circle" />
          <button
            className="theme-switch stylish-switch"
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            <span className="switch-slider" aria-hidden="true">
              {theme === "light" ? "🌞" : "🌜"}
            </span>
            <span className="switch-label">{theme === "light" ? "Light" : "Dark"} Mode</span>
          </button>
        </div>
      </header>
      <main className="container">
        <div className="search-bar-wrapper stylish-search" style={{marginBottom: 24}}>
          <label htmlFor="search-all" className="sr-only">Search menu</label>
          <input
            id="search-all"
            type="text"
            placeholder="Search menu..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="search-input"
            aria-label="Search menu"
          />
        </div>
        <div className="category-slider">
          {Object.keys(data).map(category => (
            <button
              key={category}
              className={`category-tab${selectedCategory === category ? " active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <h2 className="section-heading stylish-heading" style={{margin: '32px 0 16px', fontSize: '2rem', fontWeight: 700, textAlign: 'center', letterSpacing: '0.03em'}}>
          {selectedCategory}
        </h2>
        <MenuCategory
          title={selectedCategory}
          items={itemsToShow}
          search={search}
        />
      </main>
      <footer style={{
        textAlign: "center",
        padding: "1rem 0",
        fontSize: "0.9rem",
        color: theme === "dark" ? "#eee" : "#555",
        backgroundColor: theme === "dark" ? "#222" : "#f3f4f6",
        marginTop: "3rem"
      }}>
        © 2025 Subba Restaurant. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
