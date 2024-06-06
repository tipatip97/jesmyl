import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8 8L16 16',
  d2: 'M17 3.23663C17.7506 3.22596 20.2363 2.70959 20.7634 3.23663C21.2904 3.76367 20.774 6.24941 20.7634 7',
  d3: 'M3.23663 17C3.22596 17.7506 2.70959 20.2363 3.23663 20.7634C3.76367 21.2904 6.24941 20.774 7 20.7634',
  d4: 'M14.998 9.00737L20.3838 3.62158',
  d5: 'M3.62598 20.3741L9.01172 14.9883',
  d6: 'M17 3.23717C17.7506 3.22617 20.2363 2.71017 20.7634 3.23717C21.2904 3.76417 20.774 6.24917 20.7634 7.00017M3.23666 17.0002C3.22596 17.7512 2.70956 20.2362 3.23666 20.7632C3.76366 21.2902 6.24936 20.7742 6.99996 20.7632M14.9974 9.00716L20.3832 3.62118M3.62596 20.3742L9.01176 14.9882',
  d7: 'M14.4697 8.46967C14.1768 8.76256 14.1768 9.23744 14.4697 9.53033C14.7626 9.82322 15.2374 9.82322 15.5303 9.53033L14.4697 8.46967ZM21.0303 4.03033C21.3232 3.73744 21.3232 3.26256 21.0303 2.96967C20.7374 2.67678 20.2626 2.67678 19.9697 2.96967L21.0303 4.03033ZM15.5303 9.53033L21.0303 4.03033L19.9697 2.96967L14.4697 8.46967L15.5303 9.53033Z',
  d8: 'M2.96967 19.9697C2.67678 20.2626 2.67678 20.7374 2.96967 21.0303C3.26256 21.3232 3.73744 21.3232 4.03033 21.0303L2.96967 19.9697ZM9.53033 15.5303C9.82322 15.2374 9.82322 14.7626 9.53033 14.4697C9.23744 14.1768 8.76256 14.1768 8.46967 14.4697L9.53033 15.5303ZM4.03033 21.0303L9.53033 15.5303L8.46967 14.4697L2.96967 19.9697L4.03033 21.0303Z',
  d9: 'M7.29289 7.29289C7.68342 6.90237 8.31658 6.90237 8.70711 7.29289L16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289Z',
  d10: 'M15.7071 9.70708C15.3166 10.0976 14.6834 10.0976 14.2929 9.70708C13.9024 9.31656 13.9024 8.68339 14.2929 8.29287L17.1977 5.38814L16.4258 4.61626C16.3024 4.49309 16.1501 4.34095 16.041 4.20049L16.0395 4.19851C15.9607 4.09713 15.6049 3.63907 15.8101 3.04548C16.0159 2.45032 16.5824 2.31041 16.7055 2.27998L16.7097 2.27896C16.8829 2.23605 17.0985 2.21029 17.275 2.18919L17.4087 2.17312C17.9677 2.10571 18.6875 2.01892 19.3306 2.00274C19.6706 1.99419 20.0316 2.0037 20.3609 2.05922C20.6542 2.10866 21.1023 2.22163 21.4403 2.55967C21.7783 2.89771 21.8913 3.34581 21.9407 3.63904C21.9963 3.96834 22.0058 4.32933 21.9972 4.66933C21.9811 5.31243 21.8943 6.0322 21.8269 6.59123L21.8108 6.72504C21.7897 6.90163 21.7639 7.11699 21.721 7.29027L21.72 7.29443C21.6896 7.41761 21.5496 7.98409 20.9545 8.18987C20.3609 8.39511 19.9028 8.03927 19.8015 7.96051L19.7995 7.95897C19.659 7.8499 19.5069 7.69752 19.3837 7.57417L18.6119 6.80235L15.7071 9.70708Z',
  d11: 'M8.29289 14.2929C8.68342 13.9024 9.31658 13.9024 9.70711 14.2929C10.0976 14.6834 10.0976 15.3166 9.70711 15.7071L6.80233 18.6119L7.57421 19.3837C7.69756 19.5069 7.84993 19.6591 7.959 19.7995L7.96054 19.8015C8.0393 19.9029 8.39514 20.3609 8.1899 20.9545C7.98412 21.5497 7.41764 21.6896 7.29446 21.72L7.2903 21.721C7.11706 21.7639 6.90155 21.7897 6.72498 21.8108L6.59132 21.8269C6.0323 21.8943 5.31245 21.9811 4.66936 21.9973C4.32936 22.0058 3.96837 21.9963 3.63907 21.9408C3.34584 21.8913 2.89774 21.7784 2.5597 21.4403C2.22166 21.1023 2.10869 20.6542 2.05925 20.361C2.00373 20.0317 1.99422 19.6707 2.00277 19.3307C2.01894 18.6876 2.10573 17.9678 2.17314 17.4088L2.18923 17.275C2.21034 17.0984 2.23607 16.883 2.27899 16.7097L2.28001 16.7056C2.31044 16.5824 2.45036 16.0159 3.04551 15.8101C3.6391 15.6049 4.09716 15.9607 4.19854 16.0395L4.20052 16.041C4.34098 16.1501 4.49312 16.3025 4.6163 16.4258L5.38811 17.1976L8.29289 14.2929Z',
  d12: 'M15.7071 9.70566C15.3166 10.0962 14.6834 10.0962 14.2929 9.70566C13.9024 9.31514 13.9024 8.68197 14.2929 8.29145L17.1977 5.38672L18.6119 6.80093L15.7071 9.70566Z',
  d13: 'M17.4076 2.17312C17.9666 2.10571 18.6865 2.01892 19.3296 2.00274C19.6696 1.99419 20.0305 2.0037 20.3598 2.05922C20.6531 2.10866 21.1012 2.22163 21.4392 2.55967C21.7772 2.89771 21.8902 3.34581 21.9397 3.63904C21.9952 3.96834 22.0047 4.32933 21.9961 4.66933C21.98 5.31243 21.8932 6.0322 21.8258 6.59123L21.8097 6.72504C21.7886 6.90163 21.7628 7.11699 21.7199 7.29027L21.7189 7.29443C21.6885 7.41761 21.5486 7.98409 20.9534 8.18987C20.3598 8.39511 19.9018 8.03927 19.8004 7.96051L19.7984 7.95897C19.6579 7.8499 19.5058 7.69752 19.3826 7.57417L18.6108 6.80235L16.4247 4.61626C16.3014 4.49309 16.149 4.34095 16.0399 4.20049L16.0384 4.19851C15.9596 4.09713 15.6038 3.63907 15.809 3.04548C16.0148 2.45032 16.5813 2.31041 16.7045 2.27998L16.7086 2.27896C16.8818 2.23605 17.0974 2.21029 17.2739 2.18919L17.4076 2.17312Z',
  d14: 'M8.29289 14.2943C8.68342 13.9038 9.31658 13.9038 9.70711 14.2943C10.0976 14.6849 10.0976 15.318 9.70711 15.7086L6.80233 18.6133L5.38811 17.1991L8.29289 14.2943Z',
  d15: 'M6.59241 21.8269C6.03339 21.8943 5.31354 21.9811 4.67045 21.9973C4.33045 22.0058 3.96946 21.9963 3.64016 21.9408C3.34693 21.8913 2.89883 21.7784 2.56079 21.4403C2.22276 21.1023 2.10978 20.6542 2.06034 20.361C2.00482 20.0317 1.99531 19.6707 2.00386 19.3307C2.02003 18.6876 2.10682 17.9678 2.17423 17.4088L2.19032 17.275C2.21143 17.0984 2.23716 16.883 2.28008 16.7097L2.2811 16.7056C2.31153 16.5824 2.45145 16.0159 3.0466 15.8101C3.64019 15.6049 4.09825 15.9607 4.19963 16.0395L4.20161 16.041C4.34207 16.1501 4.49422 16.3025 4.61739 16.4258L6.80342 18.6119L7.5753 19.3837C7.69865 19.5069 7.85102 19.6591 7.96009 19.7995L7.96163 19.8015C8.04039 19.9029 8.39623 20.3609 8.19099 20.9545C7.98521 21.5497 7.41873 21.6896 7.29555 21.72L7.29139 21.721C7.11815 21.7639 6.90264 21.7897 6.72607 21.8108L6.59241 21.8269Z',
  d16: 'M21 9V3H15',
  d17: 'M3 15V21H9',
  d18: 'M20.7388 3.26172L15 9.00039',
  d19: 'M9.00051 15L3.26172 20.7387',
  d20: 'M15.293 16.7072L7.29297 8.70718L8.70718 7.29297L16.7072 15.293L15.293 16.7072Z',
  d21: 'M22.0001 2H15.0001V4H18.586L14 8.58588L15.4142 10.0001L20.0001 5.4143V9H22.0001V2Z',
  d22: 'M5.4143 19.9999L10 15.4142L8.58579 14L4 18.5858L4 14.9999H2V21.9999H9V19.9999L5.4143 19.9999Z',
};

