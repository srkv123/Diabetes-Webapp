import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { useState } from "react";

const InputField = ({ label, errorMessage }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const isError = inputValue.trim() === "";

  return (
    <>
      <TextField
        id={label}
        label={label}
        variant="outlined"
        helperText={isError ? errorMessage : " "}
        margin="dense"
        error={isError}
        value={inputValue}
        onChange={handleChange}
        fullWidth
        required
      />
    </>
  );
};

export default InputField;

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
};
