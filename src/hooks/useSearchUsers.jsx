import { useState } from "react";
import { ApiCallHandler } from "../utils/common/api-calls-handler";

export const useSearchUsers = ({ onSuccess, onError }) => {
  const [error, setError] = useState({ errorMsg: "", isError: false });
  const [loading, setLoading] = useState(false);

  const mutate = async (searchQuery = "", client_id, client_secret) => {
    if (searchQuery.length === 0) {
      setError({
        isError: true,
        errorMsg: "You must enter somthing",
      });
      setTimeout(() => setError((prev) => ({ ...prev, isError: false })), 1500);
    } else {
      setLoading(true);
      const { status, _resToJson } = await ApiCallHandler(
        "GET",
        `search/users?q=${searchQuery}&client_id=${client_id}&client_secret=${client_secret}`
      );
      if (status === 200) {
        onSuccess && onSuccess(_resToJson);
      } else {
        setError({
          isError: true,
          errorMsg: "Error occured",
        });
        onError && onError();
        setTimeout(
          () => setError((prev) => ({ ...prev, isError: false })),
          1500
        );
      }
      setLoading(false);
    }
  };
  return {
    error,
    loading,
    mutate,
  };
};
