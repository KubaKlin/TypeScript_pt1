import { useState } from 'react';
import type { MouseEvent } from 'react';

interface Coordinates {
  xDimension: number;
  yDimension: number;
}

export const MousePad = () => {
  const [coordinates, setCoordinates] = useState<Coordinates | 0>(0);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const xDimension = event.clientX;
    const yDimension = event.clientY;
    setCoordinates({ xDimension, yDimension });
  };

  const handleMouseLeave = () => {
    setCoordinates(0);
  };

  return (
    <div
      style={{
        width: '300px',
        height: '300px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {coordinates && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
          }}
        >
          <p>position on X axis: {coordinates.xDimension}</p>
          <p>position on Y axis: {coordinates.yDimension}</p>
        </div>
      )}
    </div>
  );
};