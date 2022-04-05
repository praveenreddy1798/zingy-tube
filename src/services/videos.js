import { useEffect } from "react";
import { useVideos } from "../context";
import { useAxios } from "../hooks";

export const useQueryAllVideos = (searchParam) => {
  const { videosDispatch } = useVideos();
  const searchParamKey = Object.keys(searchParam)?.[0];
  const searchParamValue = Object.values(searchParam)?.[0];
  const axiosParam = {
    method: "GET",
    url: "/api/videos",
  };
  const { data, loading } = useAxios(axiosParam);
  useEffect(() => {
    if (data?.videos) {
      videosDispatch({
        type: "SET_VIDEOS",
        payload: { videos: data.videos, searchParamKey, searchParamValue },
      });
    }
  }, [data?.videos, videosDispatch, searchParamKey, searchParamValue]);
  return { loading };
};

export const useQueryVideoById = (videoId) => {
  const { videosDispatch } = useVideos();
  const axiosParam = {
    method: "GET",
    url: `/api/video/${videoId}`,
  };
  const { data, loading, errorMessage } = useAxios(axiosParam);
  useEffect(() => {
    if (data?.video && data?.mustWatchVideos) {
      const { video: selectedVideo, mustWatchVideos } = data;
      videosDispatch({
        type: "SET_SELECTED_VIDEO",
        payload: { selectedVideo, mustWatchVideos },
      });
    }
  }, [data?.video, videosDispatch, data?.mustWatchVideos]);
  return { loading, errorMessage };
};
