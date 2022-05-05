import React, { createContext, useCallback, useMemo, useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import Conditional from '../hocs/Conditional';

export interface ModalInterface {
  visible: boolean;
  setVisible: (condition: boolean) => void;
  setModal: (modal: JSX.Element) => void;
  setStyle: (style: StyleProp<ViewStyle>) => void;
}

export const ModalContext = createContext<ModalInterface>({} as ModalInterface);

const ModalProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [modal, setModal] = useState<JSX.Element>(<></>);
  const [style, setStyle] = useState<StyleProp<ViewStyle>>();

  const value = useMemo<ModalInterface>(
    () => ({
      visible,
      setVisible,
      setModal,
      setStyle,
    }),
    []
  );

  const handleOnPress = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  return (
    <ModalContext.Provider value={value}>
      <Conditional condition={visible}>
        <TouchableWithoutFeedback onPress={handleOnPress}>
          <View style={[styles.container, style]}>{modal}</View>
        </TouchableWithoutFeedback>
      </Conditional>

      {children}
    </ModalContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    zIndex: 10000,
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },
});

export default ModalProvider;
