import { useState } from "react";
import { useQuery } from "react-query";
import Heatmap from "../components/Heatmap";
import { getDecliningUsers, getGrowingUsers, getTopUsers } from "../query";

function Users({ name, title, query }) {
  const [page, setPage] = useState(0);
  console.log(page)
  const {
    isLoading,
    isError,
    data,
    isPreviousData,
  } = useQuery([name, page], () => query(page), {
    keepPreviousData: true,
  });

  if (isLoading) return <h3>Loading...</h3>;
  if (isError) return <h3>An error has occurred</h3>;

  return (
    <>
      <h2 className="mt-3 mb-3">{title}</h2>
      {data.map((u) => (
        <div className="mb-1">
          <Heatmap data={u.heatmap} name={u.id} />
        </div>
      ))}

      <button className="btn btn-outline-primary mb-3" onClick={() => {if (!isPreviousData) setPage((old) => old + 1)}}>
        More
      </button>
    </>
  );
}

function Summary() {
  return (
    <div>
      <Users name="getGrowingUsers" title="Users with the highest usage growth 📈 😋" query={getGrowingUsers} />
      <Users name="getTopUsers" title="Top Stable Users ⚡️🔥" query={getTopUsers} />
      <Users name="getDecliningUsers" title="Users whose usage is declining 📉😞" query={getDecliningUsers} />
      {/* <TopUsers />
      <DecliningUsers /> */}
    </div>
  );
}

export default Summary;
