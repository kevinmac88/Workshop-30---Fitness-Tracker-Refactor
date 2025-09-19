import { deleteActivity } from "../api/activities";
import { useState } from "react";
import { useAuth } from "../auth/AuthContext";

export default function ActivityList({ activities }) {
  return (
    <ul>
      {activities.map((activity) => (
        <ActivityListItem key={activity.id} activity={activity} />
      ))}
    </ul>
  );
}

function ActivityListItem({ activity }) {
  const { token } = useAuth();

  const [error, setError] = useState(null);

  const tryDelete = async () => {
    setError(null);

    try {
      await deleteActivity(token, activity.id);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <li>
      <p>{activity.name}</p>
      {token && <button onClick={tryDelete}>Delete</button>}
      {error && <p role="alert">{error}</p>}
    </li>
  );
}
