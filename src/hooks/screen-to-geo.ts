import React from 'react';
import MapContext from '../utils/map-context';

function screenToGeo() {
  const mapContext = React.useContext(MapContext);
  const { map } = mapContext;

  if (map) {
    map.addEventListener('tap', (event: any) => {
      const coords = map.screenToGeo(
        event.currentPointer.viewportX,
        event.currentPointer.viewportY,
      );
      console.log(coords);
    });
  }
}

export { screenToGeo };
