import React, { useEffect } from 'react';
import { Animated, StyleSheet, TouchableWithoutFeedback } from 'react-native';

interface ModalProps {
  children: JSX.Element;
}

const Modal: React.FC<ModalProps> = ({children}) => {
	const opacity = new Animated.Value(0);

	useEffect(() => {
		Animated.timing(opacity, {
			toValue: 1,
			duration: 200,
			useNativeDriver: true,
		}).start();
	}, [opacity]);

	return (
		<TouchableWithoutFeedback>
			<Animated.View style={[styles.container, {opacity}]}>
				{children}
			</Animated.View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
});

export default Modal;
