import camelize from "camelize";
export const restaurantsRequest = (location) => {
  return fetch(
    `https://us-central1-nommy-50094.cloudfunctions.net/placesNearby?location=${location}`
    //remember to change this from ngrok to firebase when needed
  ).then((res) => {
    console.log("hello");
    return res.json();
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  //i suspect this is what is going on for above ^^ https://wesbos.com/destructuring-default-values
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};
