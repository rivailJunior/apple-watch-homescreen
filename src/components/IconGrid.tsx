'use client';

import { motion, MotionValue } from 'motion/react';
import { GRID_CONFIG } from '../config/gridConfig';
import IconCircle from './IconCircle';
import type { JSX } from 'react';

type Circle = { x: number; y: number };

interface IconGridProps {
  x: MotionValue<number>;
  y: MotionValue<number>;
  circles: Circle[];
  icons: (string | JSX.Element)[];
}

export default function IconGrid({ x, y, circles, icons }: IconGridProps) {
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
          />
        ))}
      </div>
    </motion.div>
  );
}
