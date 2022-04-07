import { createContext, useContext, useState } from "react";
export const modalInitialState = {
  isModalVisible: false,
  setIsModalVisible: () => {},
};

const ModalContext = createContext(modalInitialState);

const ModalProvider = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [video, setVideo] = useState({});
  return (
    <ModalContext.Provider
      value={{ isModalVisible, setIsModalVisible, video, setVideo }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => useContext(ModalContext);

export { useModal, ModalProvider };
