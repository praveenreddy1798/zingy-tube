import ReactPlayer from "react-player/lazy";
import { useAuth, useVideos } from "../context";
import { useAddToHistoryVideos } from "../services";
import { inHistory, VIDEO_EMBED_URL } from "../utils";

export const VideoPlayer = ({ videoId, played, setPlayed, video }) => {
  const {
    auth: { isAuth },
  } = useAuth();
  const {
    videosState: { history },
  } = useVideos();
  const { addToHistory } = useAddToHistoryVideos();
  const videoSrc = VIDEO_EMBED_URL;
  console.log(`${videoSrc}${videoId}`);
  return (
    <div className="video-player-container mg-t-sm">
      <ReactPlayer
        controls
        onPlay={() => {
          if (!played) {
            setPlayed(true);
            if (isAuth && !inHistory(history, videoId)) {
              addToHistory(video);
            }
          }
        }}
        width="100%"
        height="100%"
        url={`${videoSrc}${videoId}`}
      />
    </div>
  );
};
