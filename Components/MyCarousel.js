import * as React from "react";
import { useState, useEffect } from "react";
import { listings, getData } from "../apiCalls";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  SafeAreaView,
  Image,
  ImageBackground,
} from "react-native";


import Carousel from "react-native-snap-carousel";

const MyCarousel = ({plantModalVisible, setPlantModalVisible}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [plants, setPlants] = useState([]);
  const [clippings, setClippings] = useState([]);
  const [seeds, setSeeds] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);  

  useEffect(() => {
    getData().then((data) => {
      setCategories(data.data.attributes);
    });
  }, []);

  const setCategories = (data) => {
    const filteredPlants = data.filter(
      (listing) => listing.category === "plant"
    );
    const filteredSeeds = data.filter(
      (listing) => listing.category === "seeds"
    );
    const filteredClippings = data.filter(
      (listing) => listing.category === "clippings"
    );

    setPlants(filteredPlants);
    setSeeds(filteredSeeds);
    setClippings(filteredClippings);
  };

//   const hideModal = () => {
//     setModalVisible(false);
//   };



  const _renderItem = ({ item, index }) => {
    const image = { uri: item.plant.photo };
    return (
      <View
        style={{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center",
          borderRadius: 11,
          height: 200,
          width: 200,
        }}
      >
        <ImageBackground
          imageStyle={styles.cardBackground}
          source={image}
          resizeMode="cover"
          style={styles.cardBackground}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.plantName}>{item.plant.plant_type}</Text>
          </View>
		  <View style={styles.learnMore}>
		  <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setPlantModalVisible(true)}
          >
            <Text style={styles.textStyle}>learn more!</Text>
          </Pressable>
		  </View>
          
        </ImageBackground>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 4,
        backgroundColor: "#57784E",
        // margin: 100,
        height: 100,
        width: 375,
      }}
    >
      <View
        style={{ flex: 0.5, flexDirection: "row", justifyContent: "center" }}
      >
        <Carousel
          layout={"default"}
          ref={(ref) => (carousel = ref)}
          data={plants}
          sliderWidth={100}
          itemWidth={200}
          padding={0}
          renderItem={_renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      </View>
      <View
        style={{ flex: 0.5, flexDirection: "row", justifyContent: "center" }}
      >
        <Carousel
          layout={"default"}
          ref={(ref) => (carousel = ref)}
          data={seeds}
          sliderWidth={100}
          itemWidth={200}
          renderItem={_renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      </View>
      <View
        style={{ flex: 0.4, flexDirection: "row", justifyContent: "center" }}
      >
        <Carousel
          layout={"default"}
          ref={(ref) => (carousel = ref)}
          data={clippings}
          sliderWidth={100}
          itemWidth={200}
          renderItem={_renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  imageStyle: {
    height: 200,
  },
  cardBackground: {
    width: 200,
    flex: 1,
    justifyContent: "center",
    height: 200,
    // borderRadius: 6,
  },
  titleContainer: {
    backgroundColor: "#fff4f570",
  },
  learnMore: {
    backgroundColor: "#2d2d2d50",
	width: 95,
	marginLeft: 10,
	padding: 1,
  },
  plantName: {
    fontSize: 20,
    fontFamily: "AvenirNext-Regular",
    marginLeft: 10,
    fontWeight: "bold",
    color: "#2d2d2d",
  },
});

export default MyCarousel;
