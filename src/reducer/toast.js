import { showToast, hideToast } from "../utils";

export const toastReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_TOAST":
      return showToast(state, action);
    case "HIDE_TOAST":
      return hideToast();
    default:
      return state;
  }
};
