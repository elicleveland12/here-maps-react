import React from 'react';
import MapContext from '../utils/map-context';

const mapContext = React.useContext(MapContext);

export function screenToGeo(event: any) {
  const { map } = mapContext;

  React.useEffect(() => {
    if (map) {
      const coords = map.screenToGeo(
        event.currentPointer.viewportX,
        event.currentPointer.viewportY,
      );
      console.log(coords);
    }
  });
}
