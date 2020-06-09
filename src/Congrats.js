import React from "react";
import PropTypes from "prop-types";
import LanguageContext from "./contexts/LanguageContext";
import stringsModule from "./helpers/strings";
/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false).
 */
const Congrats = (props) => {
  const language = React.useContext(LanguageContext);
  return (
    <>
      {props.success ? (
        <div data-test="component-congrats" className="alert alert-success">
          <span data-test="congrats-message">
            {stringsModule.getStringByLanguage(language, "congrats")}
          </span>
        </div>
      ) : (
        <div data-test="component-congrats" />
      )}
    </>
  );
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ success }) => {
  return { success };
};

export default Congrats;
