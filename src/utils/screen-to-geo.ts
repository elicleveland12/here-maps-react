import React from 'react';

/**
 * A helper function that disables map behavior on drag event in order to allow
 * the marker to be moved.
 * @param map
 * @param behavior
 */

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
