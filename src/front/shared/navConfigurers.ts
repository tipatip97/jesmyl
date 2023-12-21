import { AppName } from '../app/App.model';
import useNavConfigurer from '../complect/nav-configurer/useNavConfigurer';
import { AdminNavData } from '../components/apps/admin/Admin.model';
import useAdminNav from '../components/apps/admin/useAdminNav';
import { CmNavData } from '../components/apps/cm/Cm.model';
import useCmNav from '../components/apps/cm/base/useCmNav';
import { GamerNavData } from '../components/apps/gamer/Gamer.model';
import useGamerNav from '../components/apps/gamer/useGamerNav';
import { LeaderNavData } from '../components/apps/leader/Leader.model';
import useLeaderNav from '../components/apps/leader/useLeaderNav';
import useTunerNav from '../components/apps/tuner/useTunerNav';
import { IndexNavData } from '../components/index/Index.model';
import useIndexNav from '../components/index/complect/useIndexNav';

const navConfigurers: Record<AppName, () => ReturnType<typeof useNavConfigurer>> = {
  cm: useCmNav as never,
  index: useIndexNav as never,
  tuner: useTunerNav as never,
  admin: useAdminNav as never,
  gamer: useGamerNav as never,
  leader: useLeaderNav as never,
};
export default navConfigurers;

export type NavDataRegister = {
  cm: CmNavData;
  leader: LeaderNavData;
  index: IndexNavData;
  tuner: unknown;
  admin: AdminNavData;
  gamer: GamerNavData;
};
