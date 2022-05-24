import React, { useState } from 'react'
import {
	Modal,
	StyleSheet,
	Text,
	Pressable,
	View,
	TextInput,
	Image,
} from 'react-native'
import { handleSubmit } from '../apiCalls'

export default function MessageModal({
	setMessageModalVisible,
	messageModalVisible,
	currentListing,
}) {
	const [currentMessage, setCurrentMessage] = useState('')

	const clearInputs = () => {
		setCurrentMessage('')
	}

	const submitMessage = () => {
		setMessageModalVisible(false)
		handleSubmit(currentMessage)
		clearInputs()
	}

	return (
		<Modal
		animationType='slide'
		transparent={true}
		visible={messageModalVisible}
		onRequestClose={() => {
			Alert.alert('Modal has been closed.')
			setModalVisible(false)
		}}>
			<View style={styles.modalView}>
				<Pressable onPress={() => setMessageModalVisible(false)}>
					<Image
						source={require('../close.png')}
						style={styles.closeButton}></Image>
				</Pressable>
				<Text style={styles.textStyle}>send a message</Text>
				<View>
					<TextInput
						style={styles.input}
						onChangeText={setCurrentMessage}
						placeholder={`I want your ${currentListing.plant.plant_type.toLowerCase()} bro...`}
						value={currentMessage}
						multiline={true}
						numberOfLines={5}
						textAlignVertical={'top'}
						textBreakStrategy={'highQuality'}
						autoCorrect
					/>
				</View>
				<Pressable style={styles.submitBtn} onPress={() => submitMessage()} >
					<Text style={styles.submitText}>submit message</Text>
				</Pressable>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	submitBtn: {
		backgroundColor: '#545454',
		padding: 7,
		borderRadius: 10,
		marginTop: 2,
	},
	closeButton: {
		marginLeft: 220,
		height: 12.5,
		width: 12.5,
	},
	submitText: {
		color: '#FFF9EB',
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 10,
		borderColor: 'red',
	},
	dropdown: {
		height: 20,
		width: 160,
		marginLeft: 31,
		borderWidth: 1,
	},
	modalView: {
		margin: 30,
		height: 600,
		width: 320,
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
		color: '#545454',
		padding: 1,
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalText: {
		textAlign: 'flex-start',
	},
	input: {
		flexWrap: 'wrap',
		minWidth: 50,
		maxWidth: 250,
		borderWidth: 1,
		borderRadius: 4,
		paddingTop: 10,
		padding: 15,
		backgroundColor: '#e1ead3',
		width: 260,
		height: 400,
		margin: 1,
	},
})
