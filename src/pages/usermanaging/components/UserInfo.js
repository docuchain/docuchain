import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  doc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import swal from "sweetalert";
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
    swal({
      text: "삭제하시겠습니까?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteDoc(doc(userData, userName));
        swal("삭제되었습니다", {
          icon: "success",
        });
        navigate(`/usermanaging`);
      } else {
        swal("취소하였습니다");
      }
    });
  }

  //업데이트
  async function updateData() {
    await updateDoc(doc(userData, userName), {
      dashboard: userDashboard,
      block: userBlock,
      trans: userTrans,
      node: userNode,
      service: userService,
    });

    swal("", "수정완료", "success");
    navigate(`/usermanaging`);
  }

  //submithandler
  function submitHandler(e) {
    e.preventDefault();
    updateData();
  }
  //checkbox state변경
  const changeDashboardHandler = (e) => {
    if (e.target.checked == true) {
      setUserDashboard(true);
    } else {
      setUserDashboard(false);
    }
  };
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
  console.log(userTrans);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>사용자 정보</h1>

        <div>이름 {userName}</div>
        <div>소속 {userTeam}</div>
        <div>이메일(아이디) {userEmail}</div>

        <label>
          <input
            type="checkbox"
            checked={userDashboard}
            onChange={changeDashboardHandler}
            disabled
          />
          대시보드
        </label>
        <label>
          <input
            type="checkbox"
            checked={userBlock}
            onChange={changeBlockHandler}
            disabled
          />
          블록
        </label>
        <label>
          <input
            type="checkbox"
            checked={userTrans}
            onChange={changeTransHandler}
          />
          트랜잭션
        </label>
        <label>
          <input
            type="checkbox"
            checked={userNode}
            onChange={changeNodeHandler}
          />
          노드
        </label>
        <label>
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
        <button type="button" onClick={deleteData}>
          사용자 삭제
        </button>
      </form>
    </div>
  );
};

export default UserInfo;
