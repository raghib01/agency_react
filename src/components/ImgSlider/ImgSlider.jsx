// ImageSlider.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import  Back_1  from '../../assets/sponsor/microsoft.png'
import front from '../../assets/img/image_1.png'


const images = [
    <img src={Back_1} />,
    <img drc={front}/>
    
];

const ImageSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="img"
          key={page}
          src={images[page]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div>
    </>
  );
};
export default ImageSlider;