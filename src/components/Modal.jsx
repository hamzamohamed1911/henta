// Modal.js
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ show, onClose, children, label, position = 'center' }) => {
  const getPositionClasses = () => {
    switch (position) {
      case 'center':
        return 'justify-center items-center';
      case 'bottom':
        return 'justify-center items-end';
      default:
        return 'justify-center items-center';
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          onClick={onClose}
          className={`fixed inset-0 bg-[#FFFFFF] bg-opacity-50 flex ${getPositionClasses()} z-50`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg shadow-lg p-4 relative w-[329px] max-w-md"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="my-8 flex justify-center">{label}</h1>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
