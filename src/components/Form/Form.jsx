import InputField from "./InputField";
import Button from "@mui/material/Button";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    pregnancies: "",
    glucose: "",
    bloodPressure: "",
    skinThickness: "",
    insulin: "",
    bmi: "",
    diabetesPedigreeFunction: "",
    age: "",
    outcome: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    pregnancies: "",
    glucose: "",
    bloodPressure: "",
    skinThickness: "",
    insulin: "",
    bmi: "",
    diabetesPedigreeFunction: "",
    age: "",
    outcome: "",
  });

  const validateField = (name, value) => {
    const integerRegex = /^\d+$/;
    const errorMessage = `Please enter ${name}, format: integer`;

    if (value.trim === "") {
      return "This field is required.";
    } else if (!integerRegex.test(value)) {
      return errorMessage;
    }
    return "";
  };

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = () => {
    const hasErrors = Object.values(validationErrors).some(
      (error) => error !== "",
    );

    if (hasErrors) {
      console.error("Form contains validation errors. Please correct them.");
    } else {
      console.log("Submitting data:", formData);
      // Add your API call here
    }
  };

  return (
    <div className="flex flex-col items-center m-5 justify-evenly ">
      <h2 className="mb-5 text-4xl">Customer Data </h2>
      <div className="w-full sm:w-1/4">
        {Object.keys(formData).map((fieldName) => (
          <InputField
            key={fieldName}
            label={fieldName}
            value={formData[fieldName]}
            errorMessage={validationErrors[fieldName]}
            onInputChange={(value) => handleInputChange(fieldName, value)}
          />
        ))}
        <div className="flex flex-row justify-center mt-5">
          <Button variant="contained" onClick={handleSubmit} className="mt-5 ">
            Predict the condition
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Form;
