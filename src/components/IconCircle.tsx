'use client';

import { motion, MotionValue, useTransform } from 'motion/react';

interface IconCircleProps {
  index: number;
  circleX: number;
  circleY: number;
  x: MotionValue<number>;
  y: MotionValue<number>;
  icon: string | React.JSX.Element | undefined;
}

export default function IconCircle({
  index,
  circleX,
  circleY,
  x,
  y,
  icon,
}: IconCircleProps) {
  const distance = useTransform([x, y], (values: number[]) => {
    const [latestX, latestY] = values;
    const dx = -latestX - circleX;
    const dy = -latestY - circleY;
    return Math.sqrt(dx ** 2 * 0.06 + dy ** 2 * 0.02);
  });

  const scale = useTransform(distance, [0, 48], [1.1, 0]);
  const opacity = useTransform(distance, [0, 64], [2, -1]);

  return (
    <motion.div
      className='size-24 rounded-full absolute -left-12 -top-12 flex items-center justify-center shadow-lg overflow-hidden'
      style={{ x: circleX, y: circleY, scale, opacity }}
    >
      {typeof icon === 'string' ? (
        <img
          src={icon}
          alt={`icon-${index}`}
          className='w-full h-full object-contain pointer-events-none'
        />
      ) : (
        icon ?? null
      )}
    </motion.div>
  );
}
