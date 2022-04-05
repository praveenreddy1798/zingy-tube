import {
  setVideos,
  setSelectedCategoryFilter,
  setSelectedVideo,
  searchVideoByName,
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
    default:
      return state;
  }
};
