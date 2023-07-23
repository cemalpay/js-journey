function getPosition() {
  // This function returns a promise that resolves to the user's geolocation position.
  // The navigator.geolocation.getCurrentPosition() method is used to get the position.
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function fetchAddress() {
  // 1) We get the user's geolocation position by calling the getPosition() function.
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address based on their geolocation position.
  // The getAddress() function (not shown here) is used to fetch the address information based on the provided position.
  // The fetched address information is then combined to form a descriptive address string.
  const addressObj = await getAddress(position); // This is a hypothetical function to get address information.
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Finally, we return an object that contains the user's geolocation position and the descriptive address.
  // The returned data can be used to display the address in an order form so that the user can confirm or correct it if needed.
  return { position, address };
}
