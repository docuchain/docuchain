import React, { useEffect, useState } from "react";
import { setDoc, doc, collection, getDocs } from "firebase/firestore";
import { dbService } from "../../apis/firebase";
import { useRecoilState, useRecoilValue } from "recoil";
import { userInfo } from "../../recoil/atom";
import { getUserInfo } from "../../recoil/selector";
const AddUser = () => {
  const userData = collection(dbService, "user");
  const [newUser, setNewUser] = useState({});
  const [Info, setInfo] = useRecoilState(userInfo);
  const [checked, setChecked] = useState(0);
  const [dashboardChecked, setDashboardChecked] = useState(false);
  const [blockChecked, setBlockChecked] = useState(false);
  const [transChecked, setTransChecked] = useState(false);
  const [nodeChecked, setNodeChecked] = useState(false);
  const [serviceChecked, setServiceChecked] = useState(false);

  async function submitHandler(e) {
    e.preventDefault();
    await setDoc(doc(userData, newUser.name), {
      role: newUser.role,
      name: newUser.name,
      email: newUser.email,
      team: newUser.team,
      //dashboard: newUser.dashboard,
      dashboard: dashboardChecked,
      block: blockChecked,
      trans: transChecked,
      node: nodeChecked,
      service: serviceChecked,
      usingService: newUser.usingService,
    });

    alert("추가완료");
  }

  function changeHandler(e) {
    setNewUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      // role: e.target.value,
      // name: e.target.value,
      // email: e.target.value,
      // team: e.target.value,
      // usingService: e.target.value,
      // dashboard: checkHandler(e),
      // block: e.target.checked,
      // trans: e.target.checked,
      // node: e.target.checked,
      // service: e.target.checked,
    }));
  }

  useEffect(() => {
    async function getUsers() {
      const data = await getDocs(userData);
      console.log(data);
      setInfo(
        data.docs.map((item) => ({
          ...item.data(),
        }))
      );

      // data.forEach((item) => {
      //   setName(item.id);
      // });
    }

    getUsers();
  }, []);

  const userValue = useRecoilValue(getUserInfo);
  //console.log(userValue);
  //console.log(userValue[2].email);

  //boolean
  const dashboardCheckHandler = (e) => {
    if (e.target.checked == true) {
      setDashboardChecked(true);
    } else {
      setDashboardChecked(false);
    }
  };

  const blockCheckHandler = (e) => {
    if (e.target.checked == true) {
      setBlockChecked(true);
    } else {
      setBlockChecked(false);
    }
  };

  const transCheckHandler = (e) => {
    if (e.target.checked == true) {
      setTransChecked(true);
    } else {
      setTransChecked(false);
    }
  };

  const nodeCheckHandler = (e) => {
    if (e.target.checked == true) {
      setNodeChecked(true);
    } else {
      setNodeChecked(false);
    }
  };

  const serviceCheckHandler = (e) => {
    if (e.target.checked == true) {
      setServiceChecked(true);
    } else {
      setServiceChecked(false);
    }
  };
  //console.log(checked);
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          유형
          <input
            type="text"
            name="role"
            // value="사용자"
            onChange={changeHandler}
          />
        </label>
        <br />
        <label>
          이름
          <input type="text" name="name" onChange={changeHandler} />
        </label>
        <br />
        <label>
          소속
          <input type="text" name="team" onChange={changeHandler} />
        </label>
        <br />
        <label>
          이메일(아이디)
          <input type="text" name="email" onChange={changeHandler} />
          {/* <select>
            <option>naver.com</option>
            <option>gmail.com</option>
          </select> */}
        </label>
        <br />
        {/* <label>
          비밀번호
          <input type="text" name="password" onChange={changeHandler} />
        </label>
        <br />
        <label>
          비밀번호 확인
          <input type="text" name="passwordCheck" onChange={changeHandler} />
        </label> */}
        <br />
        <label>
          상세정보 접근권한
          <input
            type="checkbox"
            name="dashboard"
            onChange={dashboardCheckHandler}
          />
          대시보드
          <input type="checkbox" name="block" onChange={blockCheckHandler} />
          블록
          <input type="checkbox" name="trans" onChange={transCheckHandler} />
          트랜잭션
          <input type="checkbox" name="node" onChange={nodeCheckHandler} />
          노드
          <input
            type="checkbox"
            name="service"
            onChange={serviceCheckHandler}
          />
          서비스
        </label>
        <br />
        <label>
          이용중인 서비스
          <input type="text" name="usingService" onChange={changeHandler} />
        </label>
        <br />
        <button className="addBtn">추가</button>
      </form>
    </div>
  );
};

export default AddUser;
