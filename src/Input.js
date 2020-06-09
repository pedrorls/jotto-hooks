import React from "react";
import propTypes from "prop-types";
import LanguageContext from "./contexts/LanguageContext";
import stringsModule from "./helpers/strings";

export const Input = ({ secretWord }) => {
  const language = React.useContext(LanguageContext);
  const [currentGuess, setCurrentGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentGuess("");
  };

  return (
    <div data-test="input-component">
      <form className="form-inline">
        <input
          data-test="input-box"
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
          className="mb-2 mx-sm-3"
          type="text"
          placeholder={stringsModule.getStringByLanguage(
            language,
            "guessInputPlaceholder"
          )}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={handleSubmit}
        >
          {stringsModule.getStringByLanguage(language, "submit")}
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secretWord: propTypes.string.isRequired,
};

Input.defaultProps = {
  secretWord: "party",
};
