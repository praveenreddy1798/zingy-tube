import { Loader, Navbar, VideoCard } from "../components";
import { useVideos } from "../context";
import { useQueryLikedVideos } from "../services";

export const Likes = () => {
  const { loading } = useQueryLikedVideos();
  const {
    videosState: { likes },
  } = useVideos();
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="main-section main-section-strech pd-md">
        <Loader loading={loading} />
        {!loading && (
          <>
            <h1 className="flex-center">
              {likes.length ? "Likes" : "Your Likes is empty"}
            </h1>
            <div className="grid responsive-grid responsive-grid-videos gap-2 w-100 mg-t-md">
              {likes?.map((video) => {
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
