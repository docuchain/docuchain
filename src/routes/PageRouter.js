import React from "react";
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
const PageRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* dashboard route */}
        <Route path="/" element={<Dashboard />}></Route>
        {/* block route */}
        <Route path="/block" element={<Block />}></Route>
        <Route path="/block/:id" element={<BlockDetail />}></Route>
        <Route path="/block/:id/:data" element={<BlockDetailData />}></Route>
        {/* trans route */}
        <Route path="/trans" element={<Trans />}></Route>
        <Route path="/trans/:id" element={<TransDetail />}></Route>
        {/* node route */}
        <Route path="/node" element={<Node />}></Route>
        <Route path="/node/detail" element={<NodeDetail />}></Route>
        {/* service route */}
        <Route path="/service" element={<Service />}></Route>
        <Route path="/service/:id" element={<ServiceDetail />}></Route>
        {/* myinfo route */}
        <Route path="/myinfo" element={<MyInfo />}></Route>
        {/* usermanaging route */}
        <Route path="/usermanaging" element={<UserManaging />}></Route>
        <Route path="/usermanaging/adduser" element={<AddUser />}></Route>
        <Route path="/usermanaging/:id" element={<UserModify />}></Route>

        {/* exception */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default PageRouter;
