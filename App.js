//FOR JAVASCRIPT
//note to self: parenthesis are used as shothand to return an object : ({name:amanda}) is equivalent to { return {name:amanda}}
//parenthesis can also be used to group multitline return statements
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
