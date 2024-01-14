import InputField from "./InputField";

const Form = () => {
  return (
    <div className="flex flex-col items-center m-5 justify-evenly ">
      <h2 className="mb-5 text-4xl">Customer Data </h2>
      <div className="w-1/4">
        <InputField
          label="Pregnancies"
          errorMessage="Please enter pregnancy, format: integer"
        />
      </div>
    </div>
  );
};

export default Form;
