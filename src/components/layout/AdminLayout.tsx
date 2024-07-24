import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
      <h1>this is side ber </h1>
      <Outlet></Outlet>
    </div>
  )
}

export default AdminLayout
