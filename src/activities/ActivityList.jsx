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

  return (
    <li>
      <p>{activity.name}</p>
      {token && <button>Delete</button>}
    </li>
  );
}
