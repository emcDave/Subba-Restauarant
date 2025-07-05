// src/components/MenuItem.tsx
interface MenuItemProps {
  name: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name }) => (
  <div className="menu-item">
    <p>{name}</p>
  </div>
);

export default MenuItem;
