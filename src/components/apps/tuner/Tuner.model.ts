

export type TunerPhase = 'tuner';
export type TunerSpecialPhase = 'tuner';

export interface TunerState {
    phase: TunerPhase;
    prevPhase: TunerPhase;
    specialPhase?: TunerSpecialPhase | nil;
}
export interface TunerStorage {
    phase: TunerPhase;
    prevPhase: TunerPhase;
    specialPhase: TunerSpecialPhase;
    lastUpdate: number;
}