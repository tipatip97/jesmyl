import { NavigationConfig } from '../../../complect/nav-configurer/Navigation';
import { UseNavAction } from '../../../complect/nav-configurer/Navigation.model';
import useNavConfigurer from '../../../complect/nav-configurer/useNavConfigurer';
import { iconPackOfDashboardSpeed02 } from '@icons/dashboard-speed-02';
import TheTuner from './TheTuner';
import { TunerStorage } from './Tuner.model';

const tunerNavigation = new NavigationConfig<TunerStorage>('tuner', {
  title: 'Тюнер',
  root: content => <>{content}</>,
  rootPhase: 'tuner',
  routes: [
    {
      phase: ['tuner'],
      iconSelfPack: iconPackOfDashboardSpeed02,
      title: 'Тюнер',
      node: <TheTuner />,
    },
  ],
});

const actions: UseNavAction[] = [];

export default function useTunerNav() {
  return useNavConfigurer<TunerStorage>('tuner', actions, tunerNavigation);
}
