import { EvaIconName } from '../eva-icon/EvaIcon';


export { default } from './useNavConfigurer';

export type SetPhasePayload<Phase, SpecialPhase> = Phase | nil | [Phase | nil, SpecialPhase | nil, boolean?];

// верни тут true, если событие "назад" уже не должно иметь эффекта
export type UseNavAction = () => boolean | void | any;

export type FooterItem<Phase> = null | {
    title: string;
    icon: EvaIconName;
    phases: Phase[];
    activeWithSpecialPhases?: boolean;
    accessRule?: string;
}