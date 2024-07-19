import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";
import Header from "./components/Header/Header.jsx";

import reactImg from "./assets/react-core-concepts.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  return (
    <>
      <Header
        image={reactImg}
        description={reactDescriptions[genRandomInt(2)]}
      />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
