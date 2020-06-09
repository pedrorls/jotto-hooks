import React from "react";
import PropTypes from "prop-types";

export const LanguagePicker = ({ setLanguage }) => {
  const languages = [
    { code: "en", symbol: "🇺🇸" },
    { code: "emoji", symbol: "🤔" },
  ];
  return (
    <div data-test="language-picker-component">
      {languages.map((lang) => (
        <span
          data-test="language-icon"
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
        >
          {lang.symbol}
        </span>
      ))}
    </div>
  );
};

LanguagePicker.propTypes = {
  setLanguage: PropTypes.func.isRequired,
};
