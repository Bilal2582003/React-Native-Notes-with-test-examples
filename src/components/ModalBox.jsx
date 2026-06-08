import { View, Text, TouchableHighlight, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import React, {useState} from 'react'

const ModalBox = () => {

    const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Modal</Text>
        <TouchableHighlight style={styles.openBtn}  underlayColor="darkblue"  onPress={() => setModalVisible(true)} >
          <Text style={styles.buttonText}>Open Modal</Text>
        </TouchableHighlight>
        <Modal
         visible={modalVisible}
         animationType='fade'
         transparent={true}
         onRequestClose={() => setModalVisible(false)}
         >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text>This is a Modal</Text>
                    <TouchableOpacity style={styles.closeBtn} onPress={() => setModalVisible(false)} >
                         <Text style={styles.buttonText}>Close Modal</Text>
                     </TouchableOpacity>
                </View>
            </View>
        </Modal>    
    </View>
  )
}

export default ModalBox

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f0f0f0'
    },
    openBtn:{
        backgroundColor:'blue',
        padding:10,
        borderRadius:5,
        marginTop:20
    },
    closeBtn:{
        backgroundColor:'red',
        padding:10, 
        borderRadius:5,
        marginTop:20
    },
    buttonText:{
        color:'white',
        fontWeight:'bold'
    },
    modalContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.5)' // for transparent background
    },
    modalContent:{
        width:300,
        padding:20,
        backgroundColor:'white',
        borderRadius:10,
        alignItems:'center'
    }
})