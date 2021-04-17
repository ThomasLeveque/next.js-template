import { motion } from 'framer-motion';
import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <motion.main
      className="xl:container xl:mx-auto"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.main>
  );
};

export default Layout;
