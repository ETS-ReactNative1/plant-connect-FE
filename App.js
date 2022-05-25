import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Pressable,
  View,
  Image,
  TextInput,
} from "react-native";
import MyCarousel from "./Components/MyCarousel";
import styled from "styled-components";
import ModalForm from "./Components/ModalForm";
import { getData, getMessages } from "./apiCalls";
import PlantModal from "./Components/PlantModal";
import MessageModal from "./Components/MessageModal";
import About from "./Components/About";
import ConversationModal from "./Components/ConversationModal";

const App = () => {
  const [messageModalVisible, setMessageModalVisible] = useState(null);
  const [conversationModalVisible, setConversationModalVisible] =
    useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [aboutModalVisible, setAboutModalVisible] = useState(false);
  const [cameraModalVisible, setCameraModalVisible] = useState(false);
  const [plantModalVisible, setPlantModalVisible] = useState(false);
  const [currentListing, setCurrentListing] = useState({
    listing_id: 57,
    active: true,
    quantity: 1,
    category: "plant",
    rooted: true,
    plant_id: 60,
    user_id: 17,
    description:
      "I named this Planty McPlantface and it refuses to come when called. Free to a good home.",
    plant: {
      photo:
        "https://user-images.githubusercontent.com/91357724/168396277-da1c9486-fbe9-4e9f-8fb7-68ed88e42489.jpeg",
      plant_type: "Snake Plant",
      indoor: true,
    },
  });
  const [allData, setAllData] = useState([]);
  const [plants, setPlants] = useState(null);
  const [clippings, setClippings] = useState([]);
  const [seeds, setSeeds] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getData().then((data) => setAllData(data.data.attributes));
  }, []);

  const setCategories = (data) => {
    data &&
      data.filter(
        (listing) =>
          listing.category === "plant" && setPlants([...plants, listing])
      );
    data.filter(
      (listing) => listing.category === "seeds" && setSeeds([...seeds, listing])
    );
    data.filter(
      (listing) =>
        listing.category === "clippings" &&
        setClippings([...clippings, listing])
    );
  };

  const retrieveConversations = () => {
    getMessages().then((data) => {
      const messageContent = data.data.attributes.messages.map((message) => {
        return message.user_id === 1 ? (
          <Text style={styles.yourMessages}>{message.content}</Text>
        ) : (
          <Text style={styles.theirMessages}>{message.content}</Text>
        );
      });
      setMessages(messageContent);
    });
  };

  const openConversations = () => {
    setConversationModalVisible(true);
    retrieveConversations();
  };

  return (
    <View style={styles.centeredView}>
      <Container>
        <SafeAreaView>
          <PlantBackground
            source={require("./creative-pastel-green-monstera-leaves-abstract-pattern-mykola-tsap.png")}
          >
            <MenuBar>
              <Back>
                <Pressable>
                  <Image
                    source={require("./planty_swapper.png")}
                    style={styles.logo}
                  ></Image>
                </Pressable>
              </Back>
            </MenuBar>
          </PlantBackground>
        </SafeAreaView>
      </Container>
      <ModalForm
        visible={modalVisible}
        setModalVisible={setModalVisible}
        cameraModalVisible={cameraModalVisible}
        setCameraModalVisible={setCameraModalVisible}
      />
      <PlantModal
        visible={plantModalVisible}
        setModalVisible={setPlantModalVisible}
        plantModalVisible={plantModalVisible}
        setPlantModalVisible={setPlantModalVisible}
        currentListing={currentListing}
        setMessageModalVisible={setMessageModalVisible}
      />
      <MessageModal
        messageModalVisible={messageModalVisible}
        setMessageModalVisible={setMessageModalVisible}
        currentListing={currentListing}
      />
      {conversationModalVisible && (
        <ConversationModal
          conversationModalVisible={conversationModalVisible}
          setConversationModalVisible={setConversationModalVisible}
          currentListing={currentListing}
          messages={messages}
          setMessages={setMessages}
          retrieveConversations={retrieveConversations}
        />
      )}
	  {aboutModalVisible && (
        <About
          aboutModalVisible={aboutModalVisible}
          setAboutModalVisible={setAboutModalVisible}
        />
      )}
      <MyCarousel
        plantModalVisible={plantModalVisible}
        setPlantModalVisible={setPlantModalVisible}
        setCurrentListing={setCurrentListing}
      />
      <View style={styles.footer}>
        <Pressable onPress={() => openConversations()}>
          <Image
            source={require("./mail-open-pngrepo-com.png")}
            style={styles.message}
          ></Image>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Post Your Plant!</Text>
        </Pressable>
        <Pressable onPress={() => setAboutModalVisible(true)}>
          <Image
            source={require("./plant-pngrepo-com.png")}
            style={styles.plant}
          ></Image>
        </Pressable>
      </View>
    </View>
  );
};

const Container = styled.View`
  flex: 1;
  width: 100%;
`;
const PlantBackground = styled.ImageBackground`
  width: 100%;
  height: 95%;
`;

const MenuBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;
const Back = styled.View`
  flex-direction: row;
  align-items: center;
`;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 17,
    backgroundColor: "#57784E",
  },
  footer: {
    flexDirection: "row",
	width: 375,
	height: 55,
    justifyContent: "space-around",
	backgroundColor: '#FFF9EB',
  },
  message: {
    marginTop: 10,
    width: 30,
	height: 30,
	backgroundColor: '#FFF9EB',
  },
  plant: {
    marginTop: 6,
    width: 37,
	height: 37,
	backgroundColor: '#FFF9EB',
  },
  logo: {
    marginTop: 1,
    width: 220,
    height: 60,
  },
  button: {
    margin: 10,
    borderRadius: 20,
    padding: 10,
	backgroundColor: "#545454",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  yourMessages: {
    width: 200,
    color: "#545454",
    padding: 1,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
    backgroundColor: "#f7e6f6",
    margin: 4,
    borderWidth: 1,
    borderColor: "000000",
    borderRadius: 6,
  },
  theirMessages: {
    width: 200,
    color: "#f7e6f6",
    padding: 1,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    backgroundColor: "#545454",
    margin: 4,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 6,
  },
});

export default App;
