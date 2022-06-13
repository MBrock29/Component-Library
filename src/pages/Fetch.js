import React, { useState } from "react";
import { Loading } from "../atoms/loading/Loading";
import useFetch from "../molecules/useFetch";
import useAxios from "../molecules/UseAxios";
import { Button } from "../atoms/button/Button";
import { useToast } from "@chakra-ui/react";

const Fetch = () => {
  const { data, loading } = useFetch(process.env.SPACEX_API_URL);
  const { axiosData, axiosLoading, axiosError } = useAxios(
    process.env.SPACEX_API_URL
  );
  const [renderData, setRenderData] = useState(false);
  const [renderAxiosData, setRenderAxiosData] = useState(false);
  const toast = useToast();

  {
    loading | axiosLoading && <Loading />;
  }
  {
    axiosError &&
      toast({
        title: "Axios fetch error",
        description: "Data could not be fetched through Axios",
        status: "error",
        duration: 10000,
        isClosable: true,
        position: "top",
      });
  }
  return (
    <div
      style={{
        display: "flex",
        width: "900px",
        justifyContent: "space-evenly",
      }}
    >
      <div>
        <Button
          handleClick={() => setRenderData(!renderData)}
          handleText="Show Fetch data"
        />
        {renderData && (
          <>
            {data.map((data) => (
              <h4>{data.mission_name}</h4>
            ))}
          </>
        )}
      </div>
      <div>
        <Button
          handleClick={() => setRenderAxiosData(!renderAxiosData)}
          handleText="Show Axios data"
        />
        {renderAxiosData && (
          <>
            {axiosData.map((data) => (
              <h4>{data.mission_name}</h4>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Fetch;
