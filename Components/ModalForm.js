import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import CameraView from './CameraView'
import {
	Modal,
	StyleSheet,
	Text,
	Pressable,
	View,
	TextInput,
  Image
} from 'react-native'
import CameraModal from './CameraModal'
import { postData, postPhoto } from '../apiCalls'
import RadioButtons from './RadioButtons'

export default function ModalForm({
	visible,
	setModalVisible,
	// createNewListing,
	cameraModalVisible,
	setCameraModalVisible,
}) {
	const [plantName, setPlantName] = useState('')
	const [description, setDescription] = useState('')
	const [open, setOpen] = useState(false)
	const [value, setValue] = useState(null)
	const [quantity, setQuantity] = useState(0)
	const [image, setImage] = useState(null)
  const [photo, setPhoto] = useState()
	const [currentListing, setCurrentListing] = useState('')
	const [items, setItems] = useState([
		{ label: 'plant', value: 'plant' },
		{ label: 'clippings', value: 'clippings' },
		{ label: 'seeds', value: 'seeds' },
	])
	const [option, setOption] = useState('yes')
	const [indoor, setIndoor] = useState('')

	const data = [{ value: 'yes' }, { value: 'no' }]
	const environment = [{ value: 'indoor' }, { value: 'outdoor' }]

	const submitListing = () => {
		setModalVisible(false)
    clearInputs()
    let photoPath = image.split('/')
    let index = photoPath.length - 1
    let cloudPhoto = photoPath[index]

      const data = new FormData()
      data.append('file', cloudPhoto);
      data.append('upload_preset', 'd7dyers2');
      data.append("cloud_name", "plantconnect");

      console.log(data)
   
    postPhoto(data, setPhoto)
  }

  

  const sendListing = () => {

		const newListing = {
			quantity: parseInt(quantity),
			category: value,
			rooted: option === 'yes' ? true : false,
			description: description,
			user_id: 1,
			photo: 'banana',
			plant_type: plantName,
			indoor: indoor === 'indoor' ? true : false,
		}

		postData(newListing)
		
	}

	const clearInputs = () => {
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
        <Pressable onPress={() => setModalVisible(false)}>
					<Image
						source={require('../close.png')}
						style={styles.closeButton}></Image>
				</Pressable>
					{value === 'clippings' && <Text>rooted: {option}</Text>}
					<DropDownPicker
						open={open}
						style={styles.dropdown}
						value={value}
						placeholder='Category'
						defaultIndex={0}
						containerStyle={{ height: 40 }}
						items={items}
						setOpen={setOpen}
						setValue={setValue}
						// setItems={setItems(value)}
					/>
					{value === 'clippings' && (
						<RadioButtons data={data} onSelect={(value) => setOption(value)} />
					)}

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
					<RadioButtons
						data={environment}
						onSelect={(value) => setIndoor(value)}
					/>
					<Pressable
						style={[styles.button, styles.buttonOpen]}
						onPress={() => setCameraModalVisible(true)}>
						<Text style={styles.textStyle}>Take Picture</Text>
					</Pressable>
					{cameraModalVisible && (
						<CameraModal
							setImage={setImage}
							image={image}
							setCameraModalVisible={setCameraModalVisible}
						/>
					)}
					<Pressable
						style={[styles.button, styles.buttonClose]}
						onPress={() => submitListing()}>
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
  closeButton: {
		height: 20,
		width: 20,
		marginBottom: 10,
		marginTop: -20,
		marginLeft: 250,
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
	radioContainer: {
		border: 1,
		borderColor: 'red',
		borderWidth: 10,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	radio: {
		buttonColor: 'black',
		//  color: 'red'
	},
	radioLabel: {},
})
