export default function TabButton({ children, isActive, onSelect }) {
  return (
    <li>
      <button className={isActive ? "active" : ""} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
