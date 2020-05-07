export function screenToGeo(map: H.Map) {
  map.addEventListener(
    'tap',
    (event: any) => {
      if (map) {
        const coords = map.screenToGeo(
          event.currentPointer.viewportX,
          event.currentPointer.viewportY,
        );
        console.log(coords);
      }
    },
    false,
  );
}
