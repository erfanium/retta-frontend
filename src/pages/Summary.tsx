import Heatmap from "../components/Heatmap";
import { useAutoQuery } from "../query";

function GrowingUsers() {
  const { isLoading, error, data } = useAutoQuery("getGrowingUsers");

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>An error has occurred</h3>;

  return (
    <>
      <h2 className="mt-3 mb-3">Users with the highest usage growth 📈 😋</h2>
      {data.map((u) => (
        <div className="mb-1">
          <Heatmap data={u.heatmap} name={u.id} />
        </div>
      ))}
    </>
  );
}

function TopUsers() {
  const { isLoading, error, data } = useAutoQuery("getTopUsers");

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>An error has occurred</h3>;

  return (
    <>
      <h2 className="mt-5 mb-3">Top Stable Users ⚡️🔥</h2>
      {data.map((u) => (
        <div className="mb-1">
          <Heatmap data={u.heatmap} name={u.id} />
        </div>
      ))}
    </>
  );
}

function DecliningUsers() {
  const { isLoading, error, data } = useAutoQuery("getDecliningUsers");

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>An error has occurred</h3>;

  return (
    <>
      <h2 className="mt-5 mb-3">Users whose usage is declining 📉😞</h2>
      {data.map((u) => (
        <div className="mb-1">
          <Heatmap data={u.heatmap} name={u.id} />
        </div>
      ))}
    </>
  );
}

function Summary() {
  return (
    <div>
      <GrowingUsers />
      <TopUsers />
      <DecliningUsers />
    </div>
  );
}

export default Summary;
