'use client';

import { motion } from 'motion/react';
import { GRID_CONFIG } from '../config/gridConfig';
import IconCircle from './IconCircle';
import type { MotionGridProps } from '../types/MotionGrid.types';

export default function IconGrid({
  x,
  y,
  circles,
  icons,
  onClick,
}: MotionGridProps) {
  return (
    <motion.div
      className='absolute flex items-center justify-center h-[10000px] w-[10000px] z-10'
      drag
      dragConstraints={{
        left: -24 * GRID_CONFIG.cols,
        right: 24 * GRID_CONFIG.cols,
        top: -24 * GRID_CONFIG.rows,
        bottom: 24 * GRID_CONFIG.rows,
      }}
      dragElastic={0.1}
      style={{ x, y }}
    >
      <div className='relative z-20'>
        {circles.map(({ x: circleX, y: circleY }, index) => (
          <IconCircle
            key={index}
            index={index}
            circleX={circleX}
            circleY={circleY}
            x={x}
            y={y}
            icon={icons[index % icons.length]}
            onClick={onClick}
          />
        ))}
      </div>
    </motion.div>
  );
}
