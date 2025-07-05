import menuData from "./menu.json";
import type { MenuData } from "./types/menu";
import MenuCategory from "./components/MenuCategory";
import logo from './assets/subba.jpg';
const App: React.FC = () => {
  const data: MenuData = menuData;

  return (
    <>
     <header className="header">
  <div className="header-content vertical">
    <img src={logo} alt="Subba Logo" className="logo-circle" />
    <h1>Subba Restaurant Menu</h1>
  </div>
</header>
      <main className="container">
        {Object.entries(data).map(([category, items]) => (
          <MenuCategory key={category} title={category} items={items} />
        ))}
      </main>
      <footer style={{
  textAlign: "center",
  padding: "1rem 0",
  fontSize: "0.9rem",
  color: "#555",
  backgroundColor: "#f3f4f6",
  marginTop: "3rem"
}}>
  © 2025 Subba Restaurant. All rights reserved.
</footer>
    </>
  );
};

export default App;
