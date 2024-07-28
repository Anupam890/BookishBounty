import DashNav from "./DashNav"
import { Outlet } from "react-router-dom"

export default function Dashboard() {
  return (
    <div>
      <div className="container h-screen flex max-w-full">
        <div className="side-navbar border-2 border-white w-1/5">
          <h2>Side</h2>
        </div>
        <div className="main-content border-2 border-white w-4/5">
        <DashNav/>
        <Outlet />
        </div>
      </div>
    </div>
  )
}
