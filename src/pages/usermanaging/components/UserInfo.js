import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  doc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  collection,
} from "firebase/firestore";
import { dbService } from "../../../apis/firebase";

const UserInfo = (props) => {
  // users 데이터 담기
  const [users, setUsers] = useState([]);
  // 데이터 불러오기
  const { userData } = props;

  useEffect(() => {
    async function getUsersRef() {
      const data = await getDocs(userData);
      console.log(data);
      setUsers(
        data.docs.map((item) => ({
          ...item.data(),
        }))
      );
    }

    getUsersRef();
  }, []);
  const { id } = useParams();

  const [userName, setUserName] = useState();
  const [userTeam, setUserTeam] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userRole, setUserRole] = useState();
  //체크박스
  const [userDashboard, setUserDashboard] = useState("");
  const [userBlock, setUserBlock] = useState("");
  const [userTrans, setUserTrans] = useState("");
  const [userNode, setUserNode] = useState("");
  const [userService, setUserService] = useState("");

  // 이전 페이지 이동
  const navigate = useNavigate();
  const toUsers = () => {
    navigate(`/usermanaging`);
  };

  useEffect(() => {
    async function getUsers() {
      const data = await query(userData, where("name", "==", id));
      const querySnapshot = await getDocs(data);

      querySnapshot.forEach((item) => {
        setUserName(item.data().name);
        setUserTeam(item.data().team);
        setUserEmail(item.data().email);
        setUserDashboard(item.data().dashboard);
        setUserBlock(item.data().block);
        setUserTrans(item.data().trans);
        setUserNode(item.data().node);
        setUserService(item.data().service);
        setUserRole(item.data().role);
      });
    }
    getUsers();
  }, []);

  //삭제
  async function deleteData() {
    if (window.confirm("정말 삭제합니까?")) {
      await deleteDoc(doc(userData, userName));
      alert("삭제되었습니다.");
      navigate(`/usermanaging`);
    } else {
      alert("취소합니다.");
    }
  }

  //업데이트
  // async function updateData() {
  //   await updateDoc(doc(userData, userName), {
  //     name: name,
  //     color: color,
  //     taste: taste,
  //     price: price,
  //     count: count,
  //   });

  //   alert("수정완료");
  //   navigate(`/product`);
  // }

  // useEffect(() => {

  //   setUserDashboard(userDashboard);
  // }, []);

  // 체크박스
  const changeDashboardHandler = (e) => {
    if (e.target.checked == true) {
      setUserDashboard(true);
    } else {
      setUserDashboard(false);
    }
  };
  //console.log(userDashboard);
  const changeBlockHandler = (e) => {
    if (e.target.checked == true) {
      setUserBlock(true);
    } else {
      setUserBlock(false);
    }
  };
  const changeTransHandler = (e) => {
    if (e.target.checked == true) {
      setUserTrans(true);
    } else {
      setUserTrans(false);
    }
  };
  const changeNodeHandler = (e) => {
    if (e.target.checked == true) {
      setUserNode(true);
    } else {
      setUserNode(false);
    }
  };
  const changeServiceHandler = (e) => {
    if (e.target.checked == true) {
      setUserService(true);
    } else {
      setUserService(false);
    }
  };

  return (
    <div>
      <h1>사용자 정보</h1>

      <div>이름 {userName}</div>
      <div>소속 {userTeam}</div>
      <div>이메일(아이디) {userEmail}</div>

      <label>
        <input
          type="checkbox"
          checked={userDashboard}
          onChange={changeDashboardHandler}
        />
        대시보드
        <input
          type="checkbox"
          checked={userBlock}
          onChange={changeBlockHandler}
        />
        블록
        <input
          type="checkbox"
          checked={userTrans}
          onChange={changeTransHandler}
        />
        트랜잭션
        <input
          type="checkbox"
          checked={userNode}
          onChange={changeNodeHandler}
        />
        노드
        <input
          type="checkbox"
          checked={userService}
          onChange={changeServiceHandler}
        />
        서비스
      </label>
      <div>유형 {userRole}</div>

      <button onClick={toUsers}>취소</button>
      <button>정보 변경</button>
      <button onClick={deleteData}>사용자 삭제</button>
    </div>
  );
};

export default UserInfo;
