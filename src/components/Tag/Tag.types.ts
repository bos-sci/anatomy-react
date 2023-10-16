export const TAG_VARIANTS = ['accent', 'assertive', 'featured', 'subtle'] as const;
export type TagVariant = (typeof TAG_VARIANTS)[number];
