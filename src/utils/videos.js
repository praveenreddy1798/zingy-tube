import { ACCEPTED_CATEGORY_FILTERS } from "./";

const filterVideosByCategory = ({ videos, selectedCategoryFilter }) =>
  !selectedCategoryFilter.includes("all")
    ? videos.filter((video) =>
        selectedCategoryFilter.includes(video.categoryName.toLowerCase())
      )
    : videos;

const filteredVideosBySearch = ({ videos, searchValue }) =>
  videos.filter((video) => video.title.toLowerCase().includes(searchValue));

const filterVideosByAppliedFilters = ({
  state,
  selectedCategory = null,
  searchVal = null,
}) => {
  const { originalData } = state;
  let searchValue = searchVal?.toLowerCase();
  let selectedCategoryFilter = selectedCategory;
  let videos = selectedCategoryFilter?.length
    ? filterVideosByCategory({
        videos: originalData,
        selectedCategoryFilter,
      })
    : originalData;
  if (searchValue) {
    videos = filteredVideosBySearch({ videos, searchValue });
  }
  return videos;
};

export const setVideos = (videosState, action) => {
  const { videos, searchParamKey, searchParamValue } = action.payload;
  let selectedCategoryFilter = ["all"];
  if (
    searchParamKey === "categoryName" &&
    ACCEPTED_CATEGORY_FILTERS.includes(searchParamValue.toLowerCase())
  ) {
    selectedCategoryFilter = [searchParamValue];
  }

  const filteredVideos = filterVideosByCategory({
    videos,
    selectedCategoryFilter,
  });
  return {
    ...videosState,
    originalData: videos,
    selectedCategoryFilter,
    videos: filteredVideos,
  };
};

export const setSelectedCategoryFilter = (state, action) => {
  const selectedCategory = [action.payload];
  const { searchValue: searchVal } = state;
  const filteredVideos = filterVideosByAppliedFilters({
    state,
    selectedCategory,
    searchVal,
  });
  return {
    ...state,
    selectedCategoryFilter: selectedCategory,
    videos: filteredVideos,
  };
};

export const searchVideoByName = (state, action) => {
  const searchValue = action.payload;
  const { selectedCategoryFilter: selectedCategory } = state;
  const filteredVideos = filterVideosByAppliedFilters({
    state,
    searchVal: searchValue,
    selectedCategory,
  });
  return {
    ...state,
    searchValue,
    videos: filteredVideos,
  };
};

export const setSelectedVideo = (state, action) => {
  const { selectedVideo, mustWatchVideos } = action.payload;
  return {
    ...state,
    selectedVideo,
    mustWatchVideos,
  };
};
