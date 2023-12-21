export const isAndroid = navigator.userAgent && /android/i.test(navigator.userAgent);
export const isIPhone =
  ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) ||
  (navigator.userAgent.includes('Mac') && 'ontouchend' in document);

export const isTouchDevice = isAndroid || isIPhone;
