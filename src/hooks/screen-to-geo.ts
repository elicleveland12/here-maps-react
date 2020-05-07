import React from 'react';

export function screenToGeo() {
  const [map] = React.useState<H.Map | undefined>(undefined);
  React.useEffect(() => {
    if (map) {
      map.addEventListener('tap', (evt: any) => {
        var coords = map.screenToGeo(
          evt.currentPointer.viewportX,
          evt.currentPointer.viewportY,
        );
        console.log(coords);
        return coords;
      });
    }
  }, [map]);
}
