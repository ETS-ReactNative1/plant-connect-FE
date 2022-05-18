import * as React from 'react'
import { useState, useEffect } from 'react'
import { listings } from '../apiCalls'
import {
	Text,
	View,
	StyleSheet,
	Pressable,
	SafeAreaView,
	Image,
	ImageBackground,
} from 'react-native'
const url = {
	uri: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Monstera_Adansonii.jpg',
}
import styled from 'styled-components'

import Carousel from 'react-native-snap-carousel'


const MyCarousel = () => {
	const [activeIndex, setActiveIndex] = useState(0)
	const [plants, setPlants] = useState([
		{
			title: 'Monsterra',
			text: 'Text 1',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/1/1c/Monstera_Adansonii.jpg',
		},
		{
			title: 'Snake Plant',
			text: 'Text 2',
		},
		{
			title: 'Swiss Cheese Plant',
			text: 'Text 3',
		},
		{
			title: 'Egg Plant',
			text: 'Text 4',
		},
		{
			title: 'Banana Ficus',
			text: 'Text 5',
		},
	])
	const [clippings, setClippings] = useState([
		{
			title: 'Spider',
			text: 'Text 1',
		},
		{
			title: 'Ivy',
			text: 'Text 2',
		},
		{
			title: 'Other',
			text: 'Text 3',
		},
		{
			title: 'Another other',
			text: 'Text 4',
		},
		{
			title: 'Potato',
			text: 'Text 5',
		},
	])
	const [seeds, setSeeds] = useState([
		{
			title: 'Papaya',
			text: 'Text 1',
		},
		{
			title: 'Tomato',
			text: 'Text 2',
		},
		{
			title: 'Apple',
			text: 'Text 3',
		},
		{
			title: 'Poppy',
			text: 'Text 4',
		},

		{
			title: 'Pumpkin',
			text: 'Text 5',
		},
	])
	const [modalVisible, setModalVisible] = useState(false)

	useEffect(() => {
		// console.log("LISTINGS", listings)
		listings
		.then(data => console.log("DATA", data) )
	}, []);


	const hideModal = () => {
		setModalVisible(false)
	}
	const _renderItem = ({ item, index }) => {
		return (
			<View
				style={{
					// backgroundColor: 'floralwhite',
					flex: 1,
					resizeMode: 'cover',
					justifyContent: 'center',
					borderRadius: 11,
					height: 200,
					width: 200,
					// marginTop: 15,
					// padding: 15,
				}}>
				<ImageBackground
					imageStyle={styles.cardBackground}
					source={url}
					resizeMode='cover'
					style={styles.cardBackground}>
					<Text style={{ fontSize: 20 }}>{item.title}</Text>
					<Text>{item.text}</Text>
					<Pressable
						style={[styles.button, styles.buttonOpen]}
						// onPress={() => this.setState({modalVisible: true})}
					>
						<Text style={styles.textStyle}>learn more!</Text>
					</Pressable>
				</ImageBackground>
			</View>
		)
	}

	return (
		<SafeAreaView
			style={{
				flex: 4,
				backgroundColor: '#57784E',
				// margin: 100,
				height: 100,
				width: 375,
			}}>
			<View
				style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'center' }}>
				<Carousel
					layout={'default'}
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
				style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'center' }}>
				<Carousel
					layout={'default'}
					ref={(ref) => (carousel = ref)}
					data={seeds}
					sliderWidth={100}
					itemWidth={200}
					renderItem={_renderItem}
					onSnapToItem={(index) => setActiveIndex(index)}
				/>
			</View>
			<View
				style={{ flex: 0.4, flexDirection: 'row', justifyContent: 'center' }}>
				<Carousel
					layout={'default'}
					ref={(ref) => (carousel = ref)}
					data={clippings}
					sliderWidth={100}
					itemWidth={200}
					renderItem={_renderItem}
					onSnapToItem={(index) => setActiveIndex(index)}
				/>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({

	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
		//   marginBottom: 15,
	},
	imageStyle: {
		height: 200,
	},
	cardBackground: {
		width: 200,
		flex: 1,
		justifyContent: 'center',
		height: 200,
		// borderRadius: 6,
	},
})

export default MyCarousel
