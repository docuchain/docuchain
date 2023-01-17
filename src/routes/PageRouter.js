import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../pages/common/components/Header";
import Footer from "../pages/common/components/Footer";
import Dashboard from "../pages/dashboard/Dashboard";
import Block from "../pages/block/Block";
import BlockDetail from "../pages/block/BlockDetail";
import BlockDetailData from "../pages/block/BlockDetailData";
import NotFound from "../pages/common/components/NotFound";
import Trans from "../pages/trans/Trans";
import TransDetail from "../pages/trans/TransDetail";
import Node from "../pages/node/Node";
import NodeDetail from "../pages/node/NodeDetail";
import Service from "../pages/service/Service";
import ServiceDetail from "../pages/service/ServiceDetail";
import MyInfo from "../pages/myinfo/MyInfo";
import UserManaging from "../pages/usermanaging/UserManaging";
import AddUser from "../pages/usermanaging/AddUser";
import UserModify from "../pages/usermanaging/UserModify";
import LoginPage from "../pages/myinfo/components/LoginPage";
import NavBar from "../pages/common/components/NavBar";
import { useRecoilValue } from "recoil";
import { getUserUid, getUserInfo, getTheme } from "../recoil/selector";
import "../pages/common/style/contents.scss";

const PageRouter = () => {
  const isDark = useRecoilValue(getTheme);
  const uidValue = useRecoilValue(getUserUid);
  const userValue = useRecoilValue(getUserInfo);
  useEffect(() => {
    console.log(userValue);
  });

  return (
    <div className="pageRouterWrap">
      <div
        className={
          isDark ? "pageRouterWrapBlack--left" : " pageRouterWrap--left"
        }
      >
        <NavBar />
      </div>
      <div className="pageRouterWrap--right">
        <Header />
        <div className={isDark ? "ContentsBlack" : "Contents"}>
          <Routes>
            {/* dashboard route */}
            <Route path="/" element={<Dashboard />}></Route>
            {/* block route */}
            <Route path="/block" element={<Block />}></Route>
            <Route path="/block/:id" element={<BlockDetail />}></Route>
            <Route
              path="/block/:id/:data"
              element={<BlockDetailData />}
            ></Route>
            {/* trans route */}
            <Route path="/trans" element={<Trans />}></Route>
            <Route
              path="/trans/:id"
              element={userValue.trans ? <TransDetail /> : <Trans />}
            ></Route>
            {/* node route */}
            <Route path="/node" element={<Node />}></Route>
            <Route
              path="/node/:nodeName"
              element={userValue.node ? <NodeDetail /> : <Node />}
            ></Route>
            {/* service route */}
            <Route path="/service" element={<Service />}></Route>
            <Route
              path="/service/:id"
              element={userValue.service ? <ServiceDetail /> : <Service />}
            ></Route>
            {/* myinfo route */}
            <Route
              path="/myinfo"
              element={uidValue !== "" ? <MyInfo /> : <LoginPage />}
            ></Route>
            {/* usermanaging route 관리자일때만 접근가능 */}
            <Route
              path="/usermanaging"
              element={
                userValue.email === "test@test.com" ? (
                  <UserManaging />
                ) : (
                  <LoginPage />
                )
              }
            ></Route>
            <Route
              path="/usermanaging/adduser"
              element={
                userValue.email === "test@test.com" ? (
                  <AddUser />
                ) : (
                  <LoginPage />
                )
              }
            ></Route>
            <Route path="/usermanaging/:id" element={<UserModify />}></Route>
            {/* login route */}
            <Route path="/login" element={<LoginPage />}></Route>
            {/* exception */}
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PageRouter;
