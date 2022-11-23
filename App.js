//FOR JAVASCRIPT
//note to self: parenthesis are used as shothand to return an object : ({name:amanda}) is equivalent to { return {name:amanda}}
//parenthesis can also be used to group multitline return statements

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6HpoFMouimCJhuOb-U66Pv7vaYY5zd4s",
  authDomain: "nommy-50094.firebaseapp.com",
  projectId: "nommy-50094",
  storageBucket: "nommy-50094.appspot.com",
  messagingSenderId: "682404579046",
  appId: "1:682404579046:web:9efa09f1f755397f529d27",
  measurementId: "G-GV17J6910P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import React from "react";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import { Navigation } from "./src/infrastructure/navigation";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useRoboto,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  const [robotoLoaded] = useRoboto({
    Roboto_500Medium,
  });

  if (!oswaldLoaded || !latoLoaded || !robotoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
    </>
  );
}

//just to note, the location of the context providers do indeed matter, the inner child must be able to reference the outer child
