import { useEffect, useState } from 'react'
import {
	Modal,
	StyleSheet,
	Text,
	Pressable,
	View,
	TextInput,
	Image,
	ScrollView,
} from 'react-native'

export default function About({ setAboutModalVisible, aboutModalVisible }) {
	const intro =
		'planty swapper is a fun and useful mobile service that connects plant lovers to help them trade seeds, propogated clippings and fully grown plants with other plant lovers near and far to expand thir collection and to keep heirloom plant varietals from endangerment and extinction. Scroll down for tips, tutorials and other fun plant related material!'

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
				<Text style={styles.textStyle}>about planty swapper</Text>
				<Text style={styles.byline}>& other plantyful recources</Text>
				<ScrollView
					style={styles.messageBoard}
					multiline={true}
					numberOfLines={5}
					textAlignVertical={'top'}
					textBreakStrategy={'highQuality'}
					autoCorrect>
					<Text style={styles.intro}>{intro}</Text>
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
	byline: {
		fontStyle: 'italic',
	},
	centeredView: {
		flex: 1,
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
	intro: {
		color: '#545454',
		padding: 1,
		fontSize: 16,
		fontWeight: 'bold',
	},
	modalText: {
		textAlign: 'flex-start',
	},
	messageBoard: {
		flexWrap: 'wrap',
		minWidth: 50,
		maxWidth: 270,
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
