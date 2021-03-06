import {
  setVideos,
  setSelectedCategoryFilter,
  setSelectedVideo,
  searchVideoByName,
  setUserVideoDetails,
  resetToInitailState,
  setLikedVideos,
  setWatchlaterVideos,
  setHistoryVideos,
  setPlaylists,
  setPlaylistDetails,
} from "../utils";

export const videosReducer = (state, action) => {
  switch (action.type) {
    case "SET_VIDEOS":
      return setVideos(state, action);
    case "SET_SELECTED_CATEGORY_FILTER":
      return setSelectedCategoryFilter(state, action);
    case "SEARCH_BY_VIDEO_NAME":
      return searchVideoByName(state, action);
    case "SET_SELECTED_VIDEO":
      return setSelectedVideo(state, action);
    case "SET_USER_VIDEO_DETAILS":
      return setUserVideoDetails(state, action);
    case "SET_LIKED_VIDEOS":
      return setLikedVideos(state, action);
    case "SET_WATCHLATER_VIDEOS":
      return setWatchlaterVideos(state, action);
    case "SET_HISTORY_VIDEOS":
      return setHistoryVideos(state, action);
    case "SET_PLAYLISTS":
      return setPlaylists(state, action);
    case "SET_PLAYLIST":
      return setPlaylistDetails(state, action);
    case "RESET_TO_INITIAL_STATE":
      return resetToInitailState();
    default:
      return state;
  }
};
