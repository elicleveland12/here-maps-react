export function screenToGeo(map: H.Map) {
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
