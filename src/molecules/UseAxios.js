import { useState, useEffect } from "react";
const axios = require("axios").default;

const useAxios = (url) => {
  const [axiosData, setAxiosData] = useState([]);
  const [axiosLoading, setAxiosLoading] = useState(true);
  const [axiosError, setAxiosError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setAxiosData(response.data);
        setAxiosLoading(false);
      } catch (error) {
        setAxiosError(error);
      }
    };
    fetchData();
  }, []);

  return { axiosData, axiosLoading, axiosError };
};

export default useAxios;
