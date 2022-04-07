import { useState, useEffect } from "react";
import { useVideos, useAuth, useToast } from "../context";
import { useAxios } from "../hooks";
import { MESSAGES } from "../utils";

export const useQueryPlaylists = () => {
  const { videosDispatch } = useVideos();
  const {
    auth: { token },
  } = useAuth();
  const axiosParam = {
    method: "GET",
    url: "api/user/playlists",
    token,
  };
  const { data, loading, error } = useAxios(axiosParam);
  useEffect(() => {
    if (data?.playlists) {
      videosDispatch({
        type: "SET_PLAYLISTS",
        payload: data.playlists,
      });
    }
  }, [data?.playlists, videosDispatch]);
  return { loading, error };
};

export const useAddPlaylists = () => {
  const [enabled, setEnabled] = useState(false);
  const [playlist, setPlaylist] = useState(null);
  const { videosDispatch } = useVideos();
  const { toastDispatch } = useToast();
  const {
    auth: { token },
  } = useAuth();
  const axiosParam = {
    method: "POST",
    url: "api/user/playlists",
    token,
    payload: playlist,
  };
  const { data, loading, errorMessage } = useAxios(axiosParam, enabled);
  const addPlaylists = (playlistName) => {
    setEnabled(true);
    setPlaylist({ playlist: { title: playlistName } });
  };
  useEffect(() => {
    if (data?.playlists) {
      videosDispatch({
        type: "SET_PLAYLISTS",
        payload: data.playlists,
      });
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: MESSAGES.PLAYLISTS.ADD,
          errorMessage: null,
        },
      });
    } else if (errorMessage) {
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: null,
          errorMessage: MESSAGES.PLAYLISTS.ERROR,
        },
      });
    }
  }, [data?.playlists, errorMessage, videosDispatch, toastDispatch]);
  return { loading, addPlaylists };
};

export const useRemovePlaylists = () => {
  const [enabled, setEnabled] = useState(false);
  const [playlistId, setPlaylistId] = useState(null);
  const [playlist, setPlaylist] = useState(null);
  const { videosDispatch } = useVideos();
  const { toastDispatch } = useToast();
  const {
    auth: { token },
  } = useAuth();
  const axiosParam = {
    method: "DELETE",
    url: `api/user/playlists/${playlistId}`,
    token,
    payload: playlist,
  };
  const { data, loading, errorMessage } = useAxios(axiosParam, enabled);
  const removePlaylists = (playlistId, playlist) => {
    setEnabled(true);
    setPlaylist({ playlist });
    setPlaylistId(playlistId);
  };
  useEffect(() => {
    if (data?.playlists) {
      videosDispatch({
        type: "SET_PLAYLISTS",
        payload: data.playlists,
      });
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: MESSAGES.PLAYLISTS.REMOVE,
          errorMessage: null,
        },
      });
    } else if (errorMessage) {
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: null,
          errorMessage: MESSAGES.PLAYLISTS.ERROR,
        },
      });
    }
  }, [data?.playlists, errorMessage, videosDispatch, toastDispatch]);
  return { loading, removePlaylists };
};

export const useQueryPlaylistById = (playlistId) => {
  const { videosDispatch } = useVideos();
  const {
    auth: { token },
  } = useAuth();
  const axiosParam = {
    method: "GET",
    url: `api/user/playlists/${playlistId}`,
    token,
  };
  const { data, loading, error } = useAxios(axiosParam);
  useEffect(() => {
    if (data?.playlist) {
      videosDispatch({
        type: "SET_PLAYLIST",
        payload: data.playlist,
      });
    }
  }, [data?.playlist, videosDispatch]);
  return { loading, error };
};

export const useAddVideoToPlaylist = () => {
  const [enabled, setEnabled] = useState(false);
  const [video, setVideo] = useState(null);
  const [playlistId, setPlaylistId] = useState(null);
  const { videosDispatch } = useVideos();
  const { toastDispatch } = useToast();
  const {
    auth: { token },
  } = useAuth();
  const axiosParam = {
    method: "POST",
    url: `api/user/playlists/${playlistId}`,
    token,
    payload: video,
  };
  const { data, loading, errorMessage } = useAxios(axiosParam, enabled);
  const addVideoToPlaylist = (playlistId, video) => {
    setEnabled(true);
    setPlaylistId(playlistId);
    setVideo({ video });
  };
  useEffect(() => {
    if (data?.playlist) {
      videosDispatch({
        type: "SET_PLAYLIST",
        payload: data.playlist,
      });
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: MESSAGES.PLAYLIST_VIDEOS.ADD,
          errorMessage: null,
        },
      });
    } else if (errorMessage) {
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: null,
          errorMessage: MESSAGES.PLAYLIST_VIDEOS.ERROR,
        },
      });
    }
  }, [data?.playlist, errorMessage, videosDispatch, toastDispatch]);
  return { loading, addVideoToPlaylist };
};

export const useRemoveVideoFromPlaylist = () => {
  const [enabled, setEnabled] = useState(false);
  const [video, setVideo] = useState(null);
  const [videoId, setVideoId] = useState(null);
  const [playlistId, setPlaylistId] = useState(null);
  const { videosDispatch } = useVideos();
  const { toastDispatch } = useToast();
  const {
    auth: { token },
  } = useAuth();
  const axiosParam = {
    method: "DELETE",
    url: `api/user/playlists/${playlistId}/${videoId}`,
    token,
    payload: video,
  };
  const { data, loading, errorMessage } = useAxios(axiosParam, enabled);
  const removeVideoFromPlaylist = (playlistId, videoId, video) => {
    setEnabled(true);
    setPlaylistId(playlistId);
    setVideoId(videoId);
    setVideo({ video });
  };
  useEffect(() => {
    if (data?.playlist) {
      videosDispatch({
        type: "SET_PLAYLIST",
        payload: data.playlist,
      });
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: MESSAGES.PLAYLIST_VIDEOS.REMOVE,
          errorMessage: null,
        },
      });
    } else if (errorMessage) {
      toastDispatch({
        type: "SHOW_TOAST",
        payload: {
          successMessage: null,
          errorMessage: MESSAGES.PLAYLIST_VIDEOS.ERROR,
        },
      });
    }
  }, [data?.playlist, errorMessage, videosDispatch, toastDispatch]);
  return { loading, removeVideoFromPlaylist };
};
