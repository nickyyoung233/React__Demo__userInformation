import { Fragment } from "react";
import ReactDOM from "react-dom";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./ErrorMsg.module.css";

const ErrorMsg = ({ setIsError }) => {
  const onClickHandler = () => {
    setIsError(false);
  };
  const Backdrop = (
    <div onClick={onClickHandler} className={styles["error-backdrop"]} />
  );
  const Modal = (
    <Card className={styles.error}>
      <header className={styles["error-head"]}>Invalid Input</header>
      <p>Please enter a valid name and age(non-empty values).</p>
      <footer>
        <Button onClick={onClickHandler}>Okay</Button>
      </footer>
    </Card>
  );
  return (
    <Fragment>
      {ReactDOM.createPortal(
        Backdrop,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(Modal, document.getElementById("overlay-root"))}
    </Fragment>
  );
};
export default ErrorMsg;