export const IconArrowExpandDiagonal01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-expand-diagonal-01-stroke-rounded IconArrowExpandDiagonal01StrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowExpandDiagonal01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-expand-diagonal-01-duotone-rounded IconArrowExpandDiagonal01DuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="0.5" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowExpandDiagonal01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-expand-diagonal-01-twotone-rounded IconArrowExpandDiagonal01TwotoneRounded"
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
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowExpandDiagonal01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-expand-diagonal-01-solid-rounded IconArrowExpandDiagonal01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowExpandDiagonal01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-expand-diagonal-01-bulk-rounded IconArrowExpandDiagonal01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowExpandDiagonal01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-expand-diagonal-01-stroke-sharp IconArrowExpandDiagonal01StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowExpandDiagonal01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-expand-diagonal-01-solid-sharp IconArrowExpandDiagonal01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfArrowExpandDiagonal01: TheIconSelfPack = {
  name: 'ArrowExpandDiagonal01',
  StrokeRounded: IconArrowExpandDiagonal01StrokeRounded,
  DuotoneRounded: IconArrowExpandDiagonal01DuotoneRounded,
  TwotoneRounded: IconArrowExpandDiagonal01TwotoneRounded,
  SolidRounded: IconArrowExpandDiagonal01SolidRounded,
  BulkRounded: IconArrowExpandDiagonal01BulkRounded,
  StrokeSharp: IconArrowExpandDiagonal01StrokeSharp,
  SolidSharp: IconArrowExpandDiagonal01SolidSharp,
};