import { useState, useEffect } from "react";
import { useVideos, useAuth, useToast } from "../context";
import { useAxios } from "../hooks";
import { MESSAGES } from "../utils";

export const useQueryWatchlaterVideos = () => {
  const { videosDispatch } = useVideos();
  const {
    auth: { token },
  } = useAuth();
  const axiosParam = {
    method: "GET",
    url: "api/user/watchlater",
    token,
  };
  const { data, loading, error } = useAxios(axiosParam);
  useEffect(() => {
    if (data?.watchlater) {
      videosDispatch({
        type: "SET_WATCHLATER_VIDEOS",
        payload: data.watchlater,
      });
    }
  }, [data?.watchlater, videosDispatch]);
  return { loading, error };
};

export const useAddToWatchlaterVideos = () => {
  const [enabled, setEnabled] = useState(false);
  const [video, setVideo] = useState(null);
  const { videosDispatch } = useVideos();
  const { toastDispatch } = useToast();
  const {
    auth: { token },
  } = useAuth();
  const axiosParam = {
    method: "POST",
    url: "api/user/watchlater",
    token,
    payload: video,
  };
  const { data, loading, errorMessage } = useAxios(axiosParam, enabled);
  const addToWatchLater = (video) => {
    setEnabled(true);
    setVideo({ video });
  };
  useEffect(() => {
    if (data?.watchlater) {
      videosDispatch({
        type: "SET_WATCHLATER_VIDEOS",
        payload: data.watchlater,
      });
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: MESSAGES.WATCHLATER.ADD,
          errorMessage: null,
        },
      });
    } else if (errorMessage) {
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: null,
          errorMessage: MESSAGES.WATCHLATER.ERROR,
        },
      });
    }
  }, [data?.watchlater, errorMessage, videosDispatch, toastDispatch]);
  return { loading, addToWatchLater };
};

export const useRemoveFromWatchlaterVideos = () => {
  const [enabled, setEnabled] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const [video, setVideo] = useState(null);
  const { videosDispatch } = useVideos();
  const { toastDispatch } = useToast();
  const {
    auth: { token },
  } = useAuth();
  const axiosParam = {
    method: "DELETE",
    url: `api/user/watchlater/${videoId}`,
    token,
    payload: video,
  };
  const { data, loading, errorMessage } = useAxios(axiosParam, enabled);
  const removeFromWatchlater = (videoId, video) => {
    setEnabled(true);
    setVideo({ video });
    setVideoId(videoId);
  };
  useEffect(() => {
    if (data?.watchlater) {
      videosDispatch({
        type: "SET_WATCHLATER_VIDEOS",
        payload: data.watchlater,
      });
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: MESSAGES.WATCHLATER.REMOVE,
          errorMessage: null,
        },
      });
    } else if (errorMessage) {
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: null,
          errorMessage: MESSAGES.WATCHLATER.ERROR,
        },
      });
    }
  }, [data?.watchlater, errorMessage, videosDispatch, toastDispatch]);
  return { loading, removeFromWatchlater };
};
