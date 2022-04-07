import { useState, useEffect } from "react";
import { useVideos, useAuth, useToast } from "../context";
import { useAxios } from "../hooks";
import { MESSAGES } from "../utils";

export const useQueryHistoryVideos = () => {
  const { videosDispatch } = useVideos();
  const {
    auth: { token },
  } = useAuth();
  const axiosParam = {
    method: "GET",
    url: "api/user/history",
    token,
  };
  const { data, loading, error } = useAxios(axiosParam);
  useEffect(() => {
    if (data?.history) {
      videosDispatch({
        type: "SET_HISTORY_VIDEOS",
        payload: data.history,
      });
    }
  }, [data?.history, videosDispatch]);
  return { loading, error };
};

export const useAddToHistoryVideos = () => {
  const [enabled, setEnabled] = useState(false);
  const [video, setVideo] = useState(null);
  const { videosDispatch } = useVideos();
  const { toastDispatch } = useToast();
  const {
    auth: { token },
  } = useAuth();
  const axiosParam = {
    method: "POST",
    url: "api/user/history",
    token,
    payload: video,
  };
  const { data, loading, errorMessage } = useAxios(axiosParam, enabled);
  const addToHistory = (video) => {
    setEnabled(true);
    setVideo({ video });
  };
  useEffect(() => {
    if (data?.history) {
      videosDispatch({
        type: "SET_HISTORY_VIDEOS",
        payload: data.history,
      });
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: MESSAGES.HISTORY.ADD,
          errorMessage: null,
        },
      });
    } else if (errorMessage) {
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: null,
          errorMessage: MESSAGES.HISTORY.ERROR,
        },
      });
    }
  }, [data?.history, errorMessage, videosDispatch, toastDispatch]);
  return { loading, addToHistory };
};

export const useRemoveFromHistoryVideos = () => {
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
    url: `api/user/history/${videoId}`,
    token,
    payload: video,
  };
  const { data, loading, errorMessage } = useAxios(axiosParam, enabled);
  const removeFromHistory = (videoId, video) => {
    setEnabled(true);
    setVideo({ video });
    setVideoId(videoId);
  };
  useEffect(() => {
    if (data?.history) {
      videosDispatch({
        type: "SET_HISTORY_VIDEOS",
        payload: data.history,
      });
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: MESSAGES.HISTORY.REMOVE,
          errorMessage: null,
        },
      });
    } else if (errorMessage) {
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: null,
          errorMessage: MESSAGES.HISTORY.ERROR,
        },
      });
    }
  }, [data?.history, errorMessage, videosDispatch, toastDispatch]);
  return { loading, removeFromHistory };
};

export const useClearAllHistoryVideos = () => {
  const [enabled, setEnabled] = useState(false);
  const { videosDispatch } = useVideos();
  const { toastDispatch } = useToast();
  const {
    auth: { token },
  } = useAuth();
  const axiosParam = {
    method: "DELETE",
    url: "api/user/history/all",
    token,
  };
  const { data, loading, errorMessage } = useAxios(axiosParam, enabled);
  const clearAllHistory = () => {
    setEnabled(true);
  };
  useEffect(() => {
    if (data?.history) {
      videosDispatch({
        type: "SET_HISTORY_VIDEOS",
        payload: data.history,
      });
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: MESSAGES.HISTORY.CLEAR,
          errorMessage: null,
        },
      });
    } else if (errorMessage) {
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: null,
          errorMessage: MESSAGES.HISTORY.ERROR,
        },
      });
    }
  }, [data?.history, errorMessage, videosDispatch, toastDispatch]);
  return { loading, clearAllHistory };
};
