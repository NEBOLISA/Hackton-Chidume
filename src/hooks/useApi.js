import { useState, useEffect } from "react";
import axios from "axios";

const useApi = (initialUrl) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(initialUrl);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [initialUrl]); // Fetch data when the URL changes

  const postData = async (url, payload) => {
    try {
      setPosting(true);

      const response = await axios.post(url, payload);
      console.log("Response status:", response.status); // Log the response status

      setPosting(false);
      return response.data;
    } catch (error) {
      setPosting(false);
      setError(error);
    }
  };

  return { data, loading, error, postData, posting };
};

export default useApi;
