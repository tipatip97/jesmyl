import React, { useContext } from 'react';
import { JStorage } from '../../../complect/JStorage';
import { NavigationStorage } from '../../../complect/nav-configurer/Navigation.model';
import { AdminStorage } from './Admin.model';
import { User } from './complect/users/User';

export interface AdminContextModel {
  users: User[];
  currentUser?: User | und;
}

const adminStorage: JStorage<NavigationStorage<AdminStorage>> = new JStorage<NavigationStorage<AdminStorage>>('admin');
export default adminStorage;

export const defaultAdminContext: AdminContextModel = {
  users: [],
};

export const AdminContext = React.createContext<AdminContextModel>({ users: [] } as never);

export const useAdminContext = () => useContext(AdminContext);
