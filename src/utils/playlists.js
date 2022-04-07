export const setPlaylists = (state, action) => {
  const playlists = action.payload;
  return {
    ...state,
    playlists,
  };
};

export const setPlaylistDetails = (state, action) => {
  const playlist = action.payload;
  const playlists = [...state.playlists].map((list) => {
    if (list.id === playlist.id) {
      return {
        ...playlist,
      };
    }
    return list;
  });
  return {
    ...state,
    selectedPlaylist: action.payload,
    playlists,
  };
};

export const isVideoInPlaylist = (playlistVideos = [], videoId) =>
  playlistVideos.map((video) => video.id).includes(videoId);
