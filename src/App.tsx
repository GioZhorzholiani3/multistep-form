import classes from "./App.module.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import useMultistepForm from "./hooks/useMultistepForm";
import UserForm from "./components/UserForm";
import AddressForm from "./components/AddressForm";
import AccountForm from "./components/AccountForm";

const initialValues = {
  firstName: "",
  lastName: "",
  age: 1,
  address: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

// const validationSchema = Yup.object({
//   firstName: Yup.string().required("Required"),
//   lastName: Yup.string().required("Required"),
//   age: Yup.number().required("Required").min(1, "Age must be greater than 0"),
//   address: Yup.string().required("Required"),
//   city: Yup.string().required("Required"),
//   state: Yup.string().required("Required"),
//   zip: Yup.number().required("Required"),
//   email: Yup.string().required("Required").email("Invalid email address"),
//   password: Yup.string().required("Required"),
// });

const validationScemaForUserForm = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  age: Yup.number().required("Required").min(1, "Age must be greater than 0"),
});

const validationSchemaForAddressForm = Yup.object({
  address: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  zip: Yup.number().required("Required"),
});

const validationSchemaForAccountForm = Yup.object({
  email: Yup.string().required("Required").email("Invalid email address"),
  password: Yup.string().required("Required"),
});

const currentValidation = (currentStepIndex: number) => {
  switch (currentStepIndex) {
    case 0:
      return validationScemaForUserForm;
    case 1:
      return validationSchemaForAddressForm;
    case 2:
      return validationSchemaForAccountForm;
    default:
      return Yup.object({});
  }
};

const App = () => {
  const { steps, isLastStep, currentStepIndex, step, isFirstStep, prev, next } =
    useMultistepForm([<UserForm />, <AddressForm />, <AccountForm />]);

  console.log(currentValidation(currentStepIndex));
  return (
    <div className={classes.card}>
      <Formik
        initialValues={initialValues}
        validationSchema={currentValidation(currentStepIndex)}
        onSubmit={(values) => {
          console.log(values);
          next();

          if (isLastStep) {
            alert(JSON.stringify(values, null, 2));
            window.location.reload();
          }
        }}
      >
        <Form>
          <div className={classes.step}>
            {currentStepIndex + 1} / {steps.length}
          </div>

          {step}

          <div className={classes.btns}>
            {!isFirstStep && (
              <button type="button" onClick={prev}>
                Back
              </button>
            )}
            <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default App;
