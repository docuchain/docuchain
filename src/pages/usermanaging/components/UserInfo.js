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
// import Swal from "sweetalert2";
import { dbService } from "../../../apis/firebase";
import { useRecoilValue } from "recoil";
import { getTheme } from "../../../recoil/selector";
import swal from "sweetalert";
// import Swal from "sweetalert2";
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
    // if (window.confirm("정말 삭제합니까?")) {
    //   await deleteDoc(doc(userData, userName));
    //   swal("삭제되었습니다.");
    //   navigate(`/usermanaging`);
    // } else {
    //   swal("취소합니다.");
    // }
    // await swal({ text: "삭제하시겠습니까?", buttons: ["확인", "취소"] }).then(
    //   (isConfirm) => {
    //     console.log(isConfirm.buttons);
    //     if (isConfirm) {
    //       deleteDoc(doc(userData, userName));
    //       swal("삭제되었습니다.");
    //       navigate(`/usermanaging`);
    //     } else {
    //       swal("취소합니다.");
    //     }
    //   }
    // );
    // await Swal.fire({
    //   title: "정말로 그렇게 하시겠습니까?",
    //   text: "다시 되돌릴 수 없습니다. 신중하세요.",
    //   icon: "warning",
    //   showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
    //   confirmButtonColor: "#3085d6", // confrim 버튼 색깔 지정
    //   cancelButtonColor: "#d33", // cancel 버튼 색깔 지정
    //   confirmButtonText: "삭제", // confirm 버튼 텍스트 지정
    //   cancelButtonText: "취소", // cancel 버튼 텍스트 지정
    //   reverseButtons: true, // 버튼 순서 거꾸로
    // }).then((result) => {
    //   // 만약 Promise리턴을 받으면,
    //   if (result.isConfirmed) {
    //     // 만약 모달창에서 confirm 버튼을 눌렀다면
    //     deleteDoc(doc(userData, userName));
    //     Swal.fire("", "삭제되었습니다.", "success");
    //     navigate(`/usermanaging`);
    //   } else {
    //     Swal.fire("취소되었습니다");
    //   }
    // });
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
