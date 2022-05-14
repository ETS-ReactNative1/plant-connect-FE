import React, { useState } from "react";
import { Alert, StyleSheet, StatusBar, SafeAreaView, Text, Pressable, View, Image, TextInput } from "react-native";
import { withTheme } from "styled-components";
import MyCarousel from "./Components/MyCarousel";
import {AntDesign} from '@expo/vector-icons'
import styled from 'styled-components'
import ModalForm from "./Components/ModalForm";
// import {setModalVisible, modalVisible } from "./Components/ModalForm";

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
      </Container>
     <ModalForm />
      <MyCarousel />
      
      
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
  height: 80%;
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