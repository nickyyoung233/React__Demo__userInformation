import { useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./UserInput.module.css";

const UserInput = ({ manageUserInfo }) => {
  const nameInput = useRef();
  const ageInput = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(nameInput.current.value, ageInput.current.value);
    manageUserInfo({
      username: nameInput.current.value,
      age: ageInput.current.value,
    });
    nameInput.current.value = "";
    ageInput.current.value = "";
  };
  return (
    <Card className={styles.form}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" ref={nameInput} />
        <label htmlFor="age">Age(Years)</label>
        <input type="number" min="0" id="age" ref={ageInput} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default UserInput;
