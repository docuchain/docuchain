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

  async function submitHandler(e) {
    e.preventDefault();
    await setDoc(doc(userData, newUser.name), {
      role: newUser.role,
      name: newUser.name,
      email: newUser.email,
      team: newUser.team,
      dashboard: newUser.dashboard,
      block: newUser.block,
      trans: newUser.trans,
      node: newUser.node,
      service: newUser.service,
      usingService: newUser.usingService,
    });

    alert("추가완료");
  }

  function changeHandler(e) {
    setNewUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      dashboard: e.target.checked,
      block: e.target.checked,
      trans: e.target.checked,
      node: e.target.checked,
      service: e.target.checked,
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
  console.log(userValue);
  console.log(userValue[2].email);

  //boolean
  const checkHandler = (e) => {
    if (e.target.checked == true) {
      setChecked(1);
    } else {
      setChecked(0);
    }
  };
  console.log(checked);
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
            onChange={(e) => checkHandler(e)}
          />
          대시보드
          <input
            type="checkbox"
            name="block"
            onChange={(e) => checkHandler(e)}
          />
          블록
          <input
            type="checkbox"
            name="trans"
            onChange={(e) => checkHandler(e)}
          />
          트랜잭션
          <input
            type="checkbox"
            name="node"
            onChange={(e) => checkHandler(e)}
          />
          노드
          <input
            type="checkbox"
            name="service"
            onChange={(e) => checkHandler(e)}
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
