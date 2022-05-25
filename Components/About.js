import { useEffect, useState } from "react"
import {
	Modal,
	StyleSheet,
	Text,
	Pressable,
	View,
	TextInput,
	Image,
  ScrollView
} from 'react-native'

export default function About({
	setAboutModalVisible,
	aboutModalVisible,
}) {

  return (
		<Modal
		animationType='slide'
		transparent={true}
		visible={aboutModalVisible}
		onRequestClose={() => {
			Alert.alert('Modal has been closed.')
			setAboutModalVisible(false)
		}}>
			<View style={styles.modalView}>
				<Pressable onPress={() => setAboutModalVisible(false)}>
					<Image
						source={require('../close.png')}
						style={styles.closeButton}></Image>
				</Pressable>
				<Text style={styles.textStyle}>about planty swapper & other plantyful recources</Text>
        <ScrollView style={styles.messageBoard}
          multiline={true}
					numberOfLines={5}
					textAlignVertical={'top'}
					textBreakStrategy={'highQuality'}
					autoCorrect
        >
          <Text style={styles.textStyle}></Text>
        </ScrollView>
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
		marginLeft: 255,
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
	modalView: {
		margin: 30,
		height: 630,
		width: 320,
		backgroundColor: '#FFF9EB',
		borderRadius: 20,
		alignContent: 'center',
		justifyContent: 'space-between',
		padding: 30,
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
  messageBoard: {
		flexWrap: 'wrap',
		minWidth: 50,
		maxWidth: 270,
		borderWidth: 1,
		borderRadius: 4,
		paddingTop: 10,
		padding: 15,
		backgroundColor: '#e1ead3',
		width: 260,
		height: 400,
		margin: 1,
    marginTop: 10,
	},
})