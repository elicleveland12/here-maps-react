import React from 'react';
import MapContext from '../utils/map-context';
const mapContext = React.useContext(MapContext);
const { map } = mapContext;

function screenToGeo() {
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
