import React from "react";
import hookActions from "./actions/hookActions";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "setSecredWord":
      return { ...state, secretWord: action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, { secretWord: null });

  const setSecretWord = (secretWord) =>
    dispatch({ type: "setSecretWord", payload: secretWord });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  return <div data-test="app-component" />;
};

export default App;
