
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loader = ({ finishLoading }) => {
  const [counter, setCounter] = useState(0);

  // Simulated progress counter
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(finishLoading, 500); // Small delay before closing
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Adjust speed here
    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] bg-[#0A0E12] flex flex-col items-center justify-center"
    >
      <div className="relative overflow-hidden mb-4">
        <motion.h1
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-black tracking-tighter"
        >
          JEROODI<span className="text-blue-500">.DEV</span>
        </motion.h1>
      </div>

      <div className="w-48 h-[2px] bg-slate-800 relative rounded-full overflow-hidden">
        <motion.div 
          className="absolute left-0 top-0 h-full bg-blue-500"
          initial={{ width: "0%" }}
          animate={{ width: `${counter}%` }}
        />
      </div>
      
      <span className="mt-4 font-mono text-blue-500/50 text-sm">
        {counter}%
      </span>
    </motion.div>
  );
};

export default Loader;