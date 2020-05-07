import React from 'react';
import MapContext from '../utils/map-context';

export function screenToGeo(event: any) {
  const mapContext = React.useContext(MapContext);
  const { map } = mapContext;

  if (map) {
    const coords = map.screenToGeo(
      event.currentPointer.viewportX,
      event.currentPointer.viewportY,
    );
    console.log(coords);
  }
}
