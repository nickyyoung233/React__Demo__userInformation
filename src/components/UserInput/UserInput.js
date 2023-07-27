import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./UserInput.module.css";

const UserInput = ({ manageUserInfo }) => {
  const baseUserInfo = {
    username: "",
    age: "",
  };
  let [userInfo, setUerInfo] = useState(baseUserInfo);
  const setUserName = (e) => {
    setUerInfo((pre) => {
      return { ...pre, username: e.target.value };
    });
  };
  const setUserAge = (e) => {
    setUerInfo((pre) => {
      return { ...pre, age: e.target.value };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    manageUserInfo({
      username: userInfo.username,
      age: userInfo.age,
    });
    setUerInfo(baseUserInfo);
  };
  return (
    <Card className={styles.form}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          onChange={setUserName}
          value={userInfo.username}
          type="text"
          id="username"
        />
        <label htmlFor="age">Age(Years)</label>
        <input
          value={userInfo.age}
          onChange={setUserAge}
          type="number"
          min="0"
          id="age"
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default UserInput;
