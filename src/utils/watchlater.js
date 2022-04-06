export const setWatchlaterVideos = (state, action) => {
  const watchlater = action.payload;
  return {
    ...state,
    watchlater,
  };
};

export const inWatchlater = (watchlater, id) =>
  watchlater.map((video) => video.id).includes(id);
