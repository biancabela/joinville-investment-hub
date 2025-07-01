import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-brand-navy z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <img 
            src="/lovable-uploads/5cb0ddb3-da63-4cee-80f8-148159cb95bd.png" 
            alt="GALPOMAX Logo" 
            className="h-20 mx-auto"
          />
        </motion.div>
        
        {/* Spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-brand-orange/20 border-t-brand-orange rounded-full mx-auto mb-4"
        />
        
        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white font-montserrat text-lg"
        >
          Carregando...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingSpinner;