import { useEffect } from "react";
import { useToast } from "../context/toast";
import { dispatchHideToastWithDelay } from "../utils/toast";

export const Message = () => {
  const {
    toastState: {
      toast: { isVisible, successMessage, errorMessage },
    },
    toastDispatch,
  } = useToast();

  useEffect(() => {
    if (isVisible) {
      dispatchHideToastWithDelay(toastDispatch);
    }
  }, [isVisible, toastDispatch]);
  return (
    <>
      {isVisible && successMessage && (
        <div className="alert alert-success position-absolute">
          <i className="fa fa-check-circle fa-2x"></i>
          <p className="small-text semi-bold">{successMessage}</p>
        </div>
      )}
      {isVisible && errorMessage && (
        <div className="alert alert-danger position-absolute">
          <i className="fa fa-exclamation-triangle fa-2x"></i>
          <p className="small-text semi-bold">{errorMessage}</p>
        </div>
      )}
    </>
  );
};
