import { useEffect, useRef, useState } from "react"
// import { useParams } from "react-router"
// import { createConsumer } from "@rails/actioncable"
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
import { getMessages, handleSubmit } from '../apiCalls'

export default function ConversationModal({
	setConversationModalVisible,
	conversationModalVisible,
	currentListing,
  messages,
  setMessages,
  retrieveConversations
}) {
  const [thread, setThread] = useState([])
  const [currentConversation, setCurrentConversation] = useState(null)
//   const params = useParams()
//   const cable = useRef()

  useEffect(() => {
    retrieveConversations()
    // if (!cable.current) {
    //   cable.current = createConsumer("ws://localhost:3000/cable")
    // }

    // const paramsToSend = {
    //   channel: "ConversationChannel",
    //   id: params.id
    // }
    
    // const handlers = {
    //   received(data) {
    //     setMessages([...messages, data])
    //     console.log("HANDLERS", data);
    //   },
    //   connected() {
    //     console.log("connected")
    //   },
    //   disconnected() {
    //     console.log("disconnected")
    //     cable.current = null
    //   }
    // }

    // const subscription = cable.subscriptions.create(paramsToSend, handlers)
    // return function cleanup() {
    //   cable.current = null
    //   subscription.unsubscribe()
    // }
  }, [messages])

  const clearInputs = () => {
		setThread('')
	}

  const sendMessage = () => {
    handleSubmit(thread, currentListing, setCurrentConversation)
    clearInputs()
    retrieveConversations()
  }

  return (
		<Modal
		animationType='slide'
		transparent={true}
		visible={conversationModalVisible}
		onRequestClose={() => {
			Alert.alert('Modal has been closed.')
			setModalVisible(false)
		}}>
			<View style={styles.modalView}>
				<Pressable onPress={() => setConversationModalVisible(false)}>
					<Image
						source={require('../close.png')}
						style={styles.closeButton}></Image>
				</Pressable>
				<Text style={styles.textStyle}>your conversation</Text>
        <ScrollView style={styles.messageBoard}
          multiline={true}
					numberOfLines={5}
					textAlignVertical={'top'}
					textBreakStrategy={'highQuality'}
					autoCorrect
        >
          {messages}
          <Text style={styles.textStyle}></Text>
        </ScrollView>
				<View>
					<TextInput
						style={styles.input}
						onChangeText={setThread}
						placeholder={`I want you bro...`}
						value={thread}
						multiline={true}
						numberOfLines={5}
						textAlignVertical={'top'}
						textBreakStrategy={'highQuality'}
						autoCorrect
					/>
				</View>
				<Pressable style={styles.submitBtn} onPress={() => sendMessage()} >
					<Text style={styles.submitText}>send message</Text>
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
		marginLeft: 255,
		height: 12.5,
		width: 12.5,
	},
	submitText: {
		color: '#FFF9EB',
		fontWeight: 'bold',
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
	input: {
		flexWrap: 'wrap',
		minWidth: 50,
		maxWidth: 270,
		borderWidth: 1,
		borderRadius: 4,
		paddingTop: 10,
		padding: 15,
		backgroundColor: '#e1ead3',
		width: 260,
		height: 50,
		margin: 1,
    marginBottom: 10,
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