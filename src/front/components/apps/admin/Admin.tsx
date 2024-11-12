import { useEffect, useState } from 'react';
import DebouncedSearchInput from '../../../complect/DebouncedSearchInput';
import { MyLib, mylib } from 'front/utils';
import './Admin.scss';
import { useAdminContext } from './adminStorage';
import { User } from './complect/users/User';
import UserFace from './complect/users/UserFace';
import PhaseAdminEditorContainer from './phase-editor-container/PhaseAdminEditorContainer';

export default function Admin() {
  const { users } = useAdminContext();
  const [term, setTerm] = useState('');
  const [userList, setUserList] = useState(users);
  const search = (term: string, users: User[]) => {
    setUserList(term ? mylib.searchRate(users, term, ['name']).map(({ item }) => item) : users);
  };

  useEffect(() => search(term, users), [term, users]);

  return (
    <PhaseAdminEditorContainer
      className="admin-application"
      withoutBackButton
      headClass="full-width"
      head={
        <DebouncedSearchInput
          placeholder="Поиск пользователей"
          className="debounced-searcher round-styled full-width"
          initialTerm={term}
          debounce={500}
          onDebounced={term => search(term, users)}
          onTermChange={term => setTerm(term)}
        />
      }
      content={
        <>
          {userList.map(user => (
            <UserFace
              key={`user-${user.login}`}
              user={user}
            />
          ))}
        </>
      }
    />
  );
}
