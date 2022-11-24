import camelize from "camelize";
export const restaurantsRequest = (location) => {
  return fetch(
    `http://9e7d-116-14-84-184.ngrok.io/nommy-50094/us-central1/placesNearby?location=${location}`
  ).then((res) => {
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
