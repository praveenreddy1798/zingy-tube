import { useLocation } from "react-router-dom";
import { Loader, Navbar, VideoCard, CreatePlaylist } from "../components";
import { useVideos } from "../context";
import { useQueryPlaylistById } from "../services";

export const Playlist = () => {
  const location = useLocation();
  const { playlistId } = location.state;
  const { loading } = useQueryPlaylistById(playlistId);
  const {
    videosState: { selectedPlaylist },
  } = useVideos();
  const { videos } = selectedPlaylist;
  return (
    <div className="page-wrapper">
      <Navbar />
      <CreatePlaylist />
      <main className="main-section main-section-strech pd-md">
        <Loader loading={loading} />
        {!loading && (
          <>
            <h1 className="flex-center">
              {!videos || videos?.length === 0
                ? "Your playlist is empty"
                : selectedPlaylist?.title}
            </h1>
            <div className="grid responsive-grid responsive-grid-videos gap-2 w-100 mg-t-md">
              {videos?.map((video) => {
                const id = video.id;
                return (
                  <VideoCard
                    displayDelete
                    cardType="playlist"
                    key={id}
                    video={video}
                    playlistId={playlistId}
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
