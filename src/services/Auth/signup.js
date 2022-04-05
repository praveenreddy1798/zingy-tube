import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../context/toast";
import { useAxios } from "../../hooks";
import { MESSAGES } from "../../utils";

export const useSignup = () => {
  const [enabled, setEnabled] = useState(false);
  const [payload, setPayload] = useState(null);
  const [url, setUrl] = useState(null);
  const navigate = useNavigate();
  const { toastDispatch } = useToast();
  const requestSignup = (url, payload) => {
    setPayload(payload);
    setEnabled(true);
    setUrl(url);
  };
  const axiosParam = {
    method: "POST",
    url,
    payload,
  };
  const { data, loading, errorMessage } = useAxios(axiosParam, enabled);
  useEffect(() => {
    if (data?.encodedToken) {
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: MESSAGES.SIGNUP.SUCCESS,
          errorMessage: null,
        },
      });
      navigate("/login");
    } else if (errorMessage) {
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: null,
          errorMessage: MESSAGES.SIGNUP.ERROR,
        },
      });
    }
  }, [data?.encodedToken, errorMessage, toastDispatch, navigate]);
  return { token: data?.encodedToken, loading, requestSignup };
};
