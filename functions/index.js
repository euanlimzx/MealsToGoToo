const functions = require("firebase-functions");
const { googleGeocodeRequest } = require("./geocode");
const { googlePlacesRequest } = require("./places");

const { Client } = require("@googlemaps/google-maps-services-js");

const client = new Client({});

exports.geocode = functions.https.onRequest((request, response) => {
  googleGeocodeRequest(request, response, client);
});

exports.placesNearby = functions.https.onRequest((request, response) => {
  googlePlacesRequest(request, response, client);
});
