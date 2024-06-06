import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4 6L4 18',
  d2: 'M8 12.0005L20 12.0005',
  d3: 'M12 8C12 8 8.00001 10.946 8 12C7.99999 13.0541 12 16 12 16',
  d4: 'M8 11.9999H20M8 11.9999C8.00001 10.9459 12 8 12 8M8 11.9999C7.99999 13.054 12 16 12 16',
  d5: 'M8 12L20 12',
  d6: 'M12 16C12 16 8.00001 13.054 8 12C7.99999 10.9459 12 8 12 8',
  d7: 'M4 19C4.55228 19 5 18.5523 5 18L5 6C5 5.44771 4.55228 5 4 5C3.44771 5 3 5.44772 3 6L3 18C3 18.5523 3.44772 19 4 19Z',
  d8: 'M12.593 8.80529C13.0376 8.47783 13.1327 7.8519 12.8053 7.40718C12.4778 6.96243 11.8519 6.86734 11.4071 7.19478L11.4031 7.19772L11.3934 7.20489L11.3576 7.23149C11.3267 7.25451 11.282 7.28795 11.2255 7.33061C11.1126 7.4159 10.9521 7.53829 10.7599 7.68825C10.3765 7.98735 9.86196 8.39996 9.34448 8.84912C8.83198 9.29398 8.2937 9.79436 7.87568 10.2674C7.66768 10.5027 7.46829 10.7549 7.31549 11.0083C7.17922 11.2343 7 11.5888 7 11.9991C7 12.4094 7.1792 12.7639 7.31543 12.9899C7.46821 13.2434 7.66756 13.4956 7.87554 13.731C8.29353 14.2042 8.83178 14.7048 9.34427 15.1499C9.86172 15.5993 10.3763 16.0121 10.7596 16.3114C10.9518 16.4615 11.1123 16.5839 11.2253 16.6693C11.2818 16.7119 11.3264 16.7454 11.3573 16.7684L11.3931 16.795L11.4028 16.8022L11.4064 16.8048C11.851 17.1324 12.4775 17.0378 12.8051 16.5932C13.1326 16.1486 13.0378 15.5226 12.5932 15.195L12.5913 15.1936L12.5838 15.1881L12.5527 15.165C12.525 15.1443 12.4838 15.1135 12.4309 15.0735C12.3251 14.9936 12.1731 14.8776 11.9903 14.7349C11.6237 14.4487 11.1382 14.0589 10.6557 13.6399C10.4094 13.426 10.1698 13.2095 9.95005 12.9991L20 12.9991C20.5523 12.9991 21 12.5514 21 11.9991C21 11.4468 20.5523 10.9991 20 10.9991L9.95067 10.9991C10.1702 10.7891 10.4095 10.573 10.6555 10.3595C11.138 9.94067 11.6235 9.55115 11.9901 9.26513C12.1729 9.12253 12.3249 9.0066 12.4307 8.92672C12.4836 8.8868 12.5248 8.85594 12.5525 8.83531L12.5836 8.8122L12.5911 8.80669L12.593 8.80529Z',
  d9: 'M20 12L8.37474 12M12 8L8 12L12 16',
  d10: 'M3 18L3 6H5L5 18H3Z',
  d11: 'M11.293 7.29297L12.7072 8.70717L10.4144 11.0001H20.0001V13.0001H10.4143L12.7073 15.293L11.293 16.7072L6.58594 12.0001L11.293 7.29297Z',
};

export const IconArrowLeft03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-left-03-stroke-rounded IconArrowLeft03StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconArrowLeft03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-left-03-duotone-rounded IconArrowLeft03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowLeft03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-left-03-twotone-rounded IconArrowLeft03TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowLeft03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-left-03-solid-rounded IconArrowLeft03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowLeft03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-left-03-bulk-rounded IconArrowLeft03BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowLeft03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-left-03-stroke-sharp IconArrowLeft03StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowLeft03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-left-03-solid-sharp IconArrowLeft03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfArrowLeft03: TheIconSelfPack = {
  name: 'ArrowLeft03',
  StrokeRounded: IconArrowLeft03StrokeRounded,
  DuotoneRounded: IconArrowLeft03DuotoneRounded,
  TwotoneRounded: IconArrowLeft03TwotoneRounded,
  SolidRounded: IconArrowLeft03SolidRounded,
  BulkRounded: IconArrowLeft03BulkRounded,
  StrokeSharp: IconArrowLeft03StrokeSharp,
  SolidSharp: IconArrowLeft03SolidSharp,
};