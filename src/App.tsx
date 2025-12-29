'use client';

import { useMotionValue } from 'motion/react';
import { GRID_CONFIG } from './config/gridConfig';
import { generateCircles } from './utils/generateCircles';
import { icons } from './config/icons';
import { useImagesLoaded } from './hooks/useImagesLoaded';
import { MotionGrid, CustomIcon } from './components';

export default function App() {
  const testIcons = [
    ...icons,
    CustomIcon({ label: 'A' }),
    CustomIcon({ label: 'B' }),
    CustomIcon({ label: 'C' }),
    CustomIcon({ label: 'D' }),
    CustomIcon({ label: 'E' }),
    CustomIcon({ label: 'F' }),
    CustomIcon({ label: 'G' }),
  ].sort(() => Math.random() - 0.5);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const circles = generateCircles({ ...GRID_CONFIG, amount: testIcons.length });
  const allLoaded = useImagesLoaded(testIcons);

  return (
    <div className='flex items-center justify-center h-dvh w-full bg-black overflow-hidden relative'>
      {!allLoaded ? (
        <div className='flex flex-col items-center justify-center text-white'>
          <div className='w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin mb-4'></div>
          <p className='text-sm text-red-400'>Loading icons...</p>
        </div>
      ) : (
        <MotionGrid
          x={x}
          y={y}
          circles={circles}
          icons={testIcons}
          onClick={(value) => {
            const target = value.target as HTMLElement;
            console.log('Icon clicked', target?.dataset.value ?? 'unknown');
          }}
        />
      )}
    </div>
  );
}
