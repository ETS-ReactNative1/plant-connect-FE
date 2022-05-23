
import React, {useState} from "react"

const getData = () => {
	return fetch(
		'https://plant-connect-be.herokuapp.com/api/v1/listings?user_id=1'
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



const postPhoto = (data, setPhoto) => {
	fetch('https://api.cloudinary.com/v1_1/plantconnect/upload', {
	body: JSON.stringify(data),
	headers: {
	  'content-type': 'multipart/form-data'
	},
	method: 'POST',
  }).then(async r => {
	let data = await r.json()
	.then(data => console.log(data))
//    setPhoto(data.url);
  }).catch(err => console.log(err))
};


const listings = getData()
export { listings, postData, getData, postPhoto }
