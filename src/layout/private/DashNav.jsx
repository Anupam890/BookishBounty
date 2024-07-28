import { Link } from "react-router-dom";

export default function DashNav() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex items-center justify-between p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/music" className="hover:underline">other</Link>
        </li>
        <li>
          <Link to="/settings" className="hover:underline">Settings</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
      <input type="text" placeholder="text" />
      <div className="userinfo">
        <h2>
            profile
        </h2>
      </div>
    </nav>
  );
}
