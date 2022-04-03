import { createContext, useContext, useReducer } from "react";
import { videosReducer } from "../reducer";

export const videosInitialState = {
  originalData: [],
  videos: [],
  selectedVideo: {},
  watchLaterVideos: [],
  likedVideos: [],
  historyVideos: [],
  mustWatchVideos: [],
  selectedCategoryFilter: ["all"],
  searchValue: null,
  toast: { isVisible: false, sucessMessage: null, errorMessage: null },
};

const VideosContext = createContext(videosInitialState);

const VideosProvider = ({ children }) => {
  const [videosState, videosDispatch] = useReducer(
    videosReducer,
    videosInitialState
  );
  return (
    <VideosContext.Provider value={{ videosState, videosDispatch }}>
      {children}
    </VideosContext.Provider>
  );
};

const useVideos = () => useContext(VideosContext);

export { useVideos, VideosProvider };
