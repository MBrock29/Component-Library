import React from "react";
import { Loading } from "../atoms/loading/Loading";
import useFetch from "../molecules/useFetch";

const Fetch = () => {
  const { data, loading } = useFetch("https://api.spacexdata.com/v3/missions");

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {data ? (
            <div>
              {data.map((data) => (
                <h2 key={data.mission_id}>{data.mission_name}</h2>
              ))}
            </div>
          ) : (
            <h2>Sorry, no data</h2>
          )}
        </div>
      )}
    </div>
  );
};

export default Fetch;
