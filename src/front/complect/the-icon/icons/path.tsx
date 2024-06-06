import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M11 13.4625C14 14.955 17 12.8198 17 10.3934C17 7.96698 14.7614 6 12 6C9.23858 6 7 7.96698 7 10.3934C7 11.3826 7.37209 12.2955 8 13.0298M11 13.4625V9.90523M11 13.4625V15.8456C11 16.8264 11 17.3168 10.7732 17.5868C10.1251 18.3583 9 17.9399 8.5 17.2275',
  d3: 'M6.68802 1.93059C8.03143 1.74998 9.75214 1.74999 11.9428 1.75H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.75214 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V12.0572V11.9428V11.9428C1.74999 9.75211 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68802 1.93059ZM8 10.3934C8 8.63687 9.66542 7 12 7C14.3346 7 16 8.63687 16 10.3934C16 11.8764 14.1709 13.4907 12 12.7937V9.90523C12 9.35294 11.5523 8.90523 11 8.90523C10.4477 8.90523 10 9.35294 10 9.90523L10 15.8456C10 16.358 9.99876 16.6653 9.97678 16.8816C9.97213 16.9274 9.96712 16.9611 9.96285 16.985C9.9529 16.9911 9.94576 16.9932 9.94136 16.9944C9.9243 16.9993 9.88053 17.0063 9.80411 16.9888C9.63244 16.9495 9.43359 16.817 9.31853 16.6531C9.00126 16.201 8.37759 16.0917 7.92553 16.409C7.47347 16.7263 7.3642 17.3499 7.68147 17.802C8.06641 18.3505 8.68012 18.7833 9.35803 18.9384C10.075 19.1025 10.9286 18.9564 11.5389 18.23C11.8496 17.8601 11.9323 17.421 11.9665 17.0838C12.0001 16.7537 12 16.3424 12 15.8923L12 14.8532C15.1104 15.4629 18 13.2046 18 10.3934C18 7.2971 15.1883 5 12 5C8.81173 5 6 7.2971 6 10.3934C6 11.3547 6.27999 12.2544 6.76247 13.0288C7.05451 13.4975 7.67126 13.6408 8.14001 13.3488C8.60876 13.0567 8.75201 12.44 8.45997 11.9712C8.1631 11.4947 8 10.9587 8 10.3934Z',
  d4: 'M12.0572 1.75H11.9428C9.75214 1.74999 8.03143 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 9.75214 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75Z',
  d5: 'M12 7C9.66542 7 8 8.63687 8 10.3934C8 10.9587 8.1631 11.4947 8.45997 11.9712C8.75201 12.44 8.60876 13.0567 8.14001 13.3488C7.67126 13.6408 7.05451 13.4975 6.76247 13.0288C6.27999 12.2544 6 11.3547 6 10.3934C6 7.2971 8.81173 5 12 5C15.1883 5 18 7.2971 18 10.3934C18 13.2046 15.1104 15.4629 12 14.8532L12 15.8923C12 16.3424 12.0001 16.7537 11.9665 17.0838C11.9323 17.421 11.8496 17.8601 11.5389 18.23C10.9286 18.9564 10.075 19.1025 9.35803 18.9384C8.68012 18.7833 8.06641 18.3505 7.68147 17.802C7.3642 17.3499 7.47347 16.7263 7.92553 16.409C8.37759 16.0917 9.00126 16.201 9.31853 16.6531C9.43359 16.817 9.63244 16.9495 9.80411 16.9888C9.88053 17.0063 9.92429 16.9993 9.94136 16.9944C9.94576 16.9932 9.9529 16.9911 9.96285 16.985C9.96712 16.9611 9.97213 16.9274 9.97678 16.8816C9.99876 16.6653 10 16.358 10 15.8456V9.90523C10 9.35294 10.4477 8.90523 11 8.90523C11.5523 8.90523 12 9.35294 12 9.90523V12.7937C14.1709 13.4907 16 11.8764 16 10.3934C16 8.63687 14.3346 7 12 7Z',
  d6: 'M21 3V21H3V3H21Z',
  d7: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3L2.25 21C2.25 21.4142 2.58579 21.75 3 21.75L21 21.75C21.4142 21.75 21.75 21.4142 21.75 21L21.75 3C21.75 2.58579 21.4142 2.25 21 2.25L3 2.25ZM7.75 10.3934C7.75 8.4694 9.55871 6.75 12 6.75C14.4413 6.75 16.25 8.4694 16.25 10.3934C16.25 12.107 14.1383 13.8589 11.75 12.9715V9.90523H10.25L10.25 15.8456C10.25 16.3525 10.2491 16.6749 10.2255 16.9069C10.2119 17.0402 10.1941 17.0991 10.1875 17.1176C10.0801 17.2376 9.94688 17.2779 9.74835 17.2325C9.5134 17.1787 9.26269 17.0087 9.11389 16.7967L7.88611 17.6584C8.23731 18.1588 8.79916 18.5541 9.41379 18.6947C10.0577 18.8421 10.8088 18.7105 11.3475 18.0692C11.6089 17.758 11.685 17.3811 11.7178 17.0586C11.75 16.7414 11.75 16.3414 11.75 15.8833V15.8833L11.75 14.5406C14.8341 15.3363 17.75 13.1154 17.75 10.3934C17.75 7.46457 15.0816 5.25 12 5.25C8.91844 5.25 6.25 7.46457 6.25 10.3934C6.25 11.5772 6.69664 12.6596 7.42997 13.5172L8.57003 12.5424C8.04754 11.9314 7.75 11.1881 7.75 10.3934Z',
};

export const IconPathStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="path-stroke-rounded IconPathStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPathDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="path-duotone-rounded IconPathDuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPathTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="path-twotone-rounded IconPathTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPathSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="path-solid-rounded IconPathSolidRounded"
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

export const IconPathBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="path-bulk-rounded IconPathBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconPathStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="path-stroke-sharp IconPathStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPathSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="path-solid-sharp IconPathSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPath: TheIconSelfPack = {
  name: 'Path',
  StrokeRounded: IconPathStrokeRounded,
  DuotoneRounded: IconPathDuotoneRounded,
  TwotoneRounded: IconPathTwotoneRounded,
  SolidRounded: IconPathSolidRounded,
  BulkRounded: IconPathBulkRounded,
  StrokeSharp: IconPathStrokeSharp,
  SolidSharp: IconPathSolidSharp,
};