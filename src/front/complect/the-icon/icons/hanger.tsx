import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4.12572 15.3668L10.1284 11.9903C10.7234 11.6556 11.3252 11.5 12 11.5C12.6748 11.5 13.2766 11.6556 13.8716 11.9903L19.8743 15.3668C20.5697 15.7579 21 16.4937 21 17.2916C21 18.5113 20.0113 19.5 18.7916 19.5H5.20841C3.98874 19.5 3 18.5113 3 17.2916C3 16.4937 3.43034 15.7579 4.12572 15.3668Z',
  d2: 'M10 6.40476C10 5.35279 10.8954 4.5 12 4.5C13.1046 4.5 14 5.35279 14 6.40476C14 7.12453 13.5808 7.75106 12.9623 8.07498C12.473 8.33119 12 8.75724 12 9.30952V11.5',
  d3: 'M11 6.40476C11 5.95049 11.4012 5.5 12 5.5C12.5988 5.5 13 5.95049 13 6.40476C13 6.7202 12.817 7.02224 12.4983 7.1891C11.9434 7.47969 11 8.16028 11 9.30952V10.6008C10.5303 10.6991 10.0798 10.8703 9.63816 11.1187L3.63545 14.4952C2.6252 15.0635 2 16.1325 2 17.2916C2 19.0635 3.43646 20.5 5.20841 20.5H18.7916C20.5635 20.5 22 19.0635 22 17.2916C22 16.1325 21.3748 15.0635 20.3645 14.4952L14.3618 11.1187C13.9202 10.8703 13.4697 10.6991 13 10.6008V9.31548C13.0038 9.30496 13.0166 9.27872 13.0542 9.23513C13.1284 9.14937 13.2564 9.04977 13.4262 8.96086C14.3447 8.47987 15 7.52886 15 6.40476C15 4.75509 13.6103 3.5 12 3.5C10.3897 3.5 9 4.75509 9 6.40476C9 6.95705 9.44772 7.40476 10 7.40476C10.5523 7.40476 11 6.95705 11 6.40476ZM12 12.5C11.4959 12.5 11.063 12.6119 10.6187 12.8618L4.61598 16.2384C4.23547 16.4524 4 16.855 4 17.2916C4 17.959 4.54103 18.5 5.20841 18.5H18.7916C19.459 18.5 20 17.959 20 17.2916C20 16.855 19.7645 16.4524 19.384 16.2384L13.3813 12.8618C12.937 12.6119 12.5041 12.5 12 12.5Z',
  d4: 'M12 5.5C11.4012 5.5 11 5.95049 11 6.40476C11 6.95705 10.5523 7.40476 10 7.40476C9.44772 7.40476 9 6.95705 9 6.40476C9 4.75509 10.3897 3.5 12 3.5C13.6103 3.5 15 4.75509 15 6.40476C15 7.52886 14.3447 8.47987 13.4262 8.96086C13.2564 9.04977 13.1284 9.14937 13.0542 9.23513C13.0166 9.27872 13.0038 9.30496 13 9.31548V11.5C13 12.0523 12.5523 12.5 12 12.5C11.4477 12.5 11 12.0523 11 11.5V9.30952C11 8.16028 11.9434 7.47969 12.4983 7.1891C12.817 7.02224 13 6.7202 13 6.40476C13 5.95049 12.5988 5.5 12 5.5Z',
  d5: 'M9.63816 11.1187C10.3837 10.6993 11.1546 10.5 12 10.5C12.8454 10.5 13.6163 10.6993 14.3618 11.1187L20.3645 14.4952C21.3748 15.0635 22 16.1325 22 17.2916C22 19.0635 20.5635 20.5 18.7916 20.5H5.20841C3.43646 20.5 2 19.0635 2 17.2916C2 16.1325 2.6252 15.0635 3.63545 14.4952L9.63816 11.1187ZM12 12.5C11.4959 12.5 11.063 12.6119 10.6187 12.8618L4.61598 16.2384C4.23547 16.4524 4 16.855 4 17.2916C4 17.959 4.54103 18.5 5.20841 18.5H18.7916C19.459 18.5 20 17.959 20 17.2916C20 16.855 19.7645 16.4524 19.384 16.2384L13.3813 12.8618C12.937 12.6119 12.5041 12.5 12 12.5Z',
  d6: 'M4.12572 15.3668L12 11L19.8743 15.3668C20.5697 15.7579 21 16.4937 21 17.2916C21 18.5112 20.0113 19.5 18.7916 19.5H5.20841C3.98874 19.5 3 18.5112 3 17.2916C3 16.4937 3.43034 15.7579 4.12572 15.3668Z',
  d7: 'M10 6.40476C10 5.35279 10.8954 4.5 12 4.5C13.1046 4.5 14 5.35279 14 6.40476C14 7.12453 13.5808 7.75106 12.9623 8.07498C12.473 8.33119 12 8.5 12 8.5V11',
  d8: 'M11 6.40476C11 5.95049 11.4012 5.5 12 5.5C12.5988 5.5 13 5.95049 13 6.40476C13 6.7202 12.817 7.02224 12.4983 7.1891C12.2886 7.29895 12.0772 7.39258 11.9153 7.45954C11.8354 7.49263 11.7697 7.5183 11.7252 7.53528C11.703 7.54375 11.6862 7.55001 11.6756 7.55389L11.663 7.55851L11 7.79512V10.4111L3.64073 14.4922L3.63545 14.4952C2.6252 15.0635 2 16.1324 2 17.2916C2 19.0635 3.43646 20.5 5.20841 20.5H18.7916C20.5635 20.5 22 19.0635 22 17.2916C22 16.1324 21.3748 15.0634 20.3646 14.4952L13 10.4111V9.16866C13.1331 9.10807 13.2783 9.03831 13.4262 8.96086C14.3447 8.47987 15 7.52886 15 6.40476C15 4.75509 13.6103 3.5 12 3.5C10.3897 3.5 9 4.75509 9 6.40476H11ZM4.61371 16.2396L12 12.1435L19.384 16.2383L19.3863 16.2396C19.7655 16.454 20 16.8559 20 17.2916C20 17.9589 19.459 18.5 18.7916 18.5H5.20841C4.54103 18.5 4 17.9589 4 17.2916C4 16.8559 4.23454 16.454 4.61371 16.2396Z',
};

export const IconHangerStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hanger-stroke-rounded IconHangerStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconHangerDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hanger-duotone-rounded IconHangerDuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconHangerTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hanger-twotone-rounded IconHangerTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHangerSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hanger-solid-rounded IconHangerSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHangerBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hanger-bulk-rounded IconHangerBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHangerStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hanger-stroke-sharp IconHangerStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHangerSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hanger-solid-sharp IconHangerSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHanger: TheIconSelfPack = {
  name: 'Hanger',
  StrokeRounded: IconHangerStrokeRounded,
  DuotoneRounded: IconHangerDuotoneRounded,
  TwotoneRounded: IconHangerTwotoneRounded,
  SolidRounded: IconHangerSolidRounded,
  BulkRounded: IconHangerBulkRounded,
  StrokeSharp: IconHangerStrokeSharp,
  SolidSharp: IconHangerSolidSharp,
};