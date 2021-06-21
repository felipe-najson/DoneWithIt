import * as Location from "expo-location";
import { useEffect, useState } from "react";
import logger from "../utility/logger";

export default useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const result = await Location.requestForegroundPermissionsAsync();
      if (!result.granted) return;

      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();

      setLocation({ latitude, longitude });
    } catch (error) {
      logger.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
