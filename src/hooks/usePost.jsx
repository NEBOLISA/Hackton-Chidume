import { useState } from "react";
import axios from "axios";

const useApi = () => {
  const [posting, setPosting] = useState(false);
  const [postError, setPostError] = useState(null);

  const postData = async (url, payload) => {
    try {
      setPosting(true);

      const response = await axios.post(url, payload);
      console.log("Response status:", response.status); // Log the response status

      setPosting(false);
      return response.data;
    } catch (error) {
      setPosting(false);
      setPostError(error);
    }
  };

  return { postError, postData, posting };
};

export default useApi;
