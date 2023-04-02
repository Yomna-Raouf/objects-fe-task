import { useState, useCallback } from "react";

export const usePost = ( serviceMethod ) => {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const post = useCallback(
    async (payload) => {
      try {
        setLoading(true);
        const response = await serviceMethod(payload);
        const json = await response.data;
        
        setResponseData(json);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    },
    [serviceMethod]
  );

  return { responseData, loading, error, post };
};

export default usePost;