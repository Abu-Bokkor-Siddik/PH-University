/* eslint-disable @typescript-eslint/no-unused-vars */
import { Menu } from "antd"
import Sider from "antd/es/layout/Sider"
import { sidebarItemsGenerator } from "../../utils/SidebarItems"
import { adminPaths } from "../../routes/admin.routes"
import { facultyPaths } from "../../routes/faculty.routes";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";

const userRole = {
    ADMIN: 'admin',
    FACULTY: 'faculty',
    STUDENT: 'student',
  };
const Sidebar = () => {
  const user = useAppSelector(selectCurrentUser);
  console.log(user)
    const role = 'admin'
    let sidebarItems;

  switch (role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = sidebarItemsGenerator(facultyPaths, userRole.FACULTY);
      break;
    // case userRole.STUDENT:
    //   sidebarItems = sidebarItemsGenerator(studentPaths, userRole.STUDENT);
    //   break;

    default:
      break;
  }

  return (
    <Sider
    breakpoint="lg"
    collapsedWidth="0"
    style={{ height: '100vh', position: 'sticky', top: '0', left: '0' }}
  >
    <div
      style={{
        color: 'white',
        height: '4rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>PH Uni</h1>
    </div>
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['4']}
      items={sidebarItems}
    />
  </Sider>
  )
}

export default Sidebar
