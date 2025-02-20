import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";

const NotificationCenter = () => {
  const { notifications } = useContext(SocketContext);

  return (
    <div className="notifications">
      {notifications.length > 0 && <h3>Notifications</h3>}
      <ul>
        {notifications.map((notif, index) => (
          <li key={index}>{notif.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationCenter;
