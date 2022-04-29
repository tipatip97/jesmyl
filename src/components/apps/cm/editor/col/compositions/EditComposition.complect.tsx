import CategoryBinds from "./complect/category-binds/CategoryBinds";
import EditableCompositionMain from "./complect/main/EditableCompositionMain";
import { EditCompositionNavItem } from "./EditComposition.model";

export const editCompositionNavs: readonly EditCompositionNavItem[] = [
  {
    place: "main",
    icon: 'credit-card',
    node: <EditableCompositionMain />,
  },
  {
    place: "catBinds",
    icon: 'book-open',
    node: <CategoryBinds />,
  },
] as const;
