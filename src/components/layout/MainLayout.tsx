import { Button, Layout, Menu, MenuProps } from "antd";
import React from "react";
const { Header, Content, Footer, Sider } = Layout;
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { NavLink, Outlet } from "react-router-dom";
import { adminPaths, adminSideberItem } from "../../routes/admin.routes";
import { sidebarItemsGenerator } from "../../utils/SidebarItems";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hook";
import { logout } from "../../redux/features/auth/authSlice";

const MainLayout = () => {
  const dispatch = useAppDispatch();
  // handle logout button
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar></Sidebar>
      <Layout>
        <Header>
          <Button onClick={handleLogout}>Logout</Button>{" "}
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
