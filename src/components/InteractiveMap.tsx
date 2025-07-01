import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const InteractiveMap = () => {
  const joinvillePosition = { lat: -26.3044, lng: -48.8487 };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full h-96 rounded-xl overflow-hidden shadow-2xl relative"
    >
      {/* Static map using Google Maps Static API as fallback */}
      <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 relative">
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14264.789!2d-48.8487!3d-26.3044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDE4JzE2LjAiUyA0OMKwNTAnNTEuMyJX!5e0!3m2!1sen!2sbr!4v1625097600000!5m2!1sen!2sbr`}
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'invert(1) hue-rotate(180deg)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl"
        />
        
        {/* Custom overlay with location marker */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="bg-brand-orange text-white p-3 rounded-full shadow-lg"
          >
            <MapPin className="h-6 w-6" />
          </motion.div>
        </div>

        {/* Location info overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg"
        >
          <h3 className="font-montserrat font-bold text-brand-navy mb-1">
            GALPOMAX Joinville
          </h3>
          <p className="text-sm text-gray-600">
            Localização estratégica para seu investimento
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InteractiveMap;