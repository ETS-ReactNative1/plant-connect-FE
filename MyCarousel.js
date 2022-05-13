import * as React from 'react';
import {
  Text, 
  View,
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
                title:"Sesame",
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
          ]
      }
    }

    _renderItem({item,index}){
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

