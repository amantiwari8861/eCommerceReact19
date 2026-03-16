import { Outlet } from 'react-router'

const UserDashboard = () => {
  return (
    <div>
        <h1 className="text-3xl">UserDashboard</h1>
        <Outlet/>
    </div>
  )
}

export default UserDashboard