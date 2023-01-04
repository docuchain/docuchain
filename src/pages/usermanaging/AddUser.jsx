import React, { useState } from "react";
import { setDoc, doc, collection } from "firebase/firestore";
import { dbService } from "../../apis/firebase";
const AddUser = () => {
  const userData = collection(dbService, "user");
  const [newUser, setNewUser] = useState({});

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
    }));
  }

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
            onChange={changeHandler}
            true-value="yes"
            false-value="no"
          />
          대시보드
          <input
            type="checkbox"
            name="block"
            onChange={changeHandler}
            true-value="yes"
            false-value="no"
          />
          블록
          <input
            type="checkbox"
            name="trans"
            onChange={changeHandler}
            true-value="yes"
            false-value="no"
          />
          트랜잭션
          <input
            type="checkbox"
            name="node"
            onChange={changeHandler}
            true-value="yes"
            false-value="no"
          />
          노드
          <input
            type="checkbox"
            name="service"
            onChange={changeHandler}
            true-value="yes"
            false-value="no"
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
