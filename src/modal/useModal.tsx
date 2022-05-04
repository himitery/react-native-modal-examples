import React, { useCallback, useContext, useEffect } from 'react';

import { ModalContext, ModalInterface } from './ModalProvider';
import { StyleProp, ViewStyle } from 'react-native';

const useModal = (
  modal: JSX.Element
): [
  boolean,
  (condition: boolean) => void,
  (style: StyleProp<ViewStyle>) => void
] => {
  const { visible, setVisible, setModal, setStyle } =
    useContext<ModalInterface>(ModalContext);

  useEffect(() => {
    setModal(modal);
  }, [modal]);

  const handleModalVisible = useCallback(
    (condition: boolean) => {
      setVisible(condition);
    },
    [setVisible]
  );

  return [visible, handleModalVisible, setStyle];
};

export default useModal;
