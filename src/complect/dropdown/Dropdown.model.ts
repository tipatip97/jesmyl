

export interface DropdownProps<Id extends string, Item extends DropdownItem<Id>> {
    items: Item[];
    id?: string;
    onSelect?: (item: Item) => void;
    className?: string;
}

export interface DropdownItem<Id> {
    title: string;
    id: Id;
}

export const DropdownItemList = <Id>(list: DropdownItem<Id>[]) => list;