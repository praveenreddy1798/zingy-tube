import { toastInitialState } from "../context/toast";

export const showToast = (state, action) => {
  const { successMessage, errorMessage } = action.payload;
  return {
    ...state,
    toast: {
      isVisible: true,
      successMessage,
      errorMessage,
    },
  };
};

export const hideToast = () => {
  return {
    ...toastInitialState,
  };
};

export const dispatchHideToastWithDelay = (dispatch, delay = 3000) =>
  setTimeout(() => {
    dispatch({
      type: "HIDE_TOAST",
    });
  }, delay);
