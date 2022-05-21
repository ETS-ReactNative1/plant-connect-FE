import React, { useState, useEffect } from 'react'
import {
	StyleSheet,
	SafeAreaView,
	Text,
	Pressable,
	View,
	Image,
	TextInput,
} from 'react-native'
import MyCarousel from './Components/MyCarousel'
import styled from 'styled-components'
import ModalForm from './Components/ModalForm'
import { getData } from './apiCalls'
import PlantModal from './Components/PlantModal'

const App = () => {
	const [modalVisible, setModalVisible] = useState(false)
	const [cameraModalVisible, setCameraModalVisible] = useState(false)
	const [plantModalVisible, setPlantModalVisible] = useState(false)
	const [currentListing, setCurrentListing] =useState([])
	const [allData, setAllData] = useState([])
	const [plants, setPlants] = useState(null)
	const [clippings, setClippings] = useState([])
	const [seeds, setSeeds] = useState([])
	
	useEffect(() => {
		getData().then((data) => setAllData(data.data.attributes))
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

	return (
		<View style={styles.centeredView}>
			<Container>
				<SafeAreaView>
					<PlantBackground
						source={require('./creative-pastel-green-monstera-leaves-abstract-pattern-mykola-tsap.png')}>
						<MenuBar>
							<Back>
								<Title>planty dropper</Title>
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
			/>
			<MyCarousel 
				plantModalVisible={plantModalVisible}
				setPlantModalVisible={setPlantModalVisible}
				setCurrentListing={setCurrentListing}
			/>
			<Pressable
				style={[styles.button, styles.buttonOpen]}
				onPress={() => setModalVisible(true)}>
				<Text style={styles.textStyle}>Post Your Plant!</Text>
			</Pressable>
		</View>
	)
}

const Container = styled.View`
	flex: 1;
	width: 100%;
`
const PlantBackground = styled.ImageBackground`
	width: 100%;
	height: 88%;
`
const Title = styled.Text`
	font-family: 'AvenirNext-Regular';
	// font-color: '';
	font-size: 30;
	padding: 3px;
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
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
		backgroundColor: '#57784E',
	},
	dropdown: {
		height: 20,
		width: 160,
		marginLeft: 31,
		borderWidth: 1,
	},

	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: '#545454',
	},
	// buttonClose: {
	//   backgroundColor: "#F194FF",
	//   width: 160,
	// },
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
})

export default App
