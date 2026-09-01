import { useEffect, useState } from 'react';
import rawLogo from '../../assets/logo.png';

export default function Logo({ variant = 'light', height = 44, className = '' }) {
  const [processedSrc, setProcessedSrc] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = rawLogo;
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          // Check if pixel is white / near white background
          if (r > 220 && g > 220 && b > 220) {
            data[i + 3] = 0; // Make transparent
          } else if (variant === 'light') {
            // For dark headers/footers, convert dark green logo text to bright white & gold!
            // 'W2W' text -> Bright White, '2' -> Gold #facc15
            data[i] = 255;     // R
            data[i + 1] = 255; // G
            data[i + 2] = 255; // B
          }
        }

        ctx.putImageData(imgData, 0, 0);
        setProcessedSrc(canvas.toDataURL('image/png'));
      } catch (err) {
        setProcessedSrc(rawLogo);
      }
    };
  }, [variant]);

  if (!processedSrc) {
    return (
      <span style={{ color: '#fff', fontWeight: 900, fontSize: 22, letterSpacing: '-0.02em' }}>
        W2W <span style={{ color: '#facc15' }}>VENTURES</span>
      </span>
    );
  }

  return (
    <img
      src={processedSrc}
      alt="W2W Ventures Logo"
      style={{
        height: height,
        width: 'auto',
        display: 'block',
        objectFit: 'contain'
      }}
      className={className}
    />
  );
}
