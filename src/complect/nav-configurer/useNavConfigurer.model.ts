import { EvaIconName } from '../eva-icon';

export { default } from './useNavConfigurer';

export type SetPhasePayload<Phase, SpecialPhase> = Phase | [Phase | nil, SpecialPhase | nil, boolean?];

// верни тут true, если событие "назад" уже не должно иметь эффекта
export type UseNavAction = () => boolean | void | any;

export interface FooterItem<Phase> {
    title: string;
    icon: EvaIconName;
    phases: Phase[];
    activeWithSpecialPhases?: boolean;
}