import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import {
	Modal,
	StyleSheet,
	Text,
	Pressable,
	View,
	TextInput,
} from 'react-native'

export default function ModalForm({
	visible,
	setModalVisible,
	createNewListing,
}) {
	const [category, setCategory] = useState('')
	const [plantName, setPlantName] = useState('')
	const [description, setDescription] = useState('')
	const [quantity, setQuantity] = useState(0)
	const [currentListing, setCurrentListing] = useState('')

	const submitListing = () => {
		const newListing = {
			id: Date.now(),
			plantName: plantName,
			category: category,
			description: description,
			quantity: quantity,
		}
		createNewListing(newListing)
		clearInputs()
	}

	const clearInputs = () => {
		setCategory('Category')
		setDescription('')
		setQuantity(0)
		setPlantName('')
	}

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
					<Text style={styles.modalText}>Post a Plant!</Text>
					<Text>name: {plantName}</Text>
					<Text>description: {description}</Text>
					<Text>quantity: {quantity}</Text>
					<DropDownPicker
						style={styles.dropdown}
						value={category}
						placeholder='Category'
						items={[
							{ label: 'Plant', value: 'plant' },
							{ label: 'Seeds', value: 'seeds' },
							{ label: 'Clippings', value: 'clippings' },
						]}
						defaultIndex={0}
						containerStyle={{ height: 40 }}
						onChangeItem={(item) => setCategory(item.value)}
					/>
					<TextInput
						style={styles.input}
						onChangeText={setPlantName}
						placeholder='Plant Name'
						value={plantName}
					/>
					<TextInput
						style={styles.input}
						onChangeText={setDescription}
						placeholder='Description'
						value={description}
					/>
					<TextInput
						style={styles.input}
						onChangeText={setQuantity}
						placeholder='Quantity'
						value={quantity}
					/>
					<Pressable
						style={[styles.button, styles.buttonClose]}
						onPress={() => setModalVisible(false)}>
						<Text style={styles.textStyle}>Submit</Text>
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
	dropdown: {
		height: 20,
		width: 160,
		marginLeft: 31,
		borderWidth: 1,
	},
	modalView: {
		margin: 20,
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
		// marginBottom: 15,
	},
	modalText: {
		textAlign: 'center',
	},
	input: {
		height: 40,
		// margin: 12,
		borderWidth: 1,
		padding: 10,
	},
	input: {
		backgroundColor: '#C4C4C4',
		width: 160,
		height: 40,
		margin: 1,
	},
})
