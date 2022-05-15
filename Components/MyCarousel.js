import * as React from 'react'
import { useState } from 'react'
import { Text, View, StyleSheet, Pressable, SafeAreaView } from 'react-native'

import styled from 'styled-components'

import Carousel, { ParallaxImage } from 'react-native-snap-carousel'

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

	const hideModal = () => {
		setModalVisible(false)
	}
	const _renderItem = ({ item, index, parallaxProps }) => {
		return (
			<View
				style={{
					backgroundColor: 'floralwhite',
					borderRadius: 12,
					height: 100,
					width: 100,
					marginTop: 15,
					padding: 15,
					marginLeft: 25,
					marginRight: 25,
				}}>
				<Text style={{ fontSize: 20 }}>{item.title}</Text>
				<Text>{item.text}</Text>
				<ParallaxImage
					source={{
						uri: `https://upload.wikimedia.org/wikipedia/commons/1/1c/Monstera_Adansonii.jpg`,
					}}
				/>
				<Pressable
					style={[styles.button, styles.buttonOpen]}
					// onPress={() => this.setState({modalVisible: true})}
				>
					<Text style={styles.textStyle}>learn more!</Text>
				</Pressable>
			</View>
		)
	}

	return (
		<SafeAreaView
			style={{
				flex: 4,
				backgroundColor: '#57784E',
				paddingTop: 1,
				borderRadius: 12,
				height: 500,
			}}>
			<View
				style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'center' }}>
				<Carousel
					layout={'default'}
					ref={(ref) => (this.carousel = ref)}
					data={plants}
					sliderWidth={100}
					itemWidth={120}
					renderItem={_renderItem}
					onSnapToItem={(index) => setActiveIndex(index)}
					hasParallaxImages={true}
				/>
			</View>
			<View
				style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'center' }}>
				<Carousel
					layout={'default'}
					ref={(ref) => (this.carousel = ref)}
					data={seeds}
					sliderWidth={300}
					itemWidth={300}
					renderItem={_renderItem}
					onSnapToItem={(index) => setActiveIndex(index)}
				/>
			</View>
			<View
				style={{ flex: 0.4, flexDirection: 'row', justifyContent: 'center' }}>
				<Carousel
					layout={'default'}
					ref={(ref) => (this.carousel = ref)}
					data={clippings}
					sliderWidth={300}
					itemWidth={300}
					renderItem={_renderItem}
					onSnapToItem={(index) => setActiveIndex(index)}
				/>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},

	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
		//   marginBottom: 15,
	},
	imageStyle: {
		height: 100,
	},
})

const cardBackground = styled.ImageBackground`
	width: 100%;
	height: 100%;
`
export default MyCarousel
