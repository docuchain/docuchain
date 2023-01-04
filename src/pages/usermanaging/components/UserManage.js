import React from "react";
import { Link } from "react-router-dom";
import UserPage from "./UserPage";
import { dbService } from "../../../apis/firebase";
import { collection } from "firebase/firestore";

const UserManage = () => {
  const userData = collection(dbService, "user");

  //삭제
  return (
    <div>
      <button>
        <Link to="/usermanaging/adduser">사용자 추가</Link>
      </button>
      <UserPage userData={userData} />
    </div>
  );
};

export default UserManage;
