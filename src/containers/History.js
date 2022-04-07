import { Loader, Navbar, VideoCard } from "../components";
import { useVideos } from "../context";
import { useClearAllHistoryVideos, useQueryHistoryVideos } from "../services";

export const History = () => {
  const { loading } = useQueryHistoryVideos();
  const { clearAllHistory } = useClearAllHistoryVideos();
  const {
    videosState: { history },
  } = useVideos();
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="main-section main-section-strech pd-md">
        <Loader loading={loading} />
        {!loading && (
          <>
            <h1 className="flex-center">
              {history.length ? "History" : "Your History is empty"}
            </h1>
            {history.length > 0 && (
              <div className="flex-center">
                <button
                  onClick={() => clearAllHistory()}
                  className="btn btn-primary border-radius-sm mg-t-sm"
                >
                  Clear All History
                </button>
              </div>
            )}
            <div className="grid responsive-grid responsive-grid-videos gap-2 w-100 mg-t-md">
              {history?.map((video) => {
                const id = video.id;
                return (
                  <VideoCard
                    displayDelete
                    key={id}
                    video={video}
                    cardType="history"
                  />
                );
              })}
            </div>
          </>
        )}
      </main>
    </div>
  );
};
