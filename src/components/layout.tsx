import { motion } from 'framer-motion';
import React, { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren<{ className?: string }>> = ({ className, children }) => {
  return (
    <motion.main
      className={`xl:container xl:mx-auto ${className}`}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.main>
  );
};

export default Layout;
