import { Field, ErrorMessage } from "formik";
import { FormWrapper } from "./FormWrapper";
import classes from "./UserForm.module.css";

const UserForm = () => {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <Field name="firstName" type="text" placeholder="First Name" />
      <ErrorMessage
        name="firstName"
        component="div"
        className={classes.error}
      />
      <label>Last Name</label>
      <Field name="lastName" type="text" placeholder="Last Name" />
      <ErrorMessage name="lastName" component="div" className={classes.error} />
      <label>Age</label>
      <Field name="age" type="number" placeholder="Age" />
      <ErrorMessage name="age" component="div" className={classes.error} />
    </FormWrapper>
  );
};

export default UserForm;
