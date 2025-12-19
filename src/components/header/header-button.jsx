import React from 'react';
import { motion } from 'framer-motion';

function HeaderButton({
  children,
  bgColor = '#F59331',
  color = '#fff',
  padding = '20px 8px',
  rounded = '8px',
  fontSize = '16px',
  fontWeight = 'medium',
  cursor = 'pointer',
  border = 'none',
  onClick,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  onKeyDown,
  onKeyUp,
  onKeyPress,
  onTouchStart,
  onTouchEnd,
  onTouchMove,
  onTouchCancel,
  onPointerDown,
  onPointerUp,
  onPointerMove,
  onPointerCancel,
  onPointerEnter,
  onPointerLeave,
  onPointerOver,
  onPointerOut,
  onGotPointerCapture,
  onLostPointerCapture,
  onDragStart,
  onDrag,
  onDragEnd,
  onDragEnter,
  onDragOver,
  onDragLeave,
  onDrop
}) {
  return (
    <motion.button
      className="flex items-center justify-center gap-[10px] hover:opacity-80 focus:outline-none focus:ring-2"
      style={{
        padding,
        borderRadius: rounded,
        backgroundColor: bgColor,
        color,
        fontSize,
        fontWeight,
        cursor,
        border
      }}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400 }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onKeyPress={onKeyPress}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
      onTouchCancel={onTouchCancel}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerMove={onPointerMove}
      onPointerCancel={onPointerCancel}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
      onGotPointerCapture={onGotPointerCapture}
      onLostPointerCapture={onLostPointerCapture}
      onDragStart={onDragStart}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {children}
    </motion.button>
  );
}

export default HeaderButton;
