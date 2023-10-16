export const CARD_VARIANTS = ['ghost', 'border-light', 'border-ghost'] as const;
export type CardVariant = (typeof CARD_VARIANTS)[number];
