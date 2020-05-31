import React from "react";
import hookActions from "./actions/hookActions";
import { Input } from "./Input";
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

  return (
    <React.Fragment>
      {state.secretWord ? (
        <div className="container" data-test="app-component">
          <Input secretWord={state.secretWord} />
        </div>
      ) : (
        <div className="container" data-test="spinner-component">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading ...</span>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default App;
