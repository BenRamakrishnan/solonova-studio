export function previewImage(source, size = 640) {
  return source.replace(/\.(jpe?g|png)$/i, `-${size}.webp`);
}
export function previewSources(source) {
  return [320, 640, 960].map(size => `${previewImage(source, size)} ${size}w`).join(', ');
}
