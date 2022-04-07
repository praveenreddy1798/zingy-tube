import { useState, useEffect } from "react";
import { useVideos, useAuth, useToast } from "../context";
import { useAxios } from "../hooks";
import { MESSAGES } from "../utils";

export const useQueryLikedVideos = () => {
  const { videosDispatch } = useVideos();
  const {
    auth: { token },
  } = useAuth();
  const axiosParam = {
    method: "GET",
    url: "api/user/likes",
    token,
  };
  const { data, loading, error } = useAxios(axiosParam);
  useEffect(() => {
    if (data?.likes) {
      videosDispatch({
        type: "SET_LIKED_VIDEOS",
        payload: data.likes,
      });
    }
  }, [data?.likes, videosDispatch]);
  return { loading, error };
};

export const useAddToLikedVideos = () => {
  const [enabled, setEnabled] = useState(false);
  const [video, setVideo] = useState(null);
  const { videosDispatch } = useVideos();
  const { toastDispatch } = useToast();
  const {
    auth: { token },
  } = useAuth();
  const axiosParam = {
    method: "POST",
    url: "api/user/likes",
    token,
    payload: video,
  };
  const { data, loading, errorMessage } = useAxios(axiosParam, enabled);
  const addToLiked = (video) => {
    setEnabled(true);
    setVideo({ video });
  };
  useEffect(() => {
    if (data?.likes) {
      videosDispatch({
        type: "SET_LIKED_VIDEOS",
        payload: data.likes,
      });
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: MESSAGES.LIKES.ADD,
          errorMessage: null,
        },
      });
    } else if (errorMessage) {
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: null,
          errorMessage: MESSAGES.LIKES.ERROR,
        },
      });
    }
  }, [data?.likes, errorMessage, videosDispatch, toastDispatch]);
  return { loading, addToLiked };
};

export const useRemoveFromLikedVideos = () => {
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
    url: `api/user/likes/${videoId}`,
    token,
    payload: video,
  };
  const { data, loading, errorMessage } = useAxios(axiosParam, enabled);
  const removeFromLiked = (videoId, video) => {
    setVideo({ video });
    setEnabled(true);
    setVideoId(videoId);
  };
  useEffect(() => {
    if (data?.likes) {
      videosDispatch({
        type: "SET_LIKED_VIDEOS",
        payload: data.likes,
      });
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: MESSAGES.LIKES.REMOVE,
          errorMessage: null,
        },
      });
    } else if (errorMessage) {
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: null,
          errorMessage: MESSAGES.LIKES.ERROR,
        },
      });
    }
  }, [data?.likes, errorMessage, videosDispatch, toastDispatch]);
  return { loading, removeFromLiked };
};
