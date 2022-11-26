import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return fetch(
    `https://us-central1-nommy-50094.cloudfunctions.net/geocode?city=${searchTerm}`
    //remember to change this from ngrok to firebase when needed
  ).then((res) => {
    return res.json();
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  // set a default value to retrn an empty object in case
  const { lat, lng } = geometry.location;
  console.log(lat, lng);
  //this is nested destructuring

  return { lat, lng, viewport: geometry.viewport };
};
