import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20 15V10M4 15V7C4 5.11438 4 4.17157 4.58579 3.58579C5.17157 3 6.11438 3 8 3H11.5',
  d2: 'M14 6C14 6 15 6 16 8C16 8 19.1765 3 22 2',
  d3: 'M3.49762 16.0154L4.01953 15H19.9518L20.5023 16.0154C21.9452 18.677 22.3046 20.0077 21.7561 21.0039C21.2077 22 19.7536 22 16.8454 22L7.15462 22C4.24642 22 2.79231 22 2.24387 21.0039C1.69543 20.0077 2.05474 18.677 3.49762 16.0154Z',
  d4: 'M20 7V15H4V7C4 5.11438 4 4.17157 4.58579 3.58579C5.17157 3 6.11438 3 8 3H16C17.8856 3 18.8284 3 19.4142 3.58579C20 4.17157 20 5.11438 20 7Z',
  d5: 'M21.6926 1.91643C21.877 2.43702 21.6044 3.00852 21.0838 3.1929C20.5502 3.3819 19.9337 3.78876 19.2807 4.36148C18.638 4.92513 18.0128 5.60205 17.4591 6.26586C16.9072 6.92736 16.4385 7.56109 16.1074 8.03008C15.9422 8.26407 15.8122 8.45579 15.7243 8.58786L15.5941 8.78651C15.4008 9.09059 15.0587 9.26739 14.6989 9.24896C14.3389 9.23053 14.0168 9.01985 13.8556 8.69749C13.4149 7.81612 13.0196 7.46517 12.8203 7.33232C12.736 7.27611 12.679 7.25359 12.6564 7.24595C12.148 7.19874 11.75 6.77099 11.75 6.25027C11.75 5.69799 12.1977 5.25027 12.75 5.25027C12.8324 5.25107 13.0371 5.26614 13.1966 5.32C13.4045 5.37939 13.6553 5.48529 13.9297 5.66822C14.204 5.85107 14.4916 6.10384 14.7804 6.4497C15.0956 6.01895 15.484 5.51128 15.9233 4.98468C16.5166 4.27349 17.215 3.51292 17.962 2.85781C18.6986 2.21179 19.538 1.61865 20.4162 1.30765C20.9368 1.12327 21.5082 1.39583 21.6926 1.91643Z',
  d6: 'M8.18417 2.25C7.29769 2.24995 6.53387 2.24991 5.92221 2.33215C5.2667 2.42028 4.63835 2.61902 4.12868 3.12868C3.61902 3.63835 3.42028 4.2667 3.33215 4.92221C3.24991 5.53387 3.24995 6.29769 3.25 7.18417L3.25 14.75L3.24991 14.7913C3.24862 14.8426 3.2425 14.8679 3.22019 14.9141L3.21015 14.9338L2.83421 15.6653C2.11021 17.0014 1.62267 18.0653 1.39719 18.9487C1.16515 19.8577 1.1925 20.6495 1.58675 21.3656C2.02749 22.1661 2.81497 22.4782 3.69825 22.6165C4.55189 22.7501 5.69027 22.75 7.08676 22.75H16.913C18.3095 22.75 19.4479 22.7501 20.3015 22.6165C21.1848 22.4782 21.9723 22.1661 22.413 21.3656C22.8073 20.6495 22.8346 19.8576 22.6025 18.9486C22.3766 18.0637 21.8877 16.9975 21.1615 15.658L20.8047 14.9999C20.7881 14.9692 20.7798 14.9538 20.7744 14.9413C20.7586 14.9045 20.7549 14.8899 20.7512 14.85C20.75 14.8364 20.75 14.8076 20.75 14.75V9.75C20.75 9.19772 20.3023 8.75 19.75 8.75C19.1977 8.75 18.75 9.19772 18.75 9.75V13.65C18.75 13.9328 18.75 14.0743 18.6621 14.1621C18.5743 14.25 18.4328 14.25 18.15 14.25H5.85C5.56716 14.25 5.42574 14.25 5.33787 14.1621C5.25 14.0743 5.25 13.9328 5.25 13.65V7.25C5.25 6.27893 5.25213 5.65122 5.31431 5.18871C5.37263 4.75497 5.46677 4.61902 5.5429 4.5429C5.61902 4.46677 5.75497 4.37263 6.18871 4.31431C6.65122 4.25213 7.27893 4.25 8.25 4.25H10.373C10.9253 4.25 11.373 3.80229 11.373 3.25C11.373 2.69772 10.9253 2.25 10.373 2.25L8.18417 2.25Z',
  d7: 'M20 15V10M4 15V3L12 3',
  d8: 'M2 22L4.01911 15H19.9514L21.9996 22H2Z',
  d9: 'M13.5 5.5L16 8L22 2',
  d10: 'M22.7124 21.5056L20.7954 14.8038V10.0833H18.8422V13.9643H5.16016V4.20239H11.0012L10.9998 2.25H3.20418V14.8038L1.2876 21.5057C1.20337 21.8002 1.26242 22.1172 1.4471 22.3617C1.63177 22.6062 1.92064 22.75 2.2273 22.75H21.7727C22.0794 22.75 22.3682 22.6062 22.5529 22.3617C22.7376 22.1171 22.7966 21.8002 22.7124 21.5056Z',
  d11: 'M22.7502 2.66421L16.043 9.37132L12.8359 6.16421L14.2502 4.75L16.043 6.54289L21.3359 1.25L22.7502 2.66421Z',
};

export const IconLaptopCheckStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-check-stroke-rounded IconLaptopCheckStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconLaptopCheckDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-check-duotone-rounded IconLaptopCheckDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconLaptopCheckTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-check-twotone-rounded IconLaptopCheckTwotoneRounded"
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

export const IconLaptopCheckSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-check-solid-rounded IconLaptopCheckSolidRounded"
    >
      <path 
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

export const IconLaptopCheckBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-check-bulk-rounded IconLaptopCheckBulkRounded"
    >
      <path 
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

export const IconLaptopCheckStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-check-stroke-sharp IconLaptopCheckStrokeSharp"
    >
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
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLaptopCheckSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-check-solid-sharp IconLaptopCheckSolidSharp"
    >
      <path 
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

export const iconPackOfLaptopCheck: TheIconSelfPack = {
  name: 'LaptopCheck',
  StrokeRounded: IconLaptopCheckStrokeRounded,
  DuotoneRounded: IconLaptopCheckDuotoneRounded,
  TwotoneRounded: IconLaptopCheckTwotoneRounded,
  SolidRounded: IconLaptopCheckSolidRounded,
  BulkRounded: IconLaptopCheckBulkRounded,
  StrokeSharp: IconLaptopCheckStrokeSharp,
  SolidSharp: IconLaptopCheckSolidSharp,
};