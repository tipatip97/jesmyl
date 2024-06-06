import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7.84308 3.80211C9.8718 2.6007 10.8862 2 12 2C13.1138 2 14.1282 2.6007 16.1569 3.80211L16.8431 4.20846C18.8718 5.40987 19.8862 6.01057 20.4431 7C21 7.98943 21 9.19084 21 11.5937V12.4063C21 14.8092 21 16.0106 20.4431 17C19.8862 17.9894 18.8718 18.5901 16.8431 19.7915L16.1569 20.1979C14.1282 21.3993 13.1138 22 12 22C10.8862 22 9.8718 21.3993 7.84308 20.1979L7.15692 19.7915C5.1282 18.5901 4.11384 17.9894 3.55692 17C3 16.0106 3 14.8092 3 12.4063V11.5937C3 9.19084 3 7.98943 3.55692 7C4.11384 6.01057 5.1282 5.40987 7.15692 4.20846L7.84308 3.80211Z',
  d2: 'M12 22C10.8862 22 9.8718 21.3993 7.84308 20.1979L7.15692 19.7915C5.1282 18.5901 4.11384 17.9894 3.55692 17C3 16.0106 3 14.8092 3 12.4063V11.5937C3 9.19084 3 7.98943 3.55692 7C4.11384 6.01057 5.1282 5.40987 7.15692 4.20846L7.84308 3.80211C9.8718 2.6007 10.8862 2 12 2',
  d3: 'M9.94779 1.77037C10.6511 1.44359 11.2946 1.25 11.9992 1.25C12.7038 1.25 13.3474 1.44359 14.0506 1.77037L19.6384 5.07944C20.2661 5.54083 20.7474 6.01311 21.0959 6.63212C21.4437 7.25014 21.6008 7.91095 21.6762 8.69506V15.3049C21.6008 16.0891 21.4437 16.7499 21.0959 17.3679C20.7474 17.9869 20.2661 18.4592 19.6384 18.9206L14.0506 22.2296C13.3474 22.5564 12.7038 22.75 11.9992 22.75C11.2946 22.75 10.6511 22.5564 9.94779 22.2296L4.35997 18.9206C3.73236 18.4592 3.25098 17.9869 2.90255 17.3679C2.55469 16.7499 2.39762 16.0891 2.32227 15.3049V8.69506C2.39762 7.91095 2.55469 7.25014 2.90255 6.63212C3.25098 6.01311 3.73236 5.54083 4.35997 5.07944L9.94779 1.77037Z',
  d4: 'M21.0957 6.63281C21.4435 7.25084 21.6006 7.91164 21.6759 8.69575V15.3056C21.6006 16.0897 21.4435 16.7505 21.0957 17.3686C20.7472 17.9876 20.2659 18.4599 19.6382 18.9213L14.0504 22.2303C13.3471 22.5571 12.7036 22.7507 11.999 22.7507C11.2944 22.7507 10.6509 22.5571 9.94758 22.2303L4.35976 18.9213C3.73214 18.4599 3.25077 17.9876 2.90234 17.3686L21.0957 6.63281Z',
  d5: 'M20.9998 17V7L11.9998 2L2.99805 7V17L11.9998 22L20.9998 17Z',
  d6: 'M11.6357 1.34435C11.8622 1.21854 12.1376 1.21855 12.3641 1.34438L21.3641 6.34438C21.6022 6.47666 21.7498 6.72762 21.7498 7V17C21.7498 17.2724 21.6022 17.5233 21.3641 17.6556L12.3641 22.6556C12.1376 22.7815 11.8622 22.7815 11.6357 22.6556L2.63387 17.6556C2.39574 17.5234 2.24805 17.2724 2.24805 17V7C2.24805 6.7276 2.39574 6.47662 2.63387 6.34435L11.6357 1.34435Z',
};

export const IconHexagonStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hexagon-stroke-rounded IconHexagonStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHexagonDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hexagon-duotone-rounded IconHexagonDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHexagonTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hexagon-twotone-rounded IconHexagonTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHexagonSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hexagon-solid-rounded IconHexagonSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHexagonBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hexagon-bulk-rounded IconHexagonBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHexagonStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hexagon-stroke-sharp IconHexagonStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHexagonSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hexagon-solid-sharp IconHexagonSolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHexagon: TheIconSelfPack = {
  name: 'Hexagon',
  StrokeRounded: IconHexagonStrokeRounded,
  DuotoneRounded: IconHexagonDuotoneRounded,
  TwotoneRounded: IconHexagonTwotoneRounded,
  SolidRounded: IconHexagonSolidRounded,
  BulkRounded: IconHexagonBulkRounded,
  StrokeSharp: IconHexagonStrokeSharp,
  SolidSharp: IconHexagonSolidSharp,
};