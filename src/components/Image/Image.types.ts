export const IMAGE_RATIO_OPTIONS = ['1:1', '4:3', '16:9', '21:9', '50:50'] as const;
export type ImageRatio = (typeof IMAGE_RATIO_OPTIONS)[number];
