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

import Carousel from 'react-native-snap-carousel'

const MyCarousel = ({ setPlantModalVisible, setCurrentListing }) => {
	const [activeIndex, setActiveIndex] = useState(0)
	const [plants, setPlants] = useState([])
	const [clippings, setClippings] = useState([])
	const [seeds, setSeeds] = useState([])
	//   const [modalVisible, setModalVisible] = useState(false);

	useEffect(() => {
		getData().then((data) => {
			setCategories(data.data.attributes)
		})
	}, [])

	const setCategories = (data) => {
		const filteredPlants = data.filter(
			(listing) => listing.category === 'plant'
		)
		const filteredSeeds = data.filter((listing) => listing.category === 'seeds')
		const filteredClippings = data.filter(
			(listing) => listing.category === 'clippings'
		)

		setPlants(filteredPlants)
		setSeeds(filteredSeeds)
		setClippings(filteredClippings)
	}

	const showPlantModal = (item) => {
		setCurrentListing(item)
		setPlantModalVisible(true)
	}

	const _renderItem = ({ item, index }) => {
		const image = { uri: item.plant.photo }
		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
				}}>
				<ImageBackground imageStyle={styles.cardImage} source={image} style={styles.cardBackground}>
					<View style={styles.titleContainer}>
						<Text style={styles.plantName}>
							{item.plant.plant_type.toLowerCase()}
						</Text>
					</View>
					<View style={styles.learnMore}>
						<Pressable onPress={() => showPlantModal(item)}>
							<Text style={styles.textStyle}>learn more!</Text>
						</Pressable>
					</View>
				</ImageBackground>
			</View>
		)
	}

	return (
		<SafeAreaView
			style={{
				flex: 5,
				backgroundColor: '#57784E',
				width: 370,
			}}>
			<View
				style={{
					flex: 0.5,
					flexDirection: 'row',
					justifyContent: 'center',
					padding: 9,
				}}>
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
				style={{
					flex: 0.5,
					flexDirection: 'row',
					justifyContent: 'center',
					padding: 9,
					paddingTop: 0,
				}}>
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
				style={{
					flex: 0.4,
					flexDirection: 'row',
					justifyContent: 'center',
					padding: 9,
					paddingTop: 0,
				}}>
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
	},
	cardBackground: {
		flex: 1,
		justifyContent: 'center',
		height: 157,
	},
	titleContainer: {
		backgroundColor: '#fff4f570',
	},
	learnMore: {
		backgroundColor: '#2d2d2d50',
		width: 95,
		marginLeft: 10,
		padding: 1,
	},
	plantName: {
		fontSize: 20,
		fontFamily: 'AvenirNext-Regular',
		marginLeft: 10,
		fontWeight: 'bold',
		color: '#2d2d2d',
	},
	cardImage: {
		borderRadius: 5,
	},
})

export default MyCarousel
