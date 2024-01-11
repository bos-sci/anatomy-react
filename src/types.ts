export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, undefined>>;
  }[Keys];

export interface NavItem {
  text: string;
  to?: string;
  href?: string;
}

export interface CarbonRibbonProps {
  url: string;
}
