import { Loader, Navbar, VideoCard } from "../components";
import { useVideos } from "../context";
import { useQueryWatchlaterVideos } from "../services";

export const WatchLater = () => {
  const { loading } = useQueryWatchlaterVideos();
  const {
    videosState: { watchlater },
  } = useVideos();
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="main-section main-section-strech pd-md">
        <Loader loading={loading} />
        {!loading && (
          <>
            <h1 className="flex-center">
              {watchlater.length ? "Watch later" : "Your Watch later is empty"}
            </h1>
            <div className="grid responsive-grid responsive-grid-videos gap-2 w-100 mg-t-md">
              {watchlater?.map((video) => {
                const id = video.id;
                return <VideoCard key={id} video={video} />;
              })}
            </div>
          </>
        )}
      </main>
    </div>
  );
};
