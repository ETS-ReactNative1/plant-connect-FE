import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import { Camera } from 'expo-camera'

const CameraView = ({
	setImage,
	image,
	setCameraModalVisible,
	setCameraViewVisible,
}) => {
	const [hasCameraPermission, setHasCameraPermission] = useState(null)
	const [camera, setCamera] = useState(null)
	const [type, setType] = useState(Camera.Constants.Type.back)

	useEffect(() => {
		;(async () => {
			const cameraStatus = await Camera.requestCameraPermissionsAsync()
			setHasCameraPermission(cameraStatus.status === 'granted')
		})()
	}, [])

	const takePicture = async () => {
		if (camera) {
			const data = await camera.takePictureAsync(null)
			console.log(data)
			setImage(data.uri)
			setCameraViewVisible(false)
		}
	}

	if (hasCameraPermission === false) {
		return <Text>No Camera Access!</Text>
	}

	return (
		<View style={{ flex: 1 }}>
			<Pressable onPress={() => setCameraModalVisible(false)}>
				<Image
					source={require('../close.png')}
					style={styles.closeButton}></Image>
			</Pressable>
			<View style={styles.cameraContainer}>
				{!image && (
					<Camera
						ref={(ref) => setCamera(ref)}
						style={styles.fixedRatio}
						type={type}
						ratio={'1:1'}
					/>
				)}
			</View>
			{!image && (
				<Pressable onPress={() => takePicture()}>
					<Text style={styles.icon}> 📸 </Text>
				</Pressable>
			)}
			{image && <Image source={{ uri: image }} style={styles.image} />}
			{image && (
				<View style={styles.buttonBox}>
					<Pressable onPress={() => setImage(null)}>
						<Text style={styles.textStyle}>delete photo -</Text>
					</Pressable>
					<Pressable onPress={() => setCameraModalVisible(false)}>
						<Text style={styles.textStyle}> save photo</Text>
					</Pressable>
				</View>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	cameraContainer: {
		height: 500,
		width: 300,
		flex: 1,
		flexDirection: 'row',
	},
	buttonBox: {
		flex: 0.5,
		flexDirection: 'row',
		padding: 10,
		marginLeft: 20,
		marginBottom: 40,
	},
	textStyle: {
		color: '#545454',
		padding: 1,
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	fixedRatio: {
		flex: 1,
		aspectRatio: 1,
		alignSelf: 'center',
		borderRadius: 6,
	},
	closeButton: {
		height: 20,
		width: 20,
		marginBottom: 8,
		marginTop: -15,
		marginLeft: 280,
	},
	icon: {
		fontSize: 40,
		alignSelf: 'center',
	},
	image: {
		flex: 6,
		aspectRatio: 1,
		alignSelf: 'center',
		borderRadius: 6,
		padding: 2,
		marginBottom: 10,
		borderWidth: 1,
		borderColor: 'black',
	},
})

export default CameraView
