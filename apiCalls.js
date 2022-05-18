const getData = () => {
  return fetch('https://plant-connect-be.herokuapp.com/api/v1/listings')
  .then(response => {
    // console.log(response.json())
 return response.json()
  })
}

const listings = getData()
export { listings }
