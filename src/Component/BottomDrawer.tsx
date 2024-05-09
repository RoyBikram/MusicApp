import BottomSheet, {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import React, {useCallback, useMemo, useRef} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const BottomDrawer = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['10%','100%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
  }, []);
  // renders
  return (
    <View style={styles.container}>
      <Button
        onPress={handlePresentModalPress}
        title="Present Modal"
        color="black"
      />
      {/* <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        style={styles.containerModal}
      
      >
        <BottomSheetView
        
          style={styles.contentContainer}>
          
        </BottomSheetView>
      </BottomSheetModal> */}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    // backgroundColor: 'grey',
    height: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right:0
  },
  contentContainer: {
    // flex: 1,
    height: '100%',
    alignItems: 'center',
  },
  containerModal: {
    // flex: 1,
    // height: '100%',
    alignItems: 'center',
  },
  sheetContainer: {
    // add horizontal space
    // marginHorizontal: 24,
  },
});

export default BottomDrawer;
