import { useState } from "react";
import { useModal, useVideos } from "../context";
import {
  useAddPlaylists,
  useAddVideoToPlaylist,
  useRemoveVideoFromPlaylist,
} from "../services";
import { isVideoInPlaylist } from "../utils/playlists";

export const CreatePlaylist = ({ cardType = null }) => {
  const { isModalVisible, setIsModalVisible, video, setVideo } = useModal();
  const {
    videosState: { playlists },
  } = useVideos();
  const { addPlaylists } = useAddPlaylists();
  const { addVideoToPlaylist } = useAddVideoToPlaylist();
  const { removeVideoFromPlaylist } = useRemoveVideoFromPlaylist();
  const [playlistName, setPlaylistName] = useState("");
  return (
    isModalVisible && (
      <div className="modal-container">
        <div className="modal bg-white position-absolute border-radius-sm pd-sm position-relative">
          <button
            className="btn btn-icon position-absolute close-button"
            onClick={() => {
              setIsModalVisible(false);
              setVideo({});
              setPlaylistName("");
            }}
          >
            <i className="fa fa-2x fa-close secondary-color"></i>
          </button>
          <h3 className="flex-center">
            {!cardType ? "Save to playlist" : "Create Playlist"}
          </h3>
          {!cardType && playlists.length > 0 && (
            <div className="flex-center playlist-section mg-t-sm">
              <div className="flex-vertical no-wrap row-gap-1 mg-b-sm">
                {playlists?.map((playlist) => {
                  const { title, id, videos } = playlist;
                  const videoInPlaylist = isVideoInPlaylist(videos, video.id);
                  return (
                    <div className="flex align-center gap-1">
                      <input
                        id={id}
                        type="checkbox"
                        name="playlist"
                        checked={videoInPlaylist}
                        onChange={() =>
                          videoInPlaylist
                            ? removeVideoFromPlaylist(id, video.id, video)
                            : addVideoToPlaylist(id, video)
                        }
                      />
                      <label htmlFor={id}>{title}</label>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          <div className="flex-center">
            <input
              className="input input-primary playlist-input border-radius-sm mg-t-sm"
              type="text"
              placeholder="Create new playlist"
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
            />
            <button
              onClick={() => {
                if (playlistName) {
                  addPlaylists(playlistName);
                  setPlaylistName("");
                }
                if (cardType) {
                  setIsModalVisible(false);
                  setVideo({});
                }
              }}
              className={`btn btn-primary border-radius-sm mg-t-sm ${
                !playlistName ? "disabled" : ""
              }`}
            >
              Create Playlist
            </button>
          </div>
        </div>
      </div>
    )
  );
};
