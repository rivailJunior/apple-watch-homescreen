import { useEffect, useState } from "react";

export function useImagesLoaded(imageUrls: (string | JSX.Element)[]) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    const imagePromises = imageUrls.map(
      (url) =>
        new Promise<void>((resolve, reject) => {
          // Skip non-string items (like JSX elements)
          if (typeof url !== 'string') {
            resolve();
            return;
          }
          const img = new Image();
          img.src = url;
          img.onload = () => resolve();
          img.onerror = () => reject();
        })
    );

    Promise.allSettled(imagePromises).then(() => {
      if (!isCancelled) setLoaded(true);
    });

    return () => {
      isCancelled = true;
    };
  }, [imageUrls]);

  return loaded;
}
