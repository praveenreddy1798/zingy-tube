export { useQueryAllVideos, useQueryVideoById } from "./videos";
export { useLogin } from "./Auth/login";
export { useSignup } from "./Auth/signup";
export {
  useAddToLikedVideos,
  useQueryLikedVideos,
  useRemoveFromLikedVideos,
} from "./likes";
export {
  useAddToWatchlaterVideos,
  useQueryWatchlaterVideos,
  useRemoveFromWatchlaterVideos,
} from "./watch-later";
export {
  useAddToHistoryVideos,
  useClearAllHistoryVideos,
  useQueryHistoryVideos,
  useRemoveFromHistoryVideos,
} from "./history";

export {
  useQueryPlaylists,
  useAddPlaylists,
  useRemovePlaylists,
  useQueryPlaylistById,
  useAddVideoToPlaylist,
  useRemoveVideoFromPlaylist,
} from "./playlists";
