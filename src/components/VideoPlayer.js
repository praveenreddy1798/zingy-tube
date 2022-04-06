import ReactPlayer from "react-player/lazy";
import { useAuth } from "../context";
import { VIDEO_EMBED_URL } from "../utils";

export const VideoPlayer = ({ videoId }) => {
  const {
    auth: { isAuth },
  } = useAuth();
  const videoSrc = VIDEO_EMBED_URL;
  return (
    <div className="video-player-container mg-t-sm">
      <ReactPlayer
        controls
        onPlay={() => {
          if (!played) {
            setPlayed(true);
          }
        }}
        width="100%"
        height="100%"
        url={`${videoSrc}${videoId}`}
      />
    </div>
  );
};
