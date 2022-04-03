import moment from "moment";
import { VideoPlayer } from ".";
import { formatNumber } from "../utils";

export const VideoDetailsSection = ({ video }) => {
  const {
    publishedAt,
    title,
    channelTitle,
    views: viewsCount,
    description,
    id,
  } = video;
  const publishedDate = moment(publishedAt).fromNow();
  return (
    <div class="left-pane h-100">
      <div class="video-page-container">
        <h3 class="text-align-left">{title}</h3>
        <h3 class="text-align-left semi-bold secondary-color mg-t-xxsm">
          {channelTitle}
        </h3>
        <VideoPlayer videoId={id} />
        <div class="flex-between  mg-t-sm">
          <p class="regular-text text-align-left">
            {formatNumber(viewsCount)} views | {publishedDate}
          </p>
          <div class="flex align-center justify-end gap-1">
            <button class="flex-center bg-lynx-white gap-p5">
              <p class="regular-text">Like</p>
              <i
                class="fa like-icon fa-thumbs-o-up pointer secondary-dark"
                aria-hidden="true"
              ></i>
            </button>
            <button class="flex-center bg-lynx-white gap-p5">
              <p class="regular-text">Watch later</p>
              <i
                class="fa fa-2x heart-icon fa-heart-o pointer secondary-dark"
                aria-hidden="true"
              ></i>
            </button>
            <button class="flex-center bg-lynx-white gap-p5">
              <p class="regular-text">Save</p>
              <i
                class="fa playlist-icon fa-caret-square-o-right secondary-dark pointer"
                aria-hidden="true"
              ></i>
            </button>
          </div>
        </div>
        <div class="mg-t-xsm h-max-content description-section">
          <h3 class="text-align-left mg-t-sm semi-bold">Description</h3>
          <p class="regular-text text-align-left mg-t-xsm">{description}</p>
        </div>
      </div>
    </div>
  );
};
