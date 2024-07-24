import React, { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import { NavLink } from "react-router-dom";
import { TRoute } from "../utils/routeGeneretor";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";
import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import AcademicDepartment from "../pages/admin/academicManagement/AcademicDepartment";

type TSideBer = {
  key: string;
  label: ReactNode;
  children?: TSideBer[];
};
export const adminPaths = [
    {
      name: 'Dashboard',
      path: 'dashboard',
      element: <AdminDashboard />,
    },
    {
      name: 'Academic Management',
      children: [
        {
          name: 'Create A. Semester',
          path: 'create-academic-semester',
          element: <CreateAcademicSemester />,
        },
        {
          name: 'Academic Semester',
          path: 'academic-semester',
          element: <AcademicSemester />,
        },
        {
          name: 'Create A. Faculty',
          path: 'create-academic-faculty',
          element: <CreateAcademicFaculty />,
        },
        {
          name: 'Academic Faculty',
          path: 'academic-faculty',
          element: <AcademicFaculty/>,
        },
        {
          name: 'Create A. Department',
          path: 'create-academic-department',
          element: <CreateAcademicDepartment />,
        },
        {
          name: 'Academic Department',
          path: 'academic-department',
          element: <AcademicDepartment />,
        },
      ],
    },
    {
      name: 'User Management',
      children: [
        {
          name: 'Create Student',
          path: 'create-student',
          element: <CreateStudent />,
        },
        {
          name: 'Create Admin',
          path: 'create-admin',
          element: <CreateAdmin />,
        },
        {
          name: 'Create Faculty',
          path: 'create-faculty',
          element: <CreateFaculty />,
        },
  
        
      ],
    },
    
  ];
//  programatical way
// export const adminRoutes=adminPaths.reduce((acc:TRoute[],item)=>{
//    if (item.path&&item.element) {
//     acc.push({
//         path:item.path,
//         element:item.element,
//     })
//    }

//    if (item.children) {
//     item.children.forEach((child)=>{
//         acc.push({
//             path:child.path,
//             element:child.element,
//         })
//     })
//    }
//    return acc;
// },[])

// // for side ber
// export const adminSideberItem = adminPaths.reduce((acc: TSideBer[], item) => {
//   if (item.path && item.name) {
//     acc.push({
//       key: item.name,
//       label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//     });
//   }

//   if (item.children) {
//     acc.push({
//       key: item.name,
//       label: item.name,
//       children: item.children.map((child) => ({
//         key: child.name,
//         label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//       })),
//     });
//   }
//   return acc;
// }, []);




// console.log(adminRoutes)
// hard coded router
// export const adminPaths=[
//     {
//        index:true,
//         element:<AdminDashboard></AdminDashboard>
//     },
//     {
//         path:'dashboard',
//         element:<AdminDashboard></AdminDashboard>
//     },
//     {
//         path:'create-student',
//         element:<CreateStudent></CreateStudent>
//     },
//     {
//         path:'create-admin',
//         element:<CreateAdmin></CreateAdmin>
//     },
//     {
//         path:'create-faculty',
//         element:<CreateFaculty></CreateFaculty>
//     },
// ]
