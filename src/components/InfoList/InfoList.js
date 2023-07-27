import styles from "./InfoList.module.css";
import Card from "../UI/Card";

const InfoList = ({ userInfo }) => {
  return (
    <Card>
      <ul className={styles.userList}>
        {userInfo.map((item) => (
          <li className={styles.userItem} key={item.username + item.age}>
            {item.username}({item.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default InfoList;
