import React from 'react';

export function screenToGeo() {
  const [map] = React.useState<H.Map | undefined>(undefined);
  const [coords, setCoords] = React.useState<H.geo.Point | undefined>(
    undefined,
  );
  React.useEffect(() => {
    if (map) {
      map.addEventListener('tap', (event: any) => {
        setCoords(
          map.screenToGeo(
            event.currentPointer.viewportX,
            event.currentPointer.viewportY,
          ),
        );
        return coords;
      });
    }
  }, [map, coords, setCoords]);
}
