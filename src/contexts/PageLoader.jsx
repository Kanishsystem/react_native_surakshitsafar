import React from "react";
import { View, StyleSheet,Text } from 'react-native';
import { ActivityIndicator, MD2Colors, Portal, Modal } from "react-native-paper";

const PageLoader = ({ message, loading }) => {
  return (
    (
      <Portal>
        <Modal visible={loading} dismissable={false} contentContainerStyle={styles.modalContainer}>       
          <View style={styles.loaderContainer}> 
            <ActivityIndicator animating={true} size="large" color="#0000ff" />
            <Text style={{color:"#ffffff",fontSize:24}}>Loading ..... Please Wait</Text>
          </View>
        </Modal>
      </Portal>
    )
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Adjust the opacity as needed
  },
  loaderContainer: {
    //backgroundColor: '#fff', // Background color for the loader container
    //padding: 20,
    //borderRadius: 10,
  },
});

export default PageLoader;

/*
 <div className="modal is-active">
      <div className="modal-background" onClick={closeModal}></div>
      <div className="modal-content">
        {modalContent}
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={closeModal}
      ></button>
    </div>    
    */
