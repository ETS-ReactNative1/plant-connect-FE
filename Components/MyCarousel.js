import * as React  from 'react';
import {
  Text, 
  View,
  Modal,
  StyleSheet,
  Pressable,
  SafeAreaView } from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class MyCarousel extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          plants: [
          {
              title:"Monsterra",
              text: "Text 1",
          },
          {
              title:"Snake Plant",
              text: "Text 2",
          },
          {
              title:"Swiss Cheese Plant",
              text: "Text 3",
          },
          {
              title:"Egg Plant",
              text: "Text 4",
          },
          {
              title:"Banana Ficus",
              text: "Text 5",
          },
        ],
        seeds: [
            {
                title:"Papaya",
                text: "Text 1",
            },
            {
                title:"Tomato",
                text: "Text 2",
            },
            {
                title:"Apple",
                text: "Text 3",
            },
            {
                title:"Poppy",
                text: "Text 4",
            },
            {
                title:"Pumpkin",
                text: "Text 5",
            },
          ],
          clippings: [
            {
                title:"Spider",
                text: "Text 1",
            },
            {
                title:"Ivy",
                text: "Text 2",
            },
            {
                title:"Other",
                text: "Text 3",
            },
            {
                title:"Another other",
                text: "Text 4",
            },
            {
                title:"Potato",
                text: "Text 5",
            },
          ],
          modalVisible: false
      }
    }
    hideModal() {
        this.setState({modalVisible: false})
    }
    _renderItem({item, index}){
        // const [modalVisible, setModalVisible] = useState(false);
        return (
          <View style={{
              backgroundColor:'floralwhite',
              borderRadius: 5,
              height: 100,
              padding: 10,
              marginLeft: 25,
              marginRight: 25, }}>
            <Text style={{fontSize: 20}}>{item.title}</Text>
            <Text>{item.text}</Text>
            {/* <Modal
        animationType="slide"
        transparent={true}
        visible={this.modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          this.setState({modalVisible: false});
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => hideModal}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal> */}
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        // onPress={() => this.setState({modalVisible: true})}
      >
        <Text style={styles.textStyle}>learn more!</Text>
      </Pressable>
          </View>

        )
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, backgroundColor:'#57784E', paddingTop: 50, }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                    <Carousel
                    layout={"default"}
                    ref={ref => this.carousel = ref}
                    data={this.state.plants}
                    sliderWidth={300}
                    itemWidth={300}
                    renderItem={this._renderItem}
                    onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                    <Carousel
                    layout={"default"}
                    ref={ref => this.carousel = ref}
                    data={this.state.seeds}
                    sliderWidth={300}
                    itemWidth={300}
                    renderItem={this._renderItem}
                    onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                    <Carousel
                    layout={"default"}
                    ref={ref => this.carousel = ref}
                    data={this.state.clippings}
                    sliderWidth={300}
                    itemWidth={300}
                    renderItem={this._renderItem}
                    onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "green",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: .5,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    //   marginBottom: 15,
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    
  });

