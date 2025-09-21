export const getLocationByIP = async() => {
  const res = await fetch("https://ipapi.co/json/");
  if (!res.ok) throw new Error("IP lookup failed");
  const data = await res.json();
  return {
    city: data.city,
    region: data.region,
    country: data.country_name,
    lat: data.latitude,
    lon: data.longitude,
  };
}


