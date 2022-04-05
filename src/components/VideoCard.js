import moment from "moment";
import { useNavigate } from "react-router";
import { formatNumber, getStrippedText } from "../utils";
export const VideoCard = ({ video, displayDelete = false }) => {
  const navigate = useNavigate();
  const {
    id,
    publishedAt,
    title,
    channelTitle,
    views: viewsCount,
    thumbnails,
    videoType,
  } = video;
  const publishedDate = moment(publishedAt).fromNow();
  return (
    <div key={id} className="video-card border-light-grey position-relative">
      {displayDelete && (
        <button className="btn btn-icon btn-icon-card position-absolute rounded flex-center">
          <i className="fa fa-trash trash fa-2x"></i>
        </button>
      )}
      {videoType && (
        <h4 className="card-badge watch-badge position-absolute">Must watch</h4>
      )}
      <img
        className="thumbnail"
        src={thumbnails?.medium?.url}
        alt="thumbnail"
        loading="lazy"
      />
      <div className="action-icons-container border-light-grey">
        <button>
          <i
            className="fa like-icon fa-thumbs-up pointer secondary-dark"
            aria-hidden="true"
          ></i>
        </button>
        <button>
          <i
            className="fa fa-2x heart-icon fa-heart-o pointer secondary-dark"
            aria-hidden="true"
          ></i>
        </button>
        <button>
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
        onClick={() => navigate(`/video/${id}`)}
        className="btn btn-secondary w-100"
      >
        Watch Now
      </button>
    </div>
  );
};
