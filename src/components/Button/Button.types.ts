export const BUTTON_VARIANTS = ['assertive', 'ghost', 'subtle', 'text'] as const;
export type ButtonVariants = (typeof BUTTON_VARIANTS)[number];

export const BUTTON_ICON_SIZES = ['sm', 'md', 'lg', '2x', '3x', '4x', 'base'] as const;
export type ButtonIconSizes = (typeof BUTTON_ICON_SIZES)[number];

export const BUTTON_SIZES = ['small'] as const;
export type ButtonSizes = (typeof BUTTON_SIZES)[number];

export const BUTTON_ICONS = ['plus', 'chevronRight', 'chevronLeft', 'close'];
export type ButtonIcons = (typeof BUTTON_ICONS)[number];
