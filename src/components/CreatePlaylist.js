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
      <div class="modal-container">
        <div class="modal bg-white position-absolute border-radius-sm pd-sm position-relative">
          <button
            class="btn btn-icon position-absolute close-button"
            onClick={() => {
              setIsModalVisible(false);
              setVideo({});
              setPlaylistName("");
            }}
          >
            <i class="fa fa-2x fa-close secondary-color"></i>
          </button>
          <h3 className="flex-center">
            {!cardType ? "Save to playlist" : "Create Playlist"}
          </h3>
          {!cardType && playlists.length > 0 && (
            <div class="flex-center playlist-section mg-t-sm">
              <div class="flex-vertical no-wrap row-gap-1 mg-b-sm">
                {playlists?.map((playlist) => {
                  const { title, id, videos } = playlist;
                  const videoInPlaylist = isVideoInPlaylist(videos, video.id);
                  return (
                    <div class="flex align-center gap-1">
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
          <div class="flex-center">
            <input
              class="input input-primary playlist-input border-radius-sm mg-t-sm"
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
              class={`btn btn-primary border-radius-sm mg-t-sm ${
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
