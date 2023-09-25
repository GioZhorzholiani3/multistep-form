import { ErrorMessage, Field } from "formik";
import { FormWrapper } from "./FormWrapper";
import classes from "../shared/Error.module.css";

const AddressForm = () => {
  return (
    <FormWrapper title="Address">
      <label>Address</label>
      <Field name="address" type="text" placeholder="Address" />
      <ErrorMessage name="address" component="div" className={classes.error} />
      <label>City</label>
      <Field name="city" type="text" placeholder="City" />
      <ErrorMessage name="city" component="div" className={classes.error} />
      <label>State</label>
      <Field name="state" type="text" placeholder="State" />
      <ErrorMessage name="state" component="div" className={classes.error} />
      <label>Zip</label>
      <Field name="zip" type="number" placeholder="Zip" />
      <ErrorMessage name="zip" component="div" className={classes.error} />
    </FormWrapper>
  );
};

export default AddressForm;
