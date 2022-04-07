import moment from "moment";
import { useState } from "react";
import { VideoPlayer } from ".";
import { useNavigate } from "react-router";
import { useAuth, useVideos } from "../context";
import {
  useAddToLikedVideos,
  useAddToWatchlaterVideos,
  useRemoveFromLikedVideos,
  useRemoveFromWatchlaterVideos,
} from "../services";
import { formatNumber, inLikes, inWatchlater } from "../utils";

export const VideoDetailsSection = ({ video }) => {
  const [played, setPlayed] = useState(false);
  const navigate = useNavigate();
  const {
    auth: { isAuth },
  } = useAuth();
  const {
    videosState: { likes, watchlater },
  } = useVideos();
  const {
    publishedAt,
    title,
    channelTitle,
    views: viewsCount,
    description,
    id,
  } = video;
  const { removeFromLiked } = useRemoveFromLikedVideos();
  const { addToLiked } = useAddToLikedVideos();
  const { removeFromWatchlater } = useRemoveFromWatchlaterVideos();
  const { addToWatchLater } = useAddToWatchlaterVideos();
  const isLiked = inLikes(likes, id);
  const isWatchLatered = inWatchlater(watchlater, id);
  const publishedDate = moment(publishedAt).fromNow();
  return (
    <div className="left-pane h-100">
      <div className="video-page-container">
        <h3 className="text-align-left">{title}</h3>
        <h3 className="text-align-left semi-bold secondary-color mg-t-xxsm">
          {channelTitle}
        </h3>
        <VideoPlayer
          videoId={id}
          played={played}
          setPlayed={setPlayed}
          video={video}
        />
        <div className="flex-between  mg-t-sm">
          <p className="regular-text text-align-left">
            {formatNumber(viewsCount)} views | {publishedDate}
          </p>
          <div className="flex align-center justify-end gap-1">
            <button
              onClick={() =>
                !isAuth
                  ? navigate("/login")
                  : isLiked
                  ? removeFromLiked(id, video)
                  : addToLiked(video)
              }
              className="flex-center bg-lynx-white gap-p5"
            >
              <p className="regular-text">Like</p>
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
              className="flex-center bg-lynx-white gap-p5"
            >
              <p className="regular-text">Watch later</p>
              <i
                className={`fa fa-2x heart-icon pointer ${
                  isWatchLatered
                    ? "fa-heart primary-color"
                    : "fa-heart-o secondary-dark"
                }`}
                aria-hidden="true"
              ></i>
            </button>
            <button className="flex-center bg-lynx-white gap-p5">
              <p className="regular-text">Save</p>
              <i
                className="fa playlist-icon fa-caret-square-o-right secondary-dark pointer"
                aria-hidden="true"
              ></i>
            </button>
          </div>
        </div>
        <div className="mg-t-xsm h-max-content description-section">
          <h3 className="text-align-left mg-t-sm semi-bold">Description</h3>
          <p className="regular-text text-align-left mg-t-xsm">{description}</p>
        </div>
      </div>
    </div>
  );
};
