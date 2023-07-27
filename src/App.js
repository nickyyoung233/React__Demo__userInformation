// import React, { useState } from "react";
import React, { useState, Fragment } from "react";

import Card from "./components/UI/Card";

import UserInput from "./components/UserInput/UserInput";
import InfoList from "./components/InfoList/InfoList";
import ErrorMsg from "./components/ErrorMsg/ErrorMsg";

function App() {
  const [userInfo, setUserInfo] = useState([]);
  const [isError, setIsError] = useState(false);
  let showList = false;
  const manageUserInfo = (newUserInfo) => {
    if (
      newUserInfo.username.trim().length === 0 ||
      newUserInfo.age.trim().length === 0
    ) {
      setIsError(true);
    } else {
      setUserInfo((pre) => [...pre, newUserInfo]);
      setIsError(false);
    }
  };
  if (userInfo.length > 0) showList = true;
  return (
    <Fragment>
      <Card>
        <UserInput manageUserInfo={manageUserInfo} />
        {showList && <InfoList userInfo={userInfo} />}
      </Card>
      {isError && <ErrorMsg setIsError={setIsError} />}
    </Fragment>
  );
}

export default App;
