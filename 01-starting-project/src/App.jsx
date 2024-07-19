import CoreConcept from "./components/CoreConcept.jsx";
import Header from "./components/Header.jsx";

import reactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.js";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  // const mappedList = CORE_CONCEPTS.map((currConcept) => {
  //   return (
  //     <CoreConcept
  //       image={currConcept.image}
  //       title={currConcept.title}
  //       description={currConcept.description}
  //     />
  //   );
  // });

  return (
    <div>
      <Header
        image={reactImg}
        description={reactDescriptions[genRandomInt(2)]}
      />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
