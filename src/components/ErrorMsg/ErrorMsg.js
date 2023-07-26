import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./ErrorMsg.module.css";

const ErrorMsg = ({ setIsError }) => {
  const onClickHandler = () => {
    setIsError(false);
  };
  return (
    <div onClick={onClickHandler} className={styles.error}>
      <Card className={styles.errorContainer}>
        <header className={styles.errorHeader}>Invalid Input</header>
        <p>Please enter a valid name and age(non-empty values).</p>
        <Button onClick={onClickHandler}>Okay</Button>
      </Card>
    </div>
  );
};
export default ErrorMsg;
