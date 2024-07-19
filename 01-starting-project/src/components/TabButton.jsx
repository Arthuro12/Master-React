export default function TabButton(props) {
  console.log(props);
  return (
    <li>
      <button>{props.children}</button>
    </li>
  );
}
