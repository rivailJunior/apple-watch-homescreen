'use client';

import { useMotionValue, motion } from 'motion/react';
import IconGrid from './components/IconGrid';
import { GRID_CONFIG } from './config/gridConfig';
import { generateCircles } from './utils/generateCircles';
import { icons } from './config/icons';
import { useImagesLoaded } from './hooks/useImagesLoaded';

const testElement = ({ label = 'teste' }: { label: string }) => (
  <div
    className={`w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center text-white`}
  >
    {label}
  </div>
);

export default function App() {
  const testIcons = [
    ...icons,
    testElement({ label: 'Teste 1' }),
    testElement({ label: 'Teste 2' }),
    testElement({ label: 'Teste 3' }),
    testElement({ label: 'Teste 4' }),
    testElement({ label: 'Teste 5' }),
    testElement({ label: 'Teste 6' }),
    testElement({ label: 'Teste 7' }),
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className='relative flex items-center justify-center h-96 max-sm:h-full w-72 max-sm:w-full rounded-[64px] border-2 max-sm:border-0 border-red-800 overflow-hidden'
        >
          <IconGrid x={x} y={y} circles={circles} icons={testIcons} />
        </motion.div>
      )}
    </div>
  );
}
