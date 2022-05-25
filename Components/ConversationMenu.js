import { useEffect, useState } from 'react'
import {
	Modal,
	StyleSheet,
	Text,
	Pressable,
	View,
	Image,
	ScrollView,
} from 'react-native'
import { getConversations } from '../apiCalls'

export default function ConversationMenu({
	setConversationMenuVisible,
	setConversationModalVisible,
	conversationMenuVisible,
	setCurrentConversation,
	currentConversation,
}) {
	const [allConversations, setAllConversations] = useState([
		// { name: 'snake plant', id: 3 },
	])
	// let conversations = getConversations()

	useEffect(() => {
		let con = getConversations()
		console.log('adsfd', con)

		// console.log('slkdjfaf', allConversations)
		// setAllConversations(conversations)
	}, [])

	const goToConversation = (conversationId) => {
		setCurrentConversation(conversationId)
		setConversationMenuVisible(false)
		setConversationModalVisible(true)
	}

	let conversationbuttons = allConversations.map((conversation) => {
		return (
			<Pressable
				style={styles.convoButton}
				onPress={() => goToConversation(conversation.id)}>
				<Text style={styles.convoText}>{conversation.name}</Text>
			</Pressable>
		)
	})

	return (
		<Modal
			animationType='slide'
			transparent={true}
			visible={conversationMenuVisible}
			onRequestClose={() => {
				Alert.alert('Modal has been closed.')
				setModalVisible(false)
			}}>
			<View style={styles.modalView}>
				<Pressable onPress={() => setConversationMenuVisible(false)}>
					<Image
						source={require('../close.png')}
						style={styles.closeButton}></Image>
				</Pressable>
				<Text style={styles.textStyle}>your conversations</Text>
				<ScrollView
					style={styles.messageBoard}
					multiline={true}
					numberOfLines={5}
					textAlignVertical={'top'}
					textBreakStrategy={'highQuality'}
					autoCorrect>
					{conversationbuttons}
					<Text style={styles.textStyle}></Text>
				</ScrollView>
				<View></View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	convoButton: {
		width: 200,
		color: '#545454',
		padding: 1,
		marginLeft: 13,
		fontSize: 20,
		fontWeight: 'bold',
		backgroundColor: '#ffe8e9',
		margin: 4,
		borderWidth: 1,
		borderColor: '000000',
		borderRadius: 6,
	},
	convoText: {
		color: '#545454',
		padding: 1,
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	closeButton: {
		marginLeft: 255,
		height: 12.5,
		width: 12.5,
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
	textStyle: {
		color: '#545454',
		padding: 1,
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
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
