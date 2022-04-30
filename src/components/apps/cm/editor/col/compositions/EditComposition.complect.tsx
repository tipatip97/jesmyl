import { EditCompositionNavItem } from "./EditComposition.model";

export const editCompositionNavs: readonly EditCompositionNavItem[] = [
  {
    place: "main",
    icon: "credit-card",
  },
  {
    place: "catBinds",
    icon: "book-open",
  },
] as const;
