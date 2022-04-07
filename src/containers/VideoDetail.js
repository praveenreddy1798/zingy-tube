import { useLocation } from "react-router-dom";
import { Loader, Navbar, VideoCard, VideoDetailsSection } from "../components";
import { useVideos } from "../context";
import { useQueryVideoById } from "../services";

export const VideoDetail = () => {
  const location = useLocation();
  const { videoId } = location.state;
  const { loading } = useQueryVideoById(videoId);
  const {
    videosState: { mustWatchVideos, selectedVideo, videos },
  } = useVideos();
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="main-section main-section-strech pd-b-sm">
        <Loader loading={loading} />
        {!loading && selectedVideo.id === videoId && (
          <div className="flex wrap main-container">
            <VideoDetailsSection video={selectedVideo} />
            <div className="right-pane flex-vertical align-center gap-1 no-wrap">
              <h3>Must Watch</h3>
              <div className="watch-later-section h-100 w-100 overflow-y-auto flex-vertical gap-1">
                {mustWatchVideos.map((video) => {
                  const id = video.id;
                  return <VideoCard key={id} video={video} />;
                })}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
