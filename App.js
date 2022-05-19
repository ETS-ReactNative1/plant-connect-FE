import React, { useState } from 'react'
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
import { AntDesign } from '@expo/vector-icons'
import styled from 'styled-components'
import ModalForm from './Components/ModalForm'


const App = () => {
	const [modalVisible, setModalVisible] = useState(false)
	const [cameraModalVisible, setCameraModalVisible] = useState(false)
	const [allListings, setAllListings] = useState([])

	// const createNewListing = (newListing) => {
	// 	setAllListings([...allListings, newListing])
	// }

	return (
		<View style={styles.centeredView}>
			<Container>
				<SafeAreaView>
					<PlantBackground
						source={require('./creative-pastel-green-monstera-leaves-abstract-pattern-mykola-tsap.png')}>
						<MenuBar>
							<Back>
								<AntDesign name='arrowleft' size={24} color='#fff' />
								<Title>Planty Dropper</Title>
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
				// createNewListing={createNewListing}
			/>
			<MyCarousel />
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
	height: 95%;
`
const Title = styled.Text`
	font-family: 'AvenirNext-Regular';
	color: '#ffffff';
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
