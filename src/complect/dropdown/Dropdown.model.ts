

export interface DropdownProps<Id , Item extends DropdownItem<Id>> {
    items: Item[];
    id?: Id;
    onSelect?: (item: Item) => void;
    className?: string;
}

export interface DropdownItem<Id> {
    title: string;
    id: Id;
    disabled?: boolean;
    color?: DropdownItemColor | null;
}

export const DropdownItemList = <Id>(list: DropdownItem<Id>[]) => list;
export type DropdownItemColor = 'ko';