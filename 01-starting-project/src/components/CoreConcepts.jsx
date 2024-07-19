import CoreConcept from "./CoreConcept";

import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts() {
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

  return (
    <section id="core-concepts">
      <h1>Core concepts</h1>
      <ul>{concepts}</ul>
    </section>
  );
}
