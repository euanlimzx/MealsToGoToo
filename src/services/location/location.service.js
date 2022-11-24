import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return fetch(
    `http://9e7d-116-14-84-184.ngrok.io/nommy-50094/us-central1/geocode?city=${searchTerm}`
  ).then((res) => {
    return res.json();
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  // set a default value to retrn an empty object in case
  const { lat, lng } = geometry.location;
  //this is nested destructuring

  return { lat, lng, viewport: geometry.viewport };
};
