export const setLikedVideos = (state, action) => {
  const likes = action.payload;
  return {
    ...state,
    likes,
  };
};

export const inLikes = (likes, id) =>
  likes.map((video) => video.id).includes(id);
