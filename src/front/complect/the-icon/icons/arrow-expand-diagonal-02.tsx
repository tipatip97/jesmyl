import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16 8L7.99999 16M6.99999 3.23663C6.24939 3.22596 3.7637 2.70959 3.2366 3.23663C2.7096 3.76367 3.226 6.24941 3.2366 7M20.7634 17C20.774 17.7506 21.2904 20.2363 20.7634 20.7634C20.2363 21.2904 17.7506 20.774 17 20.7634M9.00256 9.00714L3.61682 3.62135M20.374 20.374L14.9883 14.9882',
  d2: 'M16 8L8 16',
  d3: 'M7 3.23717C6.2494 3.22617 3.7637 2.71017 3.2366 3.23717C2.7096 3.76417 3.226 6.24917 3.2366 7.00017M20.7633 17.0002C20.774 17.7512 21.2904 20.2362 20.7633 20.7632C20.2363 21.2902 17.7506 20.7742 17 20.7632M9.00256 9.00716L3.61682 3.62118M20.374 20.3742L14.9882 14.9882',
  d4: 'M9.53033 8.46967C9.82322 8.76256 9.82322 9.23744 9.53033 9.53033C9.23744 9.82322 8.76256 9.82322 8.46967 9.53033L9.53033 8.46967ZM2.96967 4.03033C2.67678 3.73744 2.67678 3.26256 2.96967 2.96967C3.26256 2.67678 3.73744 2.67678 4.03033 2.96967L2.96967 4.03033ZM8.46967 9.53033L2.96967 4.03033L4.03033 2.96967L9.53033 8.46967L8.46967 9.53033Z',
  d5: 'M21.0303 19.9697C21.3232 20.2626 21.3232 20.7374 21.0303 21.0303C20.7374 21.3232 20.2626 21.3232 19.9697 21.0303L21.0303 19.9697ZM14.4697 15.5303C14.1768 15.2374 14.1768 14.7626 14.4697 14.4697C14.7626 14.1768 15.2374 14.1768 15.5303 14.4697L14.4697 15.5303ZM19.9697 21.0303L14.4697 15.5303L15.5303 14.4697L21.0303 19.9697L19.9697 21.0303Z',
  d6: 'M7 3.23663C6.24941 3.22596 3.76367 2.70959 3.23663 3.23663C2.70959 3.76367 3.22596 6.24941 3.23663 7',
  d7: 'M20.7634 17C20.774 17.7506 21.2904 20.2363 20.7634 20.7634C20.2363 21.2904 17.7506 20.774 17 20.7634',
  d8: 'M16.7071 7.29289C16.3166 6.90237 15.6834 6.90237 15.2929 7.29289L7.29289 15.2929C6.90237 15.6834 6.90237 16.3166 7.29289 16.7071C7.68342 17.0976 8.31658 17.0976 8.70711 16.7071L16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289Z',
  d9: 'M8.29289 9.70708C8.68342 10.0976 9.31658 10.0976 9.70711 9.70708C10.0976 9.31656 10.0976 8.68339 9.70711 8.29287L6.80233 5.38814L7.57421 4.61626C7.69756 4.49309 7.84992 4.34095 7.959 4.20049L7.96054 4.19851C8.0393 4.09713 8.39514 3.63907 8.1899 3.04548C7.98412 2.45032 7.41764 2.31041 7.29446 2.27998L7.2903 2.27896C7.11706 2.23605 6.90155 2.21029 6.72498 2.18919L6.59132 2.17312C6.0323 2.10571 5.31245 2.01892 4.66936 2.00274C4.32936 1.99419 3.96837 2.0037 3.63907 2.05922C3.34584 2.10866 2.89774 2.22163 2.5597 2.55967C2.22166 2.89771 2.10869 3.34581 2.05925 3.63904C2.00373 3.96834 1.99422 4.32933 2.00277 4.66933C2.01894 5.31243 2.10573 6.0322 2.17314 6.59123L2.18923 6.72504C2.21034 6.90163 2.23607 7.11699 2.27899 7.29027L2.28001 7.29443C2.31044 7.41761 2.45036 7.98409 3.04551 8.18987C3.6391 8.39511 4.09716 8.03927 4.19854 7.96051L4.20052 7.95897C4.34098 7.8499 4.49312 7.69752 4.6163 7.57417L5.38811 6.80235L8.29289 9.70708Z',
  d10: 'M15.7071 14.2929C15.3166 13.9024 14.6834 13.9024 14.2929 14.2929C13.9024 14.6834 13.9024 15.3166 14.2929 15.7071L17.1977 18.6119L16.4258 19.3837C16.3024 19.5069 16.1501 19.6591 16.041 19.7995L16.0395 19.8015C15.9607 19.9029 15.6049 20.3609 15.8101 20.9545C16.0159 21.5497 16.5824 21.6896 16.7055 21.72L16.7097 21.721C16.8829 21.7639 17.0985 21.7897 17.275 21.8108L17.4087 21.8269C17.9677 21.8943 18.6875 21.9811 19.3306 21.9973C19.6706 22.0058 20.0316 21.9963 20.3609 21.9408C20.6542 21.8913 21.1023 21.7784 21.4403 21.4403C21.7783 21.1023 21.8913 20.6542 21.9407 20.361C21.9963 20.0317 22.0058 19.6707 21.9972 19.3307C21.9811 18.6876 21.8943 17.9678 21.8269 17.4088L21.8108 17.275C21.7897 17.0984 21.7639 16.883 21.721 16.7097L21.72 16.7056C21.6896 16.5824 21.5496 16.0159 20.9545 15.8101C20.3609 15.6049 19.9028 15.9607 19.8015 16.0395L19.7995 16.041C19.659 16.1501 19.5069 16.3025 19.3837 16.4258L18.6119 17.1976L15.7071 14.2929Z',
  d11: 'M8.29289 9.70566C8.68342 10.0962 9.31658 10.0962 9.70711 9.70566C10.0976 9.31514 10.0976 8.68197 9.70711 8.29145L6.80233 5.38672L5.38811 6.80093L8.29289 9.70566Z',
  d12: 'M6.59241 2.17312C6.03339 2.10571 5.31354 2.01892 4.67045 2.00274C4.33045 1.99419 3.96946 2.0037 3.64016 2.05922C3.34693 2.10866 2.89883 2.22163 2.56079 2.55967C2.22275 2.89771 2.10978 3.34581 2.06034 3.63904C2.00482 3.96834 1.99531 4.32933 2.00386 4.66933C2.02003 5.31243 2.10682 6.0322 2.17423 6.59123L2.19032 6.72504C2.21143 6.90163 2.23716 7.11699 2.28008 7.29027L2.2811 7.29443C2.31153 7.41761 2.45145 7.98409 3.0466 8.18987C3.64019 8.39511 4.09825 8.03927 4.19963 7.96051L4.20161 7.95897C4.34207 7.8499 4.49421 7.69752 4.61739 7.57417L6.80342 5.38814L7.5753 4.61626C7.69865 4.49309 7.85101 4.34095 7.96009 4.20049L7.96163 4.19851C8.04039 4.09713 8.39623 3.63907 8.19099 3.04548C7.98521 2.45032 7.41873 2.31041 7.29555 2.27998L7.29139 2.27896C7.11815 2.23605 6.90264 2.21029 6.72607 2.18919L6.59241 2.17312Z',
  d13: 'M15.7071 14.2943C15.3166 13.9038 14.6834 13.9038 14.2929 14.2943C13.9024 14.6849 13.9024 15.318 14.2929 15.7086L17.1977 18.6133L18.6119 17.1991L15.7071 14.2943Z',
  d14: 'M17.4076 21.8269C17.9666 21.8943 18.6865 21.9811 19.3296 21.9973C19.6696 22.0058 20.0305 21.9963 20.3598 21.9408C20.6531 21.8913 21.1012 21.7784 21.4392 21.4403C21.7772 21.1023 21.8902 20.6542 21.9397 20.361C21.9952 20.0317 22.0047 19.6707 21.9961 19.3307C21.98 18.6876 21.8932 17.9678 21.8258 17.4088L21.8097 17.275C21.7886 17.0984 21.7628 16.883 21.7199 16.7097L21.7189 16.7056C21.6885 16.5824 21.5486 16.0159 20.9534 15.8101C20.3598 15.6049 19.9018 15.9607 19.8004 16.0395L19.7984 16.041C19.6579 16.1501 19.5058 16.3025 19.3826 16.4258L18.6108 17.1976L16.4247 19.3837C16.3014 19.5069 16.149 19.6591 16.0399 19.7995L16.0384 19.8015C15.9596 19.9029 15.6038 20.3609 15.809 20.9545C16.0148 21.5497 16.5813 21.6896 16.7045 21.72L16.7086 21.721C16.8818 21.7639 17.0974 21.7897 17.2739 21.8108L17.4076 21.8269Z',
  d15: 'M8 16L16 8',
  d16: 'M9 3H3V9',
  d17: 'M15 21H21V15',
  d18: 'M20.727 20.7276L14.9883 14.9888',
  d19: 'M9.00039 9.00002L3.26172 3.26123',
  d20: 'M15.292 7.29297L7.29199 15.293L8.70621 16.7072L16.7062 8.70718L15.292 7.29297Z',
  d21: 'M21.9991 22.0001H14.9991V20.0001H18.585L13.999 15.4142L15.4132 14L19.9991 18.5858V15.0001H21.9991V22.0001Z',
  d22: 'M5.41333 4L9.99902 8.5857L8.58481 9.99991L3.99902 5.41412L3.99902 9H1.99902V2H8.99902V4L5.41333 4Z',
} as const;

