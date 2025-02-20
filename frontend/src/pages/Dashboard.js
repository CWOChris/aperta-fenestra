import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import NotificationCenter from "../components/NotificationCenter";

function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="container">
        <h2>Welcome, {user.username}!</h2>
        <NotificationCenter />
        <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
