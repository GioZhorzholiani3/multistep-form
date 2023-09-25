import { ErrorMessage, Field } from "formik";
import { FormWrapper } from "./FormWrapper";
import classes from "./AccountForm.module.css";

const AccountForm = () => {
  return (
    <FormWrapper title="Account">
      <label>Email</label>
      <Field name="email" type="email" placeholder="Email" />
      <ErrorMessage name="email" component="div" className={classes.error} />
      <label>Password</label>
      <Field name="password" type="password" placeholder="Password" />
      <ErrorMessage name="password" component="div" className={classes.error} />
    </FormWrapper>
  );
};

export default AccountForm;
