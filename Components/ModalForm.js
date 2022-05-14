import React, { useState } from "react";
import DropDownPicker from 'react-native-dropdown-picker';
import {Modal, StyleSheet, Text, Pressable, View, TextInput} from "react-native";

export default function ModalForm({visible, setModalVisible}) {
  
  
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Please Fill Out Form</Text>
            <DropDownPicker style={styles.dropdown} placeholder="Category"
    items={[
        {label: 'Item 1', value: 'item1'},
        {label: 'Item 2', value: 'item2'},
    ]}
    defaultIndex={0}
    containerStyle={{height: 40}}
    onChangeItem={item => console.log(item.label, item.value)}
/>
            <TextInput style={styles.input} 
      // onChangeText={onChangeText}
        placeholder="Plant Name"
        // value={text}
      />
      <TextInput style={styles.input} 
      // onChangeText={onChangeText}
        placeholder="Description"
        // value={text}
      />
      <TextInput style={styles.input} 
      // onChangeText={onChangeText}
        placeholder="Quantity"
        // value={text}
      />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
  )
  
}



const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    dropdown: {
      height: 20,
      width: 160,
      marginLeft: 31,
      borderWidth: 1,
    },
    modalView: {
      margin: 20,
      height: 500,
      width: 300,
      backgroundColor: "#57784E",
      borderRadius: 20,
      alignContent: 'center',
      justifyContent: "space-between",
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 15,
        height: 15
      },
      shadowOpacity: 0.7,
      shadowRadius: 5,
      elevation: 9
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#F194FF",
      width: 160,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      // marginBottom: 15,
    },
    modalText: {
      textAlign: "center"
    },
    input: {
      height: 40,
      // margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    input: {
      backgroundColor: 'white',
      width: 160,
      height: 40,
      margin: 1,
    }
  });
