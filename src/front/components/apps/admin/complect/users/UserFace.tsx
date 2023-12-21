import propsOfClicker from '../../../../../complect/clicker/propsOfClicker';
import EvaIcon from '../../../../../complect/eva-icon/EvaIcon';
import useAdminNav from '../../useAdminNav';
import { User } from './User';
import './User.scss';

export default function UserFace({ user }: { user: User }) {
  const { goTo } = useAdminNav();
  return (
    <div
      className="user-face flex between full-width"
      onClick={() => goTo({ place: 'user', data: { cuser: user.login } })}
      {...propsOfClicker({ onCtxMenu: (event) => event.preventDefault() })}
    >
      <div className="logo">
        <EvaIcon name="person-outline" />
      </div>
      <span className="title ellipsis flex between full-width">
        <span>{user.name}</span>
        <span>{user.level}</span>
      </span>
    </div>
  );
}
