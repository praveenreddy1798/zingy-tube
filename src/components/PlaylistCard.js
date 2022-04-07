import { useNavigate } from "react-router-dom";
import { useRemovePlaylists } from "../services";

export const PlaylistCard = ({ playlist }) => {
  const navigate = useNavigate();
  const { title, videos, id } = playlist;
  const { removePlaylists } = useRemovePlaylists();
  return (
    <div className="playlist-card pointer flex gap-p5 pointer border-radius-sm pd-xsm bg-white">
      <div
        onClick={() => navigate("/playlist", { state: { playlistId: id } })}
        className="flex-vertical flex-grow-1 pd-xxsm"
      >
        <h4 className="text-align-left">{title}</h4>
        <h4 className="secondary-color text-align-left mg-t-xsm">
          {videos?.length} videos
        </h4>
      </div>
      <button
        onClick={() => removePlaylists(id, playlist)}
        className="btn btn-icon btn-icon-card rounded flex-center"
      >
        <i className="fa fa-trash trash fa-2x"></i>
      </button>
    </div>
  );
};
