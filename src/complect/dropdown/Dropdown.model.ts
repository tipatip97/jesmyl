

export interface DropdownProps<Item extends DropdownItem> {
    items: Item[];
    id?: string;
    onSelect?: (item: Item) => void;
}

export interface DropdownItem {
    title: string;
    id: string;
}