/**
 * A helper function that disables map behavior on drag event in order to allow
 * the marker to be moved.
 * @param map
 * @param behavior
 */

export function screenToGeo(map: H.Map) {
  map.addEventListener('tap', (evt: any) => {
    var coords = map.screenToGeo(
      evt.currentPointer.viewportX,
      evt.currentPointer.viewportY,
    );
    return coords;
  });
}
