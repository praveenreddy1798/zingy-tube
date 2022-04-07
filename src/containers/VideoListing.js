import { useLocation } from "react-router-dom";
import {
  VideoCard,
  Navbar,
  Loader,
  CreatePlaylist,
} from "../components";
import { useVideos } from "../context";
import { useQueryAllVideos } from "../services";

export const VideoListing = () => {
  const { search } = useLocation();
  const {
    videosState: { videos, selectedCategoryFilter },
    videosDispatch,
  } = useVideos();
  let searchParam = new URLSearchParams(search);
  searchParam = Object.fromEntries(searchParam);
  const { loading } = useQueryAllVideos(searchParam);

  const getFilterButtonStyle = (categoryName) => {
    if (selectedCategoryFilter.includes(categoryName)) {
      return "btn btn-primary border-radius-sm";
    }
    return "btn btn-primary outline outline-primary border-radius-sm";
  };
  return (
    <div className="page-wrapper page-wrapper-filter-mob">
      <Navbar displaySearch />
      <CreatePlaylist />
      <main className="main-section main-section-strech pd-md position-relative">
        <Loader loading={loading} />
        <div className="category-filters-section flex-center gap-1">
          <button
            onClick={() =>
              videosDispatch({
                type: "SET_SELECTED_CATEGORY_FILTER",
                payload: "all",
              })
            }
            className={getFilterButtonStyle("all")}
          >
            All
          </button>
          <button
            onClick={() =>
              videosDispatch({
                type: "SET_SELECTED_CATEGORY_FILTER",
                payload: "music",
              })
            }
            className={getFilterButtonStyle("music")}
          >
            Music
          </button>
          <button
            onClick={() =>
              videosDispatch({
                type: "SET_SELECTED_CATEGORY_FILTER",
                payload: "sports",
              })
            }
            className={getFilterButtonStyle("sports")}
          >
            Sports
          </button>
          <button
            onClick={() =>
              videosDispatch({
                type: "SET_SELECTED_CATEGORY_FILTER",
                payload: "technology",
              })
            }
            className={getFilterButtonStyle("technology")}
          >
            Technology
          </button>
        </div>
        {!loading && (
          <div className="grid responsive-grid responsive-grid-videos gap-2 w-100 mg-t-md">
            {!videos.length && !loading && (
              <h1>Sorry, We couldn't find the videos you are looking for.</h1>
            )}
            {videos?.map((video) => {
              const id = video.id;
              return <VideoCard key={id} video={video} />;
            })}
          </div>
        )}
      </main>
    </div>
  );
};
