import { Fragment, useState } from "react";

import CoreConcept from "./components/CoreConcept.jsx";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";

import reactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  let [selectedTopic, setSelectedTopic] = useState("");

  const concepts = CORE_CONCEPTS.map((currentConcept) => {
    return (
      <CoreConcept
        key={currentConcept.title}
        image={currentConcept.image}
        title={currentConcept.title}
        description={currentConcept.description}
      />
    );
  });

  let tabContent = <p>Please select a topic.</p>;

  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <Header
        image={reactImg}
        description={reactDescriptions[genRandomInt(2)]}
      />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>{concepts}</ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isActive={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Component
            </TabButton>
            <TabButton
              isActive={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isActive={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isActive={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
