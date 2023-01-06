import React from "react";
import UserInfo from "./components/UserInfo";
import { dbService } from "../../apis/firebase";
import { collection } from "firebase/firestore";
const UserModify = () => {
  const userData = collection(dbService, "user");
  return (
    <div>
      <UserInfo userData={userData} />
    </div>
  );
};

export default UserModify;
