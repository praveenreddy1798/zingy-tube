export const setHistoryVideos = (state, action) => {
  const history = action.payload;
  return {
    ...state,
    history,
  };
};

export const inHistory = (history, id) =>
  history.map((video) => video.id).includes(id);
