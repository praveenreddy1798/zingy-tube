import { useParams } from "react-router";
import { Loader, Navbar, VideoCard, VideoDetailsSection } from "../components";
import { useVideos } from "../context";
import { useQueryVideoById } from "../services";

export const VideoDetail = () => {
  const { videoId } = useParams();
  const { loading } = useQueryVideoById(videoId);
  const {
    videosState: { mustWatchVideos, selectedVideo },
  } = useVideos();
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="main-section main-section-strech pd-b-sm">
        <Loader loading={loading} />
        <div class="flex wrap main-container">
          <VideoDetailsSection video={selectedVideo} />
          <div class="right-pane flex-vertical align-center gap-1 no-wrap">
            <h3>Must Watch</h3>
            <div class="watch-later-section h-100 w-100 overflow-y-auto flex-vertical gap-1">
              {mustWatchVideos.map((video) => (
                <VideoCard video={video} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
