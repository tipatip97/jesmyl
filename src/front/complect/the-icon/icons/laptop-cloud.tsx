import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20 15V12M4 15V7C4 5.11438 4 4.17157 4.58579 3.58579C5.17157 3 6.11438 3 8 3H11.5',
  d2: 'M3.49762 16.0154L4.01953 15H19.9518L20.5023 16.0154C21.9452 18.677 22.3046 20.0077 21.7561 21.0039C21.2077 22 19.7536 22 16.8454 22L7.15462 22C4.24642 22 2.79231 22 2.24387 21.0039C1.69543 20.0077 2.05474 18.677 3.49762 16.0154Z',
  d3: 'M13 6.66667C13 7.95533 14.0074 9 15.25 9H19.975C21.0934 9 22 8.0598 22 6.9C22 5.7402 21.0934 4.8 19.975 4.8C19.955 4.8 19.975 2 17.5 2C16.2055 2 15.143 3.03069 15.0342 4.34393C13.8928 4.45657 13 5.45349 13 6.66667Z',
  d4: 'M15.25 9C14.0074 9 13 7.95533 13 6.66667C13 5.45349 13.8928 4.45657 15.0342 4.34393C15.0759 3.84034 15.2579 3.3783 15.5394 3H8C6.11438 3 5.17157 3 4.58579 3.58579C4 4.17157 4 5.11438 4 7V15H20V8.99984C19.9917 8.99995 19.9833 9 19.975 9H15.25Z',
  d5: 'M8.18417 2.25C7.29769 2.24995 6.53387 2.24991 5.92221 2.33215C5.2667 2.42028 4.63835 2.61902 4.12868 3.12868C3.61902 3.63835 3.42028 4.2667 3.33215 4.92221C3.24991 5.53387 3.24995 6.29769 3.25 7.18417L3.25 14.75L3.24991 14.7913C3.24862 14.8426 3.2425 14.8679 3.22019 14.9141L3.21015 14.9338L2.83421 15.6653C2.11021 17.0014 1.62267 18.0653 1.39719 18.9487C1.16515 19.8577 1.1925 20.6495 1.58675 21.3656C2.02749 22.1661 2.81497 22.4782 3.69825 22.6165C4.55189 22.7501 5.69027 22.75 7.08676 22.75H16.913C18.3095 22.75 19.4479 22.7501 20.3015 22.6165C21.1848 22.4782 21.9723 22.1661 22.413 21.3656C22.8073 20.6495 22.8346 19.8576 22.6025 18.9486C22.3766 18.0637 21.8877 16.9975 21.1615 15.658L20.8047 14.9999C20.7881 14.9692 20.7798 14.9538 20.7744 14.9413C20.7586 14.9045 20.7549 14.8899 20.7512 14.85C20.75 14.8364 20.75 14.8076 20.75 14.75V11.75C20.75 11.1977 20.3023 10.75 19.75 10.75C19.1977 10.75 18.75 11.1977 18.75 11.75V13.65C18.75 13.9328 18.75 14.0743 18.6621 14.1621C18.5743 14.25 18.4328 14.25 18.15 14.25H5.85C5.56716 14.25 5.42574 14.25 5.33787 14.1621C5.25 14.0743 5.25 13.9328 5.25 13.65V7.25C5.25 6.27893 5.25213 5.65122 5.31431 5.18871C5.37263 4.75497 5.46677 4.61902 5.5429 4.5429C5.61902 4.46677 5.75497 4.37263 6.18871 4.31431C6.65122 4.25213 7.27893 4.25 8.25 4.25H10.8529C11.4052 4.25 11.8529 3.80229 11.8529 3.25C11.8529 2.69772 11.4052 2.25 10.8529 2.25L8.18417 2.25Z',
  d6: 'M14.383 3.71381C14.7464 2.30994 15.9878 1.25 17.5 1.25C18.2706 1.25 18.8951 1.4716 19.381 1.83969C19.8572 2.20049 20.1562 2.66823 20.345 3.09887C20.5105 3.47627 20.6003 3.84538 20.6506 4.13444C21.871 4.44643 22.75 5.58432 22.75 6.9C22.75 8.44807 21.5331 9.75 19.975 9.75H15.25C13.5677 9.75 12.25 8.3436 12.25 6.66667C12.25 5.29042 13.1351 4.09916 14.383 3.71381Z',
  d7: 'M20 15V11.5M4 15V3L11 3',
  d8: 'M2 22L4.01911 15H19.9514L21.9996 22H2Z',
  d9: 'M13 6.66667C13 7.95533 14.0074 9 15.25 9H19.975C21.0934 9 22 8.0598 22 6.9C22 5.7402 21.0934 4.8 19.975 4.8C19.975 4.8 19.975 2 17.5 2C16.2055 2 15.143 3.03069 15.0342 4.34393C13.8928 4.45657 13 5.45349 13 6.66667Z',
  d10: 'M22.7124 21.5056L20.7954 14.8038V12.0833H18.8422V13.9643H5.16016V4.20239H11.0012L10.9998 2.25H3.20418V14.8038L1.2876 21.5057C1.20337 21.8002 1.26242 22.1172 1.4471 22.3617C1.63177 22.6062 1.92064 22.75 2.2273 22.75H21.7727C22.0794 22.75 22.3682 22.6062 22.5529 22.3617C22.7376 22.1171 22.7966 21.8002 22.7124 21.5056Z',
  d11: 'M14.383 3.71381C14.7464 2.30994 15.9878 1.25 17.5 1.25C18.2705 1.25 18.8956 1.47154 19.3825 1.83871C19.8598 2.19874 20.1611 2.66576 20.3516 3.09682C20.5187 3.47493 20.6096 3.8452 20.6597 4.13679C21.8754 4.45209 22.75 5.58759 22.75 6.9C22.75 8.44807 21.5331 9.75 19.975 9.75H15.25C13.5677 9.75 12.25 8.3436 12.25 6.66667C12.25 5.29042 13.1351 4.09916 14.383 3.71381Z',
} as const;

export const IconLaptopCloudStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-cloud-stroke-rounded IconLaptopCloudStrokeRounded"
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

export const IconLaptopCloudDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-cloud-duotone-rounded IconLaptopCloudDuotoneRounded"
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

export const IconLaptopCloudTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-cloud-twotone-rounded IconLaptopCloudTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLaptopCloudSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-cloud-solid-rounded IconLaptopCloudSolidRounded"
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

export const IconLaptopCloudBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-cloud-bulk-rounded IconLaptopCloudBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconLaptopCloudStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-cloud-stroke-sharp IconLaptopCloudStrokeSharp"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLaptopCloudSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-cloud-solid-sharp IconLaptopCloudSolidSharp"
    >
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

export const iconPackOfLaptopCloud: TheIconSelfPack = {
  name: 'LaptopCloud',
  StrokeRounded: IconLaptopCloudStrokeRounded,
  DuotoneRounded: IconLaptopCloudDuotoneRounded,
  TwotoneRounded: IconLaptopCloudTwotoneRounded,
  SolidRounded: IconLaptopCloudSolidRounded,
  BulkRounded: IconLaptopCloudBulkRounded,
  StrokeSharp: IconLaptopCloudStrokeSharp,
  SolidSharp: IconLaptopCloudSolidSharp,
};