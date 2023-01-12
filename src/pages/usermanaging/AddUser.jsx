import React, { useEffect, useState } from "react";
import { setDoc, doc, collection, getDocs } from "firebase/firestore";
import { dbService,authService } from "../../apis/firebase";
import { useRecoilState, useRecoilValue } from "recoil";
import { userInfo } from "../../recoil/atom";
import { getUserInfo } from "../../recoil/selector";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import swal from "sweetalert";


const AddUser = () => {
  const userData = collection(dbService, "user");
  const [newUser, setNewUser] = useState({});
  const [Info, setInfo] = useRecoilState(userInfo);
  const [checked, setChecked] = useState(0);
  const [dashboardChecked, setDashboardChecked] = useState(true);
  const [blockChecked, setBlockChecked] = useState(true);
  const [transChecked, setTransChecked] = useState(false);
  const [nodeChecked, setNodeChecked] = useState(false);
  const [serviceChecked, setServiceChecked] = useState(false);
  const [usingAserviceChecked, setUsingAServiceChecked] = useState(false);
  const [usingBserviceChecked, setUsingBServiceChecked] = useState(false);
  const [role, setRole] = useState("");
  const [isEmail,setIsEmail] = useState(false);
  const [isPassword,setIsPassword] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  async function submitHandler(e) {
   await isEmailCheck();
   await isPasswordCheck();

    if(isEmail===false||isPassword===false) {
      swal("","다시 입력해주세요","error");
      e.preventDefault();
      return;
    }
    if(newUser.password!==newUser.passwordCheck) {
      swal("","비밀번호와 비밀번호 재확인이 다릅니다.","error");
      e.preventDefault();
      return;
    }
      await setDoc(doc(userData, newUser.name), {
      role: role,
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      team: newUser.team,
      //dashboard: newUser.dashboard,
      dashboard: dashboardChecked,

      block: blockChecked,
      trans: transChecked,
      node: nodeChecked,
      service: serviceChecked,
      usingServiceA: usingAserviceChecked,
      usingServiceB: usingBserviceChecked,
    });
    
      registerUser();
    
      swal("","추가완료","success");
    } 

//회원가입
  const registerUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        authService,
        newUser.email,
        newUser.password,
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  
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
  //roleHandler
  const changeRoleHandler = (e) => {
    setRole(e.target.value);
  };
  
  useEffect(() => {
    async function getUsers() {
      const data = await getDocs(userData);
      console.log(data);
      // setInfo(
      //   data.docs.map((item) => ({
        //     ...item.data(),
      //   }))
      // );

      // data.forEach((item) => {
      //   setName(item.id);
      // });
    }
    //  isEmailCheck();
    //  isPasswordCheck();
    //  submitHandler();
     console.log(isEmail);
     console.log(isPassword);
    getUsers();
  },[]);
  
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

  const usingAserviceHandler = (e) => {
    if (e.target.checked == true) {
      setUsingAServiceChecked(true);
    } else {
      setUsingAServiceChecked(false);
    }
  };
  const usingBserviceHandler = (e) => {
    if (e.target.checked == true) {
      setUsingBServiceChecked(true);
    } else {
      setUsingBServiceChecked(false);
    }
  };

  //정규표현식
  const isEmailCheck = async() => {
    const regex = /^\S+@\S+$/i;
      if(regex.test(newUser.email)) {
      setIsEmail(true);
    }
  }

  const isPasswordCheck = async()=> {
    const regex =  /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8}$/
    if(regex.test(newUser.password)) {
      setIsPassword(true);
    }

  }

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        {/* <label>
          유형
          <input
            type="text"
            name="role"
            // value="사용자"
            onChange={changeHandler}
          />
        </label> */}
        <label>
          유형
          <select name="role" value={role} onChange={changeRoleHandler}>
            <option value="none">선택하세요</option>
            <option value="사용자">사용자</option>
            <option value="관리자">관리자</option>
          </select>
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
          <input
            type="text"
            name="email"
            onChange={changeHandler}
            placeholder="이메일을 입력해주세요."
           
          />
        </label>
        <br />
        <label>
          비밀번호
          <input
            type="text"
            name="password"
            onChange={changeHandler}
            placeholder="비밀번호를 입력해주세요"
       
          
          />
        </label>
        <br />
        <label>
          비밀번호 재확인
          <input type="text" name="passwordCheck" onChange={changeHandler} 
           
          />
          <span></span>
          <br />
          <span>
            ※ 비밀번호는 최소 8자리 이상으로 영어대문자, 소문자, 숫자, 특수문자
            중 3종류 이상 입력 필수
          </span>
        </label>
        <br />
        <label>
          상세정보 접근권한
          <input type="checkbox" name="dashboard" defaultChecked disabled />
          대시보드
          <input type="checkbox" name="block" defaultChecked disabled />
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
        {/* <label>
          이용중인 서비스
          <input type="text" name="usingService" onChange={changeHandler} />
        </label> */}
        <label>
          이용중인 서비스
          <input type="checkbox" name="serviceA" onChange={usingAserviceHandler} />
          A서비스
          <input type="checkbox" name="serviceB" onChange={usingBserviceHandler} />
          B서비스

        </label>
        <br />
        <button className="addBtn">추가</button>
      </form>
    </div>
  );
};

export default AddUser;
