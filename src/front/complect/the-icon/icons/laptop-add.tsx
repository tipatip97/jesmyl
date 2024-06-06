import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14 6H18M18 6L22 6M18 6L18 2M18 6V10',
  d2: 'M20 15V13M4 15V7C4 5.11438 4 4.17157 4.58579 3.58579C5.17157 3 6.11438 3 8 3H11',
  d3: 'M3.49762 16.0154L4.01953 15H19.9518L20.5023 16.0154C21.9452 18.677 22.3046 20.0077 21.7561 21.0039C21.2077 22 19.7536 22 16.8454 22L7.15462 22C4.24642 22 2.79231 22 2.24387 21.0039C1.69543 20.0077 2.05474 18.677 3.49762 16.0154Z',
  d4: 'M20 7V15H4V7C4 5.11438 4 4.17157 4.58579 3.58579C5.17157 3 6.11438 3 8 3H16C17.8856 3 18.8284 3 19.4142 3.58579C20 4.17157 20 5.11438 20 7Z',
  d5: 'M16.75 1.25C17.3023 1.25 17.75 1.69772 17.75 2.25L17.75 5.25L20.75 5.25C21.3023 5.25 21.75 5.69772 21.75 6.25C21.75 6.80228 21.3023 7.25 20.75 7.25L17.75 7.25V10.25C17.75 10.8023 17.3023 11.25 16.75 11.25C16.1977 11.25 15.75 10.8023 15.75 10.25V7.25H12.75C12.1977 7.25 11.75 6.80229 11.75 6.25C11.75 5.69772 12.1977 5.25 12.75 5.25H15.75L15.75 2.25C15.75 1.69772 16.1977 1.25 16.75 1.25Z',
  d6: 'M8.18417 2.25C7.29769 2.24995 6.53387 2.24991 5.92221 2.33215C5.2667 2.42028 4.63835 2.61902 4.12868 3.12868C3.61902 3.63835 3.42028 4.2667 3.33215 4.92221C3.24991 5.53387 3.24995 6.29769 3.25 7.18417L3.25 14.75L3.24991 14.7913C3.24862 14.8426 3.2425 14.8679 3.22019 14.9141L3.21015 14.9338L2.83421 15.6653C2.11021 17.0014 1.62267 18.0653 1.39719 18.9487C1.16515 19.8577 1.1925 20.6495 1.58675 21.3656C2.02749 22.1661 2.81497 22.4782 3.69825 22.6165C4.55189 22.7501 5.69027 22.75 7.08676 22.75H16.913C18.3095 22.75 19.4479 22.7501 20.3015 22.6165C21.1848 22.4782 21.9723 22.1661 22.413 21.3656C22.8073 20.6495 22.8346 19.8576 22.6025 18.9486C22.3766 18.0637 21.8877 16.9975 21.1615 15.658L20.8047 14.9999C20.7881 14.9692 20.7798 14.9538 20.7744 14.9413C20.7586 14.9045 20.7549 14.8899 20.7512 14.85C20.75 14.8364 20.75 14.8076 20.75 14.75V12.75C20.75 12.1977 20.3023 11.75 19.75 11.75C19.1977 11.75 18.75 12.1977 18.75 12.75V13.65C18.75 13.9328 18.75 14.0743 18.6621 14.1621C18.5743 14.25 18.4328 14.25 18.15 14.25H5.85C5.56716 14.25 5.42574 14.25 5.33787 14.1621C5.25 14.0743 5.25 13.9328 5.25 13.65V7.25C5.25 6.27893 5.25213 5.65122 5.31431 5.18871C5.37263 4.75497 5.46677 4.61902 5.5429 4.5429C5.61902 4.46677 5.75497 4.37263 6.18871 4.31431C6.65122 4.25213 7.27893 4.25 8.25 4.25H10.373C10.9253 4.25 11.373 3.80229 11.373 3.25C11.373 2.69772 10.9253 2.25 10.373 2.25L8.18417 2.25Z',
  d7: 'M20 15V12M4 15V3L12 3',
  d8: 'M2 22L4.01911 15H19.9514L21.9996 22H2Z',
  d9: 'M15.75 4.75L15.75 1.75H17.75L17.75 4.75L20.75 4.75V6.75L17.75 6.75V9.75H15.75V6.75H12.75V4.75H15.75Z',
  d10: 'M22.7124 21.0056L20.7954 14.3038V11.5833H18.8422V13.4643H5.16016V3.70239H11.0012L10.9998 1.75H3.20418V14.3038L1.2876 21.0057C1.20337 21.3002 1.26242 21.6172 1.4471 21.8617C1.63177 22.1062 1.92064 22.25 2.2273 22.25H21.7727C22.0794 22.25 22.3682 22.1062 22.5529 21.8617C22.7376 21.6171 22.7966 21.3002 22.7124 21.0056Z',
};

export const IconLaptopAddStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-add-stroke-rounded IconLaptopAddStrokeRounded"
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

export const IconLaptopAddDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-add-duotone-rounded IconLaptopAddDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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

export const IconLaptopAddTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-add-twotone-rounded IconLaptopAddTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconLaptopAddSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-add-solid-rounded IconLaptopAddSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLaptopAddBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-add-bulk-rounded IconLaptopAddBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLaptopAddStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-add-stroke-sharp IconLaptopAddStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLaptopAddSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-add-solid-sharp IconLaptopAddSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfLaptopAdd: TheIconSelfPack = {
  name: 'LaptopAdd',
  StrokeRounded: IconLaptopAddStrokeRounded,
  DuotoneRounded: IconLaptopAddDuotoneRounded,
  TwotoneRounded: IconLaptopAddTwotoneRounded,
  SolidRounded: IconLaptopAddSolidRounded,
  BulkRounded: IconLaptopAddBulkRounded,
  StrokeSharp: IconLaptopAddStrokeSharp,
  SolidSharp: IconLaptopAddSolidSharp,
};