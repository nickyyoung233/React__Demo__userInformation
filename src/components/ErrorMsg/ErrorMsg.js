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
      <header className={styles["error-head"]}>输入格式有误</header>
      <p>请输入有效的用户信息（不能为空）</p>
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
