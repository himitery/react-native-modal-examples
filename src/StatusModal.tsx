import React, { useCallback, useContext } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';

import { ModalContext } from './modal/ModalProvider';
import Modal from './modal/Modal';

const StatusModal: React.VFC = () => {
  const { setVisible } = useContext(ModalContext);

  const handleOnPress = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  return (
    <Modal>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.content}>Modal!!</Text>

          <TouchableNativeFeedback onPress={handleOnPress}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>닫기</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		paddingHorizontal: 20,
	},
	innerContainer: {
		width: "100%",
		padding: 14,
		borderRadius: 12,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white'
	},
	content: {
		fontWeight: "600",
		fontSize: 14,
		marginVertical: 12,
	},
	button: {
		width: "100%",
		paddingVertical: 12,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 12,
		backgroundColor: "#EE8432"
	},
	buttonText: {
		fontWeight: "600",
		fontSize: 14,
		color: "white"
	}
})

export default StatusModal