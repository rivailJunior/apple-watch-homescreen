import { MotionValue } from 'motion/react';
import type { JSX, MouseEvent } from 'react';

type onClickHandler = (value: MouseEvent<HTMLDivElement>) => void;
type iconType = string | JSX.Element | undefined;

export interface MotionGridProps {
  x: MotionValue<number>;
  y: MotionValue<number>;
  circles: { x: number; y: number }[];
  icons: iconType[];
  onClick: onClickHandler;
}

export interface IconCircleProps {
  index: number;
  circleX: number;
  circleY: number;
  x: MotionValue<number>;
  y: MotionValue<number>;
  icon: iconType;
  onClick: onClickHandler;
}
