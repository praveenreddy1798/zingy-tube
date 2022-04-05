import { createContext, useContext, useReducer } from "react";
import { toastReducer } from "../reducer";
export const toastInitialState = {
  toast: { isVisible: false, successMessage: null, errorMessage: null },
};

const ToastContext = createContext(toastInitialState);

const ToastProvider = ({ children }) => {
  const [toastState, toastDispatch] = useReducer(
    toastReducer,
    toastInitialState
  );
  return (
    <ToastContext.Provider value={{ toastState, toastDispatch }}>
      {children}
    </ToastContext.Provider>
  );
};

const useToast = () => useContext(ToastContext);

export { useToast, ToastProvider };
