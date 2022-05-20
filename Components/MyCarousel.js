import * as React from 'react'
import { useState, useEffect } from 'react'
import { listings, getData } from '../apiCalls'
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
	const [allData, setAllData] = useState([])
	const [plants, setPlants] = useState([])
	const [clippings, setClippings] = useState([])
	const [seeds, setSeeds] = useState([])
	const [modalVisible, setModalVisible] = useState(false)

	useEffect(() => {
		getData().then((data) => setAllData(data.data.attributes))
	}, [])

	// three use effects to 'catch' the changes in the three states
	// Initially set all data and then iterate over it?
	// maybe a second useEffect that sets the data after it has been move to AllData?
	useEffect(() => {
		allData && setCategories(allData)
	}, [])

	const setCategories = (data) => {
		data &&
			data.filter(
				(listing) =>
					listing.category === 'plant' && setPlants([...plants, listing])
			)
		data.filter(
			(listing) => listing.category === 'seeds' && setSeeds([...seeds, listing])
		)
		data.filter(
			(listing) =>
				listing.category === 'clippings' &&
				setClippings([...clippings, listing])
		)
	}

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
					<Text style={{ fontSize: 20 }}>{item.plant.plant_type}</Text>
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
