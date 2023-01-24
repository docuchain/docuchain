import React, { useEffect, useState } from "react";
import { setDoc, doc, collection, getDocs } from "firebase/firestore";
import { dbService, authService } from "../../apis/firebase";
import { useRecoilState, useRecoilValue } from "recoil";
import { userInfo } from "../../recoil/atom";
import { getUserInfo } from "../../recoil/selector";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { Input } from "@mui/material";
import { getTheme } from "../../recoil/selector";
import Button from "@mui/material/Button";

const AddUser = () => {
  const userData = collection(dbService, "user");
  const [newUser, setNewUser] = useState({});
  const [dashboardChecked, setDashboardChecked] = useState(true);
  const [blockChecked, setBlockChecked] = useState(true);
  const [transChecked, setTransChecked] = useState(false);
  const [nodeChecked, setNodeChecked] = useState(false);
  const [serviceChecked, setServiceChecked] = useState(false);
  const [usingAserviceChecked, setUsingAServiceChecked] = useState(false);
  const [usingBserviceChecked, setUsingBServiceChecked] = useState(false);
  const [role, setRole] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  async function submitHandler(e) {
    await isEmailCheck();
    await isPasswordCheck();

    if (isEmail === false || isPassword === false) {
      swal("", "다시 입력해주세요", "");
      e.preventDefault();
      return;
    }
    if (newUser.password !== newUser.passwordCheck) {
      swal("", "비밀번호와 비밀번호 재확인이 다릅니다.", "error");
      e.preventDefault();
      return;
    }
    await setDoc(doc(userData, newUser.name), {
      role: role,
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      team: newUser.team,
      dashboard: dashboardChecked,

      block: blockChecked,
      trans: transChecked,
      node: nodeChecked,
      service: serviceChecked,
      usingServiceA: usingAserviceChecked,
      usingServiceB: usingBserviceChecked,
    });

    registerUser();

    swal("", "추가완료", "success");
  }

  //회원가입
  const registerUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        authService,
        newUser.email,
        newUser.password
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  function changeHandler(e) {
    setNewUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  //roleHandler
  const changeRoleHandler = (e) => {
    setRole(e.target.value);
  };

  useEffect(() => {
    async function getUsers() {
      const data = await getDocs(userData);
      console.log(data);
    }

    getUsers();
  }, []);

  const userValue = useRecoilValue(getUserInfo);

  const transCheckHandler = (e) => {
    if (e.target.checked === true) {
      setTransChecked(true);
    } else {
      setTransChecked(false);
    }
  };

  const nodeCheckHandler = (e) => {
    if (e.target.checked === true) {
      setNodeChecked(true);
    } else {
      setNodeChecked(false);
    }
  };

  const serviceCheckHandler = (e) => {
    if (e.target.checked === true) {
      setServiceChecked(true);
    } else {
      setServiceChecked(false);
    }
  };

  const usingAserviceHandler = (e) => {
    if (e.target.checked === true) {
      setUsingAServiceChecked(true);
    } else {
      setUsingAServiceChecked(false);
    }
  };
  const usingBserviceHandler = (e) => {
    if (e.target.checked === true) {
      setUsingBServiceChecked(true);
    } else {
      setUsingBServiceChecked(false);
    }
  };

  //정규표현식
  const isEmailCheck = async () => {
    const regex = /^\S+@\S+$/i;
    if (regex.test(newUser.email)) {
      setIsEmail(true);
    }
  };

  const isPasswordCheck = async () => {
    const regex =
      /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8}$/;
    if (regex.test(newUser.password)) {
      setIsPassword(true);
    }
  };

  return (
    <div className="boxLayout1 boxShadow">
      <div className="Myinfo">
        <h2>ADD USER</h2>
        <form onSubmit={handleSubmit(submitHandler)}>
          <label>
            <h5>
              유형 :
              <select
                name="role"
                value={role}
                onChange={changeRoleHandler}
                className="userInput"
              >
                <option value="none">선택하세요</option>
                <option value="사용자">사용자</option>
                <option value="관리자">관리자</option>
              </select>
            </h5>
          </label>

          <label>
            <h5>
              이름 :
              <Input
                type="text"
                name="name"
                onChange={changeHandler}
                className="userInput"
                placeholder="이름을 입력해주세요."
              />
            </h5>
          </label>

          <label>
            <h5>
              소속 :
              <Input
                type="text"
                name="team"
                onChange={changeHandler}
                className="userInput"
                placeholder="소속을 입력해주세요."
              />
            </h5>
          </label>

          <label>
            <h5>
              이메일(아이디) :
              <Input
                type="text"
                name="email"
                onChange={changeHandler}
                placeholder="이메일을 입력해주세요."
                className="userInput"
              />
            </h5>
          </label>

          <label>
            <h5>
              비밀번호 :
              <Input
                type="text"
                name="password"
                onChange={changeHandler}
                placeholder="비밀번호를 입력해주세요"
                className="userInput"
              />
            </h5>
          </label>

          <label>
            <h5>
              비밀번호 재확인 :
              <Input
                type="text"
                name="passwordCheck"
                onChange={changeHandler}
                className="userInput"
              />
            </h5>

            <span>
              <p className="addErrorText">
                ※ 비밀번호는 최소 8자리 이상으로 영어대문자, 소문자, 숫자,
                특수문자 중 3종류 이상 입력 필수
              </p>
            </span>
          </label>

          <label>
            <h5 className="addUserInput ">
              상세정보 접근권한 :
              <input type="checkbox" name="dashboard" defaultChecked disabled />
              대시보드
              <input type="checkbox" name="block" defaultChecked disabled />
              블록
              <input
                type="checkbox"
                name="trans"
                onChange={transCheckHandler}
              />
              트랜잭션
              <input type="checkbox" name="node" onChange={nodeCheckHandler} />
              노드
              <input
                type="checkbox"
                name="service"
                onChange={serviceCheckHandler}
              />
              서비스
            </h5>
          </label>

          <label>
            <h5 className="addUserInput">
              이용중인 서비스 :
              <input
                type="checkbox"
                name="serviceA"
                onChange={usingAserviceHandler}
              />
              A서비스
              <input
                type="checkbox"
                name="serviceB"
                onChange={usingBserviceHandler}
              />
              B서비스
            </h5>
          </label>
          <Button type="submit" variant="outlined" className="addBtn">
            추가
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
