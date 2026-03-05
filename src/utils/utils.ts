
export function getCalculatedWidth(logo: ImageMetadata,targetHeightPx:number): number {
  const originalAspectRatio = logo.width / logo.height;
  const calculatedWidth = originalAspectRatio * targetHeightPx;
  return calculatedWidth + 5;
}
