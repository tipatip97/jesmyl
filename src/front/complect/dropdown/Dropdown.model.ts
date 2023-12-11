import { ReactNode } from "react";
import { SokiServerEvent } from "../../models";


export interface DropdownProps<Id , Item extends DropdownItem<Id>> {
    items: (Item | null)[];
    placeholder?: string;
    id?: Id;
    onSelect?: (item: Item) => und | void | null | Promise<SokiServerEvent | null>;
    onSelectId?: (item: Id) => und | void | null | Promise<SokiServerEvent | null>;
    className?: string;
}

export interface DropdownItem<Id> {
    title: ReactNode;
    id: Id;
    disabled?: boolean;
    color?: DropdownItemColor | null;
}

export const DropdownItemList = <Id>(list: DropdownItem<Id>[]) => list;
export type DropdownItemColor = 'ko';