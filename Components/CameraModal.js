import React, { useState } from 'react'
import CameraView from './CameraView'

import {
	Modal,
	StyleSheet,
	Text,
	Pressable,
	View,
	TextInput,
} from 'react-native'

export default function CameraModal({
	visible,
	setModalVisible,
	createNewListing,
    setCameraModalVisible,
    setImage,
    image
}) {

	return (
		<Modal
			animationType='slide'
			transparent={true}
			visible={visible}
			onRequestClose={() => {
				Alert.alert('Modal has been closed.')
				setModalVisible(false)
			}}>
                
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
                <CameraView setImage={setImage} image={image} setCameraModalVisible={setCameraModalVisible}/>
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
	modalView: {
		margin: 20,
		height: 500,
		width: 400,
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
