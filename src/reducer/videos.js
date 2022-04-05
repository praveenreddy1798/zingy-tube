import {
  setVideos,
  setSelectedCategoryFilter,
  setSelectedVideo,
  searchVideoByName,
  setUserVideoDetails,
  resetToInitailState,
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
    case "RESET_TO_INITIAL_STATE":
      return resetToInitailState();
    default:
      return state;
  }
};
