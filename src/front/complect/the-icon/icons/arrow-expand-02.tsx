import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7.5 3.26621C6.6556 3.25421 3.8591 2.67328 3.2662 3.26621C2.6733 3.85913 3.2542 6.65559 3.2662 7.5M3.49401 3.49097L10.4978 10.4961M20.7338 16.5C20.7458 17.3444 21.3267 20.1409 20.7338 20.7338C20.1409 21.3267 17.3444 20.7458 16.5 20.7338M13.4981 13.4974L20.5019 20.5026',
  d2: 'M7.5 3.26624C6.6556 3.25424 3.8591 2.67324 3.2662 3.26624C2.6733 3.85924 3.2542 6.65624 3.2662 7.50024M3.494 3.49123L10.4978 10.4962',
  d3: 'M20.7337 16.5001C20.7457 17.3441 21.3266 20.1411 20.7337 20.7341C20.1407 21.3271 17.3443 20.7461 16.4999 20.7341M13.498 13.4971L20.5018 20.5031',
  d4: 'M9.96967 11.0303C10.2626 11.3232 10.7374 11.3232 11.0303 11.0303C11.3232 10.7374 11.3232 10.2626 11.0303 9.96967L9.96967 11.0303ZM4.03033 2.96967C3.73744 2.67678 3.26256 2.67678 2.96967 2.96967C2.67678 3.26256 2.67678 3.73744 2.96967 4.03033L4.03033 2.96967ZM11.0303 9.96967L4.03033 2.96967L2.96967 4.03033L9.96967 11.0303L11.0303 9.96967Z',
  d5: 'M19.9697 21.0303C20.2626 21.3232 20.7374 21.3232 21.0303 21.0303C21.3232 20.7374 21.3232 20.2626 21.0303 19.9697L19.9697 21.0303ZM14.0303 12.9697C13.7374 12.6768 13.2626 12.6768 12.9697 12.9697C12.6768 13.2626 12.6768 13.7374 12.9697 14.0303L14.0303 12.9697ZM21.0303 19.9697L14.0303 12.9697L12.9697 14.0303L19.9697 21.0303L21.0303 19.9697Z',
  d6: 'M7.5 3.26621C6.65559 3.25421 3.85913 2.67328 3.26621 3.26621C2.67328 3.85913 3.25421 6.65559 3.26621 7.5',
  d7: 'M20.7338 16.5C20.7458 17.3444 21.3267 20.1409 20.7338 20.7338C20.1409 21.3267 17.3444 20.7458 16.5 20.7338',
  d8: 'M6.59132 2.17312C6.0323 2.10571 5.31245 2.01892 4.66935 2.00274C4.32935 1.99419 3.96837 2.0037 3.63906 2.05922C3.34584 2.10866 2.89773 2.22163 2.5597 2.55967C2.22166 2.89771 2.10868 3.34581 2.05925 3.63904C2.00373 3.96834 1.99422 4.32933 2.00277 4.66933C2.01894 5.31243 2.10573 6.0322 2.17314 6.59123L2.18923 6.72504C2.21033 6.90163 2.23607 7.11699 2.27898 7.29027L2.28001 7.29443C2.31043 7.4176 2.45035 7.98409 3.0455 8.18987C3.6391 8.39511 4.09715 8.03927 4.19854 7.96051L4.20052 7.95897C4.34097 7.8499 4.49312 7.69752 4.61629 7.57417L5.38811 6.80235L9.79289 11.2072C10.1834 11.5978 10.8166 11.5978 11.2071 11.2072C11.5976 10.8167 11.5976 10.1836 11.2071 9.79303L6.80232 5.38814L7.5742 4.61626L7.5742 4.61626C7.69756 4.49309 7.84992 4.34095 7.95899 4.20049L7.96053 4.19851C8.03929 4.09713 8.39513 3.63907 8.1899 3.04548C7.98412 2.45032 7.41763 2.31041 7.29445 2.27998L7.2903 2.27896C7.11706 2.23605 6.90154 2.21029 6.72498 2.18919L6.59132 2.17312Z',
  d9: 'M17.4087 21.8269C17.9677 21.8943 18.6875 21.9811 19.3306 21.9973C19.6706 22.0058 20.0316 21.9963 20.3609 21.9408C20.6542 21.8913 21.1023 21.7784 21.4403 21.4403C21.7783 21.1023 21.8913 20.6542 21.9408 20.361C21.9963 20.0317 22.0058 19.6707 21.9972 19.3307C21.9811 18.6876 21.8943 17.9678 21.8269 17.4088L21.8108 17.275C21.7897 17.0984 21.7639 16.883 21.721 16.7097L21.72 16.7056C21.6896 16.5824 21.5497 16.0159 20.9545 15.8101C20.3609 15.6049 19.9028 15.9607 19.8015 16.0395L19.7995 16.041C19.659 16.1501 19.5069 16.3025 19.3837 16.4258L18.6119 17.1976L14.2071 12.7928C13.8166 12.4022 13.1834 12.4022 12.7929 12.7928C12.4024 13.1833 12.4024 13.8164 12.7929 14.207L17.1977 18.6119L16.4258 19.3837L16.4258 19.3837C16.3024 19.5069 16.1501 19.6591 16.041 19.7995L16.0395 19.8015C15.9607 19.9029 15.6049 20.3609 15.8101 20.9545C16.0159 21.5497 16.5824 21.6896 16.7055 21.72L16.7097 21.721C16.8829 21.7639 17.0985 21.7897 17.275 21.8108L17.4087 21.8269Z',
  d10: 'M9.79289 11.2058C10.1834 11.5964 10.8166 11.5964 11.2071 11.2058C11.5976 10.8153 11.5976 10.1821 11.2071 9.79161L6.80232 5.38672L5.38811 6.80093L9.79289 11.2058Z',
  d11: 'M6.59241 2.17312C6.03339 2.10571 5.31354 2.01892 4.67045 2.00274C4.33045 1.99419 3.96946 2.0037 3.64016 2.05922C3.34693 2.10866 2.89883 2.22163 2.56079 2.55967C2.22275 2.89771 2.10978 3.34581 2.06034 3.63904C2.00482 3.96834 1.99531 4.32933 2.00386 4.66933C2.02003 5.31243 2.10682 6.0322 2.17423 6.59123L2.19032 6.72504C2.21143 6.90163 2.23716 7.11699 2.28008 7.29027L2.2811 7.29443L2.2811 7.29443C2.31153 7.41762 2.45145 7.98409 3.0466 8.18987C3.64019 8.39511 4.09825 8.03927 4.19963 7.96051L4.20161 7.95897C4.34207 7.8499 4.49421 7.69752 4.61739 7.57417L6.80342 5.38814L7.5753 4.61626L7.5753 4.61626C7.69865 4.49309 7.85101 4.34095 7.96009 4.20049L7.96163 4.19851C8.04039 4.09713 8.39623 3.63907 8.19099 3.04548C7.98521 2.45032 7.41873 2.31041 7.29555 2.27998L7.29555 2.27998L7.29139 2.27896C7.11815 2.23605 6.90264 2.21029 6.72608 2.18919L6.72607 2.18919L6.59241 2.17312Z',
  d12: 'M14.2071 12.7942C13.8166 12.4036 13.1834 12.4036 12.7929 12.7942C12.4024 13.1847 12.4024 13.8179 12.7929 14.2084L17.1977 18.6133L18.6119 17.1991L14.2071 12.7942Z',
  d13: 'M17.4076 21.8269C17.9666 21.8943 18.6865 21.9811 19.3296 21.9973C19.6696 22.0058 20.0305 21.9963 20.3598 21.9408C20.6531 21.8913 21.1012 21.7784 21.4392 21.4403C21.7772 21.1023 21.8902 20.6542 21.9397 20.361C21.9952 20.0317 22.0047 19.6707 21.9961 19.3307C21.98 18.6876 21.8932 17.9678 21.8258 17.4088L21.8097 17.275C21.7886 17.0984 21.7628 16.883 21.7199 16.7097L21.7189 16.7056L21.7189 16.7056C21.6885 16.5824 21.5486 16.0159 20.9534 15.8101C20.3598 15.6049 19.9018 15.9607 19.8004 16.0395L19.7984 16.041C19.6579 16.1501 19.5058 16.3025 19.3826 16.4258L18.6108 17.1976L16.4247 19.3837L16.4247 19.3837C16.3014 19.5069 16.149 19.6591 16.0399 19.7995L16.0384 19.8015C15.9596 19.9029 15.6038 20.3609 15.809 20.9545C16.0148 21.5497 16.5813 21.6896 16.7045 21.72L16.7045 21.72L16.7086 21.721C16.8818 21.7639 17.0974 21.7897 17.2739 21.8108L17.2739 21.8108L17.4076 21.8269Z',
  d14: 'M3 9V3H9',
  d15: 'M21 15V21H15',
  d16: 'M20.277 20.2773L13.5059 13.5088',
  d17: 'M10.4937 10.5054L3.41309 3.4248',
  d18: 'M22.0006 22.0002H15.0006V20.0002H18.5865L12.5 13.9142L13.9142 12.5L20.0006 18.5858V15.0002H22.0006V22.0002Z',
  d19: 'M5.41436 4L11.5 10.0856L10.0858 11.4998L4 5.41406L4 10H2V2H10V4L5.41436 4Z',
};

