// "use client";

// import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
// import { useEffect, useState } from "react";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// // Fix Leaflet marker icons (needed for Next.js)
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
//   iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
//   shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
// });

// function LocationMarker({ position, onLocationSelect }) {
//   const [markerPosition, setMarkerPosition] = useState(position);

//   useMapEvents({
//     click(e) {
//       const { lat, lng } = e.latlng;
//       setMarkerPosition([lat, lng]);
//       if (onLocationSelect) {
//         onLocationSelect({ lat, lng });
//       }
//     },
//   });

//   useEffect(() => {
//     setMarkerPosition(position);
//   }, [position]);

//   return markerPosition ? <Marker position={markerPosition} /> : null;
// }

// export default function MapComponent({ lat, lang, height, width, onLocationSelect }) {
//   const [location, setLocation] = useState(() => {
//     if (lat && lang) {
//       return { lat: parseFloat(lat), lng: parseFloat(lang) };
//     }
//     return null;
//   });
//   const [loading, setLoading] = useState(!lat || !lang);

//   useEffect(() => {
//     if (!lat || !lang) {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (pos) => {
//             setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
//             setLoading(false);
//           },
//           () => {
//             setLocation({ lat: 30.0444, lng: 31.2357 }); // Cairo default
//             setLoading(false);
//           }
//         );
//       } else {
//         setLocation({ lat: 30.0444, lng: 31.2357 });
//         setLoading(false);
//       }
//     }
//   }, [lat, lang]);

//   if (!location) {
//     return (
//       <div className="w-full h-[201px] flex items-center justify-center">
//         Loading map...
//       </div>
//     );
//   }

//   return (
//     <div className={`rounded-lg ${width || "w-full"} ${height || "h-[550px]"}`}>
//       <MapContainer
//         center={[location.lat, location.lng]}
//         zoom={13}
//         style={{ height: "100%", width: "100%" }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution="&copy; OpenStreetMap contributors"
//         />
//         <LocationMarker position={[location.lat, location.lng]} onLocationSelect={onLocationSelect} />
//       </MapContainer>
//     </div>
//   );
// }


"use client";

import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet marker icons (needed for Next.js)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function LocationMarker({ onLocationSelect }) {
  const [markerPosition, setMarkerPosition] = useState(null);

  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setMarkerPosition([lat, lng]);
      if (onLocationSelect) {
        onLocationSelect({ lat, lng });
      }
    },
  });

  return markerPosition ? <Marker position={markerPosition} /> : null;
}

export default function MapComponent({ lat, lang, height, width, onLocationSelect }) {
  const [initialLocation, setInitialLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(!lat || !lang);

  useEffect(() => {
    if (lat && lang) {
      setInitialLocation({ lat: parseFloat(lat), lng: parseFloat(lang) });
      setIsLoading(false);
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setInitialLocation({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
          setIsLoading(false);
        },
        () => {
          setInitialLocation({ lat: 30.0444, lng: 31.2357 }); // Cairo fallback
          setIsLoading(false);
        }
      );
    } else {
      setInitialLocation({ lat: 30.0444, lng: 31.2357 });
      setIsLoading(false);
    }
  }, [lat, lang]);

  if (isLoading || !initialLocation) {
    return (
      <div className="w-full h-[201px] flex items-center justify-center">
        Loading map...
      </div>
    );
  }

  return (
    <div className={`rounded-lg ${width || "w-full"} ${height || "h-[550px]"}`}>
      <MapContainer
        center={[initialLocation.lat, initialLocation.lng]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {lat && lang ? (
          <Marker position={[parseFloat(lat), parseFloat(lang)]} />
        ) : (
          <LocationMarker onLocationSelect={onLocationSelect} />
        )}
      </MapContainer>
    </div>
  );
}
