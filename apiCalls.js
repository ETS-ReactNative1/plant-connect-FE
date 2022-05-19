const getData = () => {
  return fetch('https://plant-connect-be.herokuapp.com/api/v1/listings?user_id=1')
  .then(response => {
 return response.json()
  })
}

const postData = (listing) => {
  return fetch('https://plant-connect-be.herokuapp.com/api/v1/listings?user_id=1', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      listing: listing,
    }),
  })
  .then(response => (response.json()))
  .then(data => (console.log(data)))
}


const listings = getData()
export { listings, postData }