export const IconArrowExpand02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-expand-02-stroke-rounded IconArrowExpand02StrokeRounded"
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

export const IconArrowExpand02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-expand-02-duotone-rounded IconArrowExpand02DuotoneRounded"
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

export const IconArrowExpand02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-expand-02-twotone-rounded IconArrowExpand02TwotoneRounded"
    >
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

export const IconArrowExpand02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-expand-02-solid-rounded IconArrowExpand02SolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowExpand02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-expand-02-bulk-rounded IconArrowExpand02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
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
    </TheIconWrapper>
  );
};

export const IconArrowExpand02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-expand-02-stroke-sharp IconArrowExpand02StrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowExpand02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-expand-02-solid-sharp IconArrowExpand02SolidSharp"
    >
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfArrowExpand02: TheIconSelfPack = {
  name: 'ArrowExpand02',
  StrokeRounded: IconArrowExpand02StrokeRounded,
  DuotoneRounded: IconArrowExpand02DuotoneRounded,
  TwotoneRounded: IconArrowExpand02TwotoneRounded,
  SolidRounded: IconArrowExpand02SolidRounded,
  BulkRounded: IconArrowExpand02BulkRounded,
  StrokeSharp: IconArrowExpand02StrokeSharp,
  SolidSharp: IconArrowExpand02SolidSharp,
};