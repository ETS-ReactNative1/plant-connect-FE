import React, { useState } from "react";
import { Alert, Modal, StyleSheet, StatusBar, SafeAreaView, Text, Pressable, View, Image, TextInput } from "react-native";
import { withTheme } from "styled-components";
import MyCarousel from "./Components/MyCarousel";
import DropDownPicker from 'react-native-dropdown-picker';
import {AntDesign} from '@expo/vector-icons'
import styled from 'styled-components'

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Container>
        <SafeAreaView>
        <PlantBackground source={require('./creative-pastel-green-monstera-leaves-abstract-pattern-mykola-tsap.png')} >
          <MenuBar>
            <Back>
              <AntDesign name='arrowleft' size={24} color='#fff' />
              <Title>Planty Dropper</Title>
            </Back>
          </MenuBar>
          
        </PlantBackground>
        </SafeAreaView>
        {/* <StatusBar barStyle="light-content" /> */}
        
        
      </Container>
      {/* <Image source={require('./plant-connect-icon.png')} style={styles.tinyLogo} /> */}
     
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

const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: #fff;
`
const PlantBackground = styled.ImageBackground`
  width: 100%;
  height: 90%;
`
const Title = styled.Text`
  font-family: 'AvenirNext-Regular';
  color: '#fff';
  font-size: 26;
  padding: 4px;
  font-weight: 700;
`
const MenuBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 18px;
`
const Back = styled.View`
  flex-direction: row;
  align-items: center;
`

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