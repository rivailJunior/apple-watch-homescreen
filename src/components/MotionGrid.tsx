import { motion } from 'motion/react';
import IconGrid from './IconGrid';
import type { MotionGridProps } from '../types/MotionGrid.types';

export function MotionGrid({ x, y, circles, icons, onClick }: MotionGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='relative flex items-center justify-center h-96 max-sm:h-full w-72 max-sm:w-full rounded-[64px] border-2 max-sm:border-0 border-red-800 overflow-hidden'
    >
      <IconGrid
        x={x}
        y={y}
        circles={circles}
        icons={icons}
        onClick={(value) => onClick?.(value)}
      />
    </motion.div>
  );
}
