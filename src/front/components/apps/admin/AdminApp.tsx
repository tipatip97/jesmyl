import { ReactNode, useEffect, useState } from 'react';
import adminStorage, { AdminContext, defaultAdminContext } from './adminStorage';
import { User } from './complect/users/User';
import useAdminNav from './useAdminNav';

let localContext = defaultAdminContext;

export default function AdminApp({ content }: { content: ReactNode }) {
  const {
    appRouteData: { cuser },
  } = useAdminNav();
  const [context, setContext] = useState(localContext);
  localContext = context;

  useEffect(() => {
    setContext((prev) => {
      return {
        ...prev,
        currentUser: cuser ? context.users.find((user) => user.login === cuser) : undefined,
      };
    });
  }, [cuser, context.users]);

  useEffect(() => {
    (async () => {
      const val = await adminStorage.get('userList');
      if (val)
        setContext((prev) => {
          return {
            ...prev,
            users: val.map((auth) => new User(auth)).sort((a, b) => b.level - a.level || (a.name > b.name ? 1 : -1)),
          };
        });
    })();
  }, [cuser]);

  return <AdminContext.Provider value={context}>{content}</AdminContext.Provider>;
}