export const IconArrowExpandDiagonal02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-expand-diagonal-02-stroke-rounded IconArrowExpandDiagonal02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowExpandDiagonal02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-expand-diagonal-02-duotone-rounded IconArrowExpandDiagonal02DuotoneRounded"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="0.5" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowExpandDiagonal02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-expand-diagonal-02-twotone-rounded IconArrowExpandDiagonal02TwotoneRounded"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowExpandDiagonal02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-expand-diagonal-02-solid-rounded IconArrowExpandDiagonal02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowExpandDiagonal02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-expand-diagonal-02-bulk-rounded IconArrowExpandDiagonal02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowExpandDiagonal02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-expand-diagonal-02-stroke-sharp IconArrowExpandDiagonal02StrokeSharp"
    >
      <path 
        d={d.d15} 
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

export const IconArrowExpandDiagonal02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-expand-diagonal-02-solid-sharp IconArrowExpandDiagonal02SolidSharp"
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

export const iconPackOfArrowExpandDiagonal02: TheIconSelfPack = {
  name: 'ArrowExpandDiagonal02',
  StrokeRounded: IconArrowExpandDiagonal02StrokeRounded,
  DuotoneRounded: IconArrowExpandDiagonal02DuotoneRounded,
  TwotoneRounded: IconArrowExpandDiagonal02TwotoneRounded,
  SolidRounded: IconArrowExpandDiagonal02SolidRounded,
  BulkRounded: IconArrowExpandDiagonal02BulkRounded,
  StrokeSharp: IconArrowExpandDiagonal02StrokeSharp,
  SolidSharp: IconArrowExpandDiagonal02SolidSharp,
};