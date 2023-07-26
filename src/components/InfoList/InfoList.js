import styles from "./InfoList.module.css";

const InfoList = ({ userInfo }) => {
  return (
    <ul className={styles.userList}>
      {userInfo.map((item) => (
        <li className={styles.userItem} key={item.username + item.age}>
          {item.username}({item.age} years old)
        </li>
      ))}
    </ul>
  );
};
export default InfoList;
