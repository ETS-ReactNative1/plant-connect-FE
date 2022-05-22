import React, { useState } from 'react'
import {
	Modal,
	StyleSheet,
	Text,
	Pressable,
	View,
	TextInput,
} from 'react-native'

export default function MessageModal({
	visible,
	setModalVisible,
	currentListing,
}) {
	const [currentMessage, setCurrentMessage] = useState('')

	return (
		<Modal
			animationType='slide'
			transparent={true}
			visible={visible}
			onRequestClose={() => {
				Alert.alert('Modal has been closed.')
				setModalVisible(false)
			}}>
			<View style={styles.modalView}>
				<Text>Send a Message</Text>
				<View>
					<TextInput
						style={styles.input}
						onChangeText={setCurrentMessage}
						placeholder={`I want your ${currentListing.plant.plant_type} bro...`}
						value={currentMessage}
						multiline={true}
						numberOfLines={5}
						textAlignVertical={'top'}
						textBreakStrategy={'highQuality'}
						autoCorrect
					/>
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
		margin: 40,
		height: 500,
		width: 300,
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
	},
	modalText: {
		textAlign: 'flex-start',
	},
	input: {
		flexWrap: 'wrap',
		minWidth: 50,
		maxWidth: 250,
		borderWidth: 1,
		padding: 10,
		backgroundColor: '#C4C4C4',
		width: 260,
		height: 400,
		margin: 1,
	},
})
