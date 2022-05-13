import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, TextInput } from "react-native";
import { withTheme } from "styled-components";
import MyCarousel from "./Components/MyCarousel";
import DropDownPicker from 'react-native-dropdown-picker';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Image source={require('./plant-connect-icon.png')} style={styles.tinyLogo} />
      <Text>Planty Dropper</Text>
      <MyCarousel />
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
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
        placeholder="Plant Name"
        // value={text}
      />
      <TextInput style={styles.input} 
      // onChangeText={onChangeText}
        placeholder="Plant Name"
        // value={text}
      />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Post Your Plant!</Text>
      </Pressable>
    </View>
  );
};

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
    borderWidth: 1,
  },
  modalView: {
    margin: 20,
    height: 400,
    backgroundColor: "green",
    borderRadius: 20,
    alignContent: 'center',
    justifyContent: "space-between",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
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
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  tinyLogo: {
    width: 100,
    height: 100,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  input: {
    backgroundColor: 'white',
    width: 160,
    height: 40,
    margin: 1,
  }
});

export default App;