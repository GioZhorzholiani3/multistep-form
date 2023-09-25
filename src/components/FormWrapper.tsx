import { ReactNode } from "react";
import styles from "./FormWrapper.module.css"; // Import the CSS module

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 className={styles.title}>{title}</h2> {/* Apply CSS class */}
      <div className={styles.container}>{children}</div> {/* Apply CSS class */}
    </>
  );
}
