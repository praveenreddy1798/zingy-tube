import { Navbar, CreatePlaylist, PlaylistCard } from "../components";
import { useModal, useVideos } from "../context";
import { useQueryPlaylists } from "../services/playlists";

export const Playlists = () => {
  const { setIsModalVisible } = useModal();
  const {
    videosState: { playlists },
  } = useVideos();
  const { loading } = useQueryPlaylists();
  return (
    <div className="page-wrapper">
      <Navbar />
      <CreatePlaylist cardType="playlists" />
      <main className="main-section main-section-strech pd-md">
        <div className="flex-center">
          <button
            onClick={() => setIsModalVisible(true)}
            className="btn btn-primary"
          >
            Create New Playlist
          </button>
        </div>
        {!loading && (
          <div className="grid responsive-grid responsive-grid-videos gap-2 w-100 mg-t-md">
            {!playlists.length > 0 && !loading && (
              <h1>Your playlists is empty</h1>
            )}
            {playlists?.map((playlist) => {
              const id = playlist.id;
              return <PlaylistCard key={id} playlist={playlist} />;
            })}
          </div>
        )}
      </main>
    </div>
  );
};
