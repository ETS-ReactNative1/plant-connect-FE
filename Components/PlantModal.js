import React, { useState } from 'react'

import {
	Modal,
	StyleSheet,
	Text,
	Pressable,
	View,
	Image,
	TextInput,
	ImageBackground,
} from 'react-native'

export default function PlantModal({
	visible,
	setPlantModalVisible,
	setMessageModalVisible,
	currentListing,
}) {
	const image = { uri: currentListing.plant.photo }

	return (
		<Modal
			animationType='slide'
			transparent={true}
			visible={visible}
			onRequestClose={() => {
				Alert.alert('Modal has been closed.')
				setPlantModalVisible(false)
			}}>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<ImageBackground
						imageStyle={styles.cardBackground}
						source={image && image}
						resizeMode='cover'
						style={styles.cardBackground}
					/>
					<View style={styles.titleContainer}>
						<Text style={styles.plantName}>
							{currentListing.plant.plant_type.toLowerCase()}
						</Text>
						<Text style={styles.plantDescription}>
							{currentListing.description}
						</Text>
					</View>
					<Pressable onPress={() => setPlantModalVisible(false)}>
						<Image
							source={require('../close.png')}
							style={styles.closeButton}></Image>
					</Pressable>
					<Pressable onPress={() => setMessageModalVisible(true)}>
						<Text>Gimme! Gimme! Gimme!</Text>
					</Pressable>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
	closeButton: {
		height: 20,
		width: 20,
	},
	imageStyle: {
		height: 200,
	},
	cardBackground: {
		width: 300,
		flex: 1,
		justifyContent: 'center',
		height: 400,
		borderRadius: 6,
	},
	titleContainer: {
		padding: 10,
		backgroundColor: '#fff4f570',
		marginBottom: 15,
	},
	plantName: {
		fontSize: 24,
		fontFamily: 'AvenirNext-Regular',
		fontStyle: 'italic',
		fontWeight: 'bold',
		color: '#2d2d2d',
	},
	modalView: {
		margin: 20,
		height: 500,
		width: 330,
		backgroundColor: '#FFF9EB',
		borderRadius: 20,
		alignContent: 'center',
		justifyContent: 'space-between',
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 15,
			height: 15,
		},
		shadowOpacity: 0.7,
		shadowRadius: 5,
		elevation: 9,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: '#545454',
	},
	buttonClose: {
		backgroundColor: '#545454',
		width: 160,
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
		// marginBottom: 15,
	},
	modalText: {
		textAlign: 'center',
	},
})
