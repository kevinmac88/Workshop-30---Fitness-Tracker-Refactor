import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getActivity, deleteActivity } from "../api/activities";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router";
/** Page that shows details about a single activity */
function ActivityDetails() {
  const { id } = useParams();
  const { token } = useAuth();
  const [activity, setActivity] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const syncActivity = async () => {
      const data = await getActivity(id);
      setActivity(data);
    };
    syncActivity();
  }, [id]);

  const tryDelete = async () => {
    setError(null);

    try {
      await deleteActivity(token, activity.id);
      navigate("/activities");
    } catch (e) {
      setError(e.message);
    }
  };

  if (!activity) return <p> Loading... </p>;
  return (
    <article>
      <h1>{activity.name}</h1>
      <p> by {activity.creatorName}</p>
      <p>{activity.description}</p>
      {token && <button onClick={tryDelete}>Delete</button>}
      {error && <p role="alert">{error}</p>}
    </article>
  );
}

export default ActivityDetails;
