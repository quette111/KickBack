import './locationComp.css'
import "leaflet/dist/leaflet.css";
import { getLocationByIP } from "../IPCall/IPCall";
import { useEffect, useState } from 'react';
import MapComponent from './MapComponent';
/*
export const LocationComponent = () => {

  const [location, setLoc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setErr] = useState(null);

  useEffect(() => {
    const handleGetLocation = async () => {
      setLoading(true);
      try {
        const data = await getLocationByIP();
        console.log(data);
        setLoc(data);
      } catch (e) {
        setErr(e);
      } finally {
        setLoading(false);
      }
    };
    handleGetLocation();
  }, []);
return (
  <>
    <div className="pickupLocation">
      <h4>
        Available for shipment to your location:<br></br>
        <span className="locationCity">{`📍${location?.city}`}</span>
      </h4>

      <MapComponent lat={location?.lat} lon={location?.lon} />
    </div>
  </>
);
}
*/