import { useState } from "react";

import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleUserInput(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  const isUserInputValid = userInput.duration > 0;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleUserInput} />
      {!isUserInputValid ? (
        <p className="center">Please enter a duration greater than zero.</p>
      ) : null}
      {isUserInputValid ? <Results input={userInput} /> : null}
    </>
  );
}

export default App;
