import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useToast, useVideos } from "../../context";
import { useAxios } from "../../hooks";
import { MESSAGES } from "../../utils";

export const useLogin = () => {
  const [enabled, setEnabled] = useState(false);
  const [payload, setPayload] = useState(null);
  const navigate = useNavigate();
  const { toastDispatch } = useToast();
  const { videosDispatch } = useVideos();
  const { setAuth } = useAuth();
  const requestLogin = (payload) => {
    setPayload(payload);
    setEnabled(true);
  };
  const axiosParam = {
    method: "POST",
    url: "/api/auth/login",
    payload,
  };
  const { data, loading, errorMessage } = useAxios(axiosParam, enabled);
  console.log(data, loading, errorMessage);
  useEffect(() => {
    if (data?.encodedToken) {
      const foundUser = data.foundUser;
      const { likes, history, playlists, watchlater } = foundUser;
      localStorage.setItem("token", data.encodedToken);
      setAuth({
        isAuth: true,
        token: data?.encodedToken,
        userDetails: foundUser,
      });
      videosDispatch({
        type: "SET_USER_VIDEO_DETAILS",
        payload: { likes, history, playlists, watchlater },
      });
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: MESSAGES.LOGIN.SUCCESS,
          errorMessage: null,
        },
      });
      navigate("/");
    } else if (errorMessage) {
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: null,
          errorMessage: MESSAGES.LOGIN.ERROR,
        },
      });
    }
  }, [
    data?.encodedToken,
    errorMessage,
    toastDispatch,
    enabled,
    navigate,
    videosDispatch,
    data?.foundUser,
    setAuth,
  ]);
  return {
    token: data?.encodedToken,
    loading,
    requestLogin,
  };
};
