import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';

// Custom marker icon
const customIcon = L.divIcon({
  className: 'custom-marker',
  html: `<div style="
    background-color: #FFA01B;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  "></div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

const InteractiveMap = () => {
  const joinvillePosition: [number, number] = [-26.3044, -48.8487];

  useEffect(() => {
    // Fix for default markers in React Leaflet
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full h-96 rounded-xl overflow-hidden shadow-2xl"
    >
      <MapContainer
        center={joinvillePosition}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        className="rounded-xl"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={joinvillePosition} icon={customIcon}>
          <Popup className="custom-popup">
            <div className="text-center p-2">
              <h3 className="font-montserrat font-bold text-brand-navy mb-1">
                GALPOMAX Joinville
              </h3>
              <p className="text-sm text-gray-600">
                Localização estratégica para seu investimento
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </motion.div>
  );
};

export default InteractiveMap;