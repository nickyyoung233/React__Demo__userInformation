import { Fragment } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./ErrorMsg.module.css";

const ErrorMsg = ({ setIsError }) => {
  const onClickHandler = () => {
    setIsError(false);
  };
  return (
    <Fragment>
      <div onClick={onClickHandler} className={styles["error-backdrop"]} />
      <Card className={styles.error}>
        <header className={styles["error-head"]}>Invalid Input</header>
        <p>Please enter a valid name and age(non-empty values).</p>
        <footer>
          <Button onClick={onClickHandler}>Okay</Button>
        </footer>
      </Card>
    </Fragment>
  );
};
export default ErrorMsg;
