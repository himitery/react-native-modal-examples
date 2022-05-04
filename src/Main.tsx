import React, { useCallback, useEffect } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import useModal from './modal/useModal';
import StatusModal from './StatusModal';

const Main: React.FC = () => {
  const [isVisible, setIsVisible, setStyle] = useModal(<StatusModal />);

  useEffect(() => {
    setStyle({
      alignItems: 'center',
      justifyContent: 'center',
    });
  }, [setStyle]);

  const handleModalVisible = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleModalVisible}
          activeOpacity={0.7}
        >
          <Entypo name="plus" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 12,
    borderRadius: 50,
    backgroundColor: '#EE8432',
  },
});

export default Main;
