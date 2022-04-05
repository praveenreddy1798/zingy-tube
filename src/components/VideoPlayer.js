import { VIDEO_EMBED_URL } from "../utils";

export const VideoPlayer = ({ videoId }) => {
  const videoSrc = `${VIDEO_EMBED_URL}${videoId}?autoplay=1`;
  return (
    <div class="video-player-container mg-t-sm">
      <iframe
        className="video-player-iframe"
        src={videoSrc}
        width="100%"
        height="100%"
        title="Zingy Tube"
        frameBorder="0"
        allow={
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        }
        allowFullScreen
      ></iframe>
    </div>
  );
};
