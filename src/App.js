import React from "react";
import hookActions from "./actions/hookActions";
import LanguageContext from "./contexts/LanguageContext";
import { LanguagePicker } from "./LanguagePicker";
import { Input } from "./Input";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "setSecredWord":
      return { ...state, secretWord: action.payload };
    case "setLanguage":
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    secretWord: null,
    language: "en",
  });

  const setSecretWord = (secretWord) =>
    dispatch({ type: "setSecretWord", payload: secretWord });

  const setLanguage = (language) =>
    dispatch({ type: "setLanguage", payload: language });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  return (
    <React.Fragment>
      {state.secretWord ? (
        <div className="container" data-test="app-component">
          <h1>Jotto app</h1>
          <LanguageContext.Provider value={state.language}>
            <LanguagePicker setLanguage={setLanguage} />
            <Input secretWord={state.secretWord} />
          </LanguageContext.Provider>
          }
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
