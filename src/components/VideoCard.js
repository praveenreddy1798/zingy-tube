import moment from "moment";
import { useNavigate } from "react-router";
import { useVideos, useAuth } from "../context";
import { useModal } from "../context";
import {
  useAddToLikedVideos,
  useAddToWatchlaterVideos,
  useRemoveFromHistoryVideos,
  useRemoveFromLikedVideos,
  useRemoveFromWatchlaterVideos,
  useRemoveVideoFromPlaylist,
} from "../services";
import { formatNumber, getStrippedText, inLikes, inWatchlater } from "../utils";
export const VideoCard = ({
  video,
  displayDelete = false,
  cardType = null,
  playlistId = null,
}) => {
  const {
    videosState: { likes, watchlater },
  } = useVideos();
  const { removeFromHistory } = useRemoveFromHistoryVideos();
  const { removeVideoFromPlaylist } = useRemoveVideoFromPlaylist();
  const {
    auth: { isAuth },
  } = useAuth();
  const navigate = useNavigate();
  const { setIsModalVisible, setVideo } = useModal();
  const {
    id,
    publishedAt,
    title,
    channelTitle,
    views: viewsCount,
    thumbnails,
    videoType,
  } = video;
  const { removeFromLiked } = useRemoveFromLikedVideos();
  const { addToLiked } = useAddToLikedVideos();
  const { removeFromWatchlater } = useRemoveFromWatchlaterVideos();
  const { addToWatchLater } = useAddToWatchlaterVideos();
  const isLiked = inLikes(likes, id);
  const isWatchLatered = inWatchlater(watchlater, id);
  const publishedDate = moment(publishedAt).fromNow();
  return (
    <>
      <div
        key={id}
        className="video-card card border-light-grey position-relative"
      >
        {displayDelete && (
          <button
            onClick={() =>
              cardType === "history"
                ? removeFromHistory(id, video)
                : removeVideoFromPlaylist(playlistId, id, video)
            }
            className="btn btn-icon btn-icon-card position-absolute rounded flex-center"
          >
            <i className="fa fa-trash trash fa-2x"></i>
          </button>
        )}
        {videoType && (
          <h4 className="card-badge watch-badge position-absolute">
            Must watch
          </h4>
        )}
        <img
          className="thumbnail"
          src={thumbnails?.medium?.url}
          alt="thumbnail"
          loading="lazy"
        />
        <div className="action-icons-container border-light-grey">
          <button
            onClick={() =>
              !isAuth
                ? navigate("/login")
                : isLiked
                ? removeFromLiked(id, video)
                : addToLiked(video)
            }
          >
            <i
              className={`fa like-icon pointer ${
                isLiked
                  ? "fa-thumbs-up primary-color"
                  : "fa-thumbs-o-up secondary-dark"
              }`}
              aria-hidden="true"
            ></i>
          </button>
          <button
            onClick={() =>
              !isAuth
                ? navigate("/login")
                : isWatchLatered
                ? removeFromWatchlater(id, video)
                : addToWatchLater(video)
            }
          >
            <i
              className={`fa fa-2x heart-icon pointer ${
                isWatchLatered
                  ? "fa-heart primary-color"
                  : "fa-heart-o secondary-dark"
              }`}
              aria-hidden="true"
            ></i>
          </button>
          <button
            onClick={() => {
              if (!isAuth) {
                navigate("/login");
              } else {
                setVideo(video);
                setIsModalVisible(true);
              }
            }}
          >
            <i
              className="fa playlist-icon fa-caret-square-o-right pointer secondary-dark"
              aria-hidden="true"
            ></i>
          </button>
        </div>
        <div className="content-section pd-xsm position-relative">
          <div className="flex-between">
            <div>
              <h4 className="text-align-left semi-bold">
                {getStrippedText(title, 25)}
              </h4>
              <h4 className="text-align-left semi-bold secondary-color">
                {channelTitle}
              </h4>
            </div>
          </div>
          <p className="text-align-left sub-heading mg-t-xsm">
            {formatNumber(viewsCount)} views | {publishedDate}
          </p>
        </div>
        <button
          onClick={() => navigate("/video", { state: { videoId: id } })}
          className="btn btn-secondary w-100"
        >
          Watch Now
        </button>
      </div>
    </>
  );
};
