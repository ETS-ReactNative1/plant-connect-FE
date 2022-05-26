const getData = () => {
	return fetch(
		'https://plant-connect-be.herokuapp.com/api/v1/listings?user_id=1'
	).then((response) => {
		return response.json()
	})
}

const getMessages = (convo) => {
	let currentConvoId = convo || 11
	return fetch(
		`https://plant-connect-be.herokuapp.com/api/v1/conversations/${currentConvoId}?user_id=1`
	).then((response) => {
		return response.json()
	})
}
const getConversations = (convo) => {
	return fetch(
		`https://plant-connect-be.herokuapp.com/api/v1/conversations/?user_id=1`
	).then((response) => {
		return response.json()
	})
}

const postData = (listing) => {
	return fetch(
		'https://plant-connect-be.herokuapp.com/api/v1/listings?user_id=1',
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				listing: listing,
			}),
		}
	).then((response) => response.json())
}

const handleSubmit = (
	newMessage,
	currentListing,
	setCurrentConversation,
	conversationId
) => {
	let currentConvoId = conversationId || 11
	if (newMessage !== '') {
		fetch('https://plant-connect-be.herokuapp.com/api/v1/messages', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				user_id: 1,
				listing_id: currentListing.listing_id,
				content: newMessage,
				conversation_id: currentConvoId,
			}),
		})
			.then(async (r) => {
				let data = await r
					.json()
					.then((data) => setCurrentConversation(data.conversation_id))
			})
			.catch((err) => console.log(err))
	}
}

const postPhoto = (data, setPhoto) => {
	fetch('https://api.cloudinary.com/v1_1/plantconnect/upload', {
		body: data,
		headers: {
			'content-type': 'multipart/form-data',
		},
		method: 'POST',
	})
		.then(async (r) => {
			let data = await r.json().then((data) => console.log(data))
		})
		.catch((err) => console.log(err))
}

const listings = getData()

export {
	listings,
	getMessages,
	getConversations,
	postData,
	getData,
	postPhoto,
	handleSubmit,
}
