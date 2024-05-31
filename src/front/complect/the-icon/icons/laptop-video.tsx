import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4 15V7C4 5.11438 4 4.17157 4.58579 3.58579C5.17157 3 6.11438 3 8 3H9M20 15V11.5',
  d2: 'M3.49762 16.0154L4.01953 15H19.9518L20.5023 16.0154C21.9452 18.677 22.3046 20.0077 21.7561 21.0039C21.2077 22 19.7536 22 16.8454 22L7.15462 22C4.24642 22 2.79231 22 2.24387 21.0039C1.69543 20.0077 2.05474 18.677 3.49762 16.0154Z',
  d3: 'M19.5 4.14631L19.563 4.10086C20.6208 3.3371 21.1498 2.95522 21.5749 3.13961C22 3.324 22 3.9353 22 5.15791V5.84209C22 7.0647 22 7.676 21.5749 7.86039C21.1498 8.04478 20.6208 7.6629 19.563 6.89914L19.5 6.85369M15.5 9H16C17.6499 9 18.4749 9 18.9874 8.55151C19.5 8.10301 19.5 7.38118 19.5 5.9375V5.0625C19.5 3.61882 19.5 2.89699 18.9874 2.44849C18.4749 2 17.6499 2 16 2H15.5C13.8501 2 13.0251 2 12.5126 2.44849C12 2.89699 12 3.61882 12 5.0625V5.9375C12 7.38118 12 8.10301 12.5126 8.55151C13.0251 9 13.8501 9 15.5 9Z',
  d4: 'M12.1535 3C12 3.45397 12 4.09671 12 5.0625V5.9375C12 7.38118 12 8.10301 12.5126 8.55151C13.0251 9 13.8501 9 15.5 9H16C17.6499 9 18.4749 9 18.9874 8.55151C19.1443 8.66474 19.865 7.11722 20 7.21307V15H4V7C4 5.11438 4 4.17157 4.58579 3.58579C5.17157 3 6.11438 3 8 3H12.1535Z',
  d5: 'M8.18417 2.25C7.29769 2.24995 6.53387 2.24991 5.92221 2.33215C5.2667 2.42028 4.63835 2.61902 4.12868 3.12868C3.61902 3.63835 3.42028 4.2667 3.33215 4.92221C3.24991 5.53387 3.24995 6.29769 3.25 7.18417L3.25 14.75L3.24991 14.7913C3.24862 14.8426 3.2425 14.8679 3.22019 14.9141L3.21015 14.9338L2.83421 15.6653C2.11021 17.0014 1.62267 18.0653 1.39719 18.9487C1.16515 19.8577 1.1925 20.6495 1.58675 21.3656C2.02749 22.1661 2.81497 22.4782 3.69825 22.6165C4.55189 22.7501 5.69027 22.75 7.08676 22.75H16.913C18.3095 22.75 19.4479 22.7501 20.3015 22.6165C21.1848 22.4782 21.9723 22.1661 22.413 21.3656C22.8073 20.6495 22.8346 19.8576 22.6025 18.9486C22.3766 18.0637 21.8877 16.9975 21.1615 15.658L20.8047 14.9999C20.7881 14.9692 20.7798 14.9538 20.7744 14.9413C20.7586 14.9045 20.7549 14.8899 20.7512 14.85C20.75 14.8364 20.75 14.8076 20.75 14.75V11.75C20.75 11.1977 20.3023 10.75 19.75 10.75C19.1977 10.75 18.75 11.1977 18.75 11.75V13.65C18.75 13.9328 18.75 14.0743 18.6621 14.1621C18.5743 14.25 18.4328 14.25 18.15 14.25H5.85C5.56716 14.25 5.42574 14.25 5.33787 14.1621C5.25 14.0743 5.25 13.9328 5.25 13.65V7.25C5.25 6.27893 5.25213 5.65122 5.31431 5.18871C5.37263 4.75497 5.46677 4.61902 5.5429 4.5429C5.61902 4.46677 5.75497 4.37263 6.18871 4.31431C6.65122 4.25213 7.27893 4.25 8.25 4.25H9.25C9.80229 4.25 10.25 3.80229 10.25 3.25C10.25 2.69772 9.80229 2.25 9.25 2.25L8.18417 2.25Z',
  d6: 'M16.0457 1.25H15.4543C14.6683 1.24998 14.0127 1.24996 13.4922 1.3112C12.9491 1.37509 12.4394 1.51594 12.0187 1.88406C11.5836 2.2648 11.4027 2.74838 11.3228 3.2684C11.2499 3.74266 11.25 4.33285 11.25 5.00767V5.99233C11.25 6.66715 11.2499 7.25734 11.3228 7.7316C11.4027 8.25163 11.5836 8.73521 12.0187 9.11594C12.4394 9.48407 12.9491 9.62492 13.4922 9.68881C14.0127 9.75005 14.6683 9.75003 15.4543 9.75H16.0457C16.8317 9.75003 17.4873 9.75005 18.0079 9.68881C18.5509 9.62492 19.0606 9.48407 19.4813 9.11594C19.7899 8.84597 19.9706 8.52429 20.0781 8.17458C20.211 8.26012 20.337 8.33562 20.4558 8.39841C20.8266 8.59444 21.3357 8.7817 21.8734 8.54848C22.4417 8.30198 22.6203 7.77506 22.6873 7.36029C22.7502 6.97117 22.7502 6.46155 22.7501 5.90184V5.09823C22.7502 4.53852 22.7502 4.02889 22.6873 3.63976C22.6203 3.225 22.4417 2.69808 21.8734 2.45158C21.3357 2.21836 20.8266 2.40562 20.4558 2.60165C20.337 2.66444 20.211 2.73994 20.0781 2.82547C19.9706 2.47574 19.7899 2.15404 19.4813 1.88406C19.0606 1.51594 18.5509 1.37509 18.0079 1.3112C17.4873 1.24996 16.8317 1.24998 16.0457 1.25ZM20.249 4.53104C20.25 4.68462 20.25 4.84365 20.25 5.00768V5.99233C20.25 6.15638 20.25 6.31542 20.249 6.46902C20.6585 6.7631 20.9381 6.9567 21.1568 7.07229C21.176 7.08246 21.1937 7.09142 21.2099 7.09932C21.2478 6.84477 21.2501 6.46376 21.2501 5.84212V5.15794C21.2501 4.5363 21.2478 4.15528 21.2099 3.90074C21.1937 3.90863 21.176 3.9176 21.1568 3.92777C20.9381 4.04336 20.6585 4.23696 20.249 4.53104Z',
  d7: 'M20 15V11.5M4 15V3L9 3',
  d8: 'M2 22L4.01911 15H19.9514L21.9996 22H2Z',
  d9: 'M19 7L22 8V3L19 4M12 2H19V9H12V2Z',
  d10: 'M22.7124 21.5056L20.7954 14.8038V12.0833H18.8422V13.9643H5.16016V4.20239H9.00119L8.99979 2.25H3.20418V14.8038L1.2876 21.5057C1.20337 21.8002 1.26242 22.1172 1.4471 22.3617C1.63177 22.6062 1.92064 22.75 2.2273 22.75H21.7727C22.0794 22.75 22.3682 22.6062 22.5529 22.3617C22.7376 22.1171 22.7966 21.8002 22.7124 21.5056Z',
  d11: 'M11.25 1.25H19.75V3.95943L22.75 2.28849V8.71151L19.75 7.04057V9.75H11.25V1.25Z',
} as const;

export const IconLaptopVideoStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-video-stroke-rounded IconLaptopVideoStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconLaptopVideoDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-video-duotone-rounded IconLaptopVideoDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconLaptopVideoTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-video-twotone-rounded IconLaptopVideoTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconLaptopVideoSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-video-solid-rounded IconLaptopVideoSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLaptopVideoBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-video-bulk-rounded IconLaptopVideoBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLaptopVideoStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-video-stroke-sharp IconLaptopVideoStrokeSharp"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLaptopVideoSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-video-solid-sharp IconLaptopVideoSolidSharp"
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

export const iconPackOfLaptopVideo: TheIconSelfPack = {
  name: 'LaptopVideo',
  StrokeRounded: IconLaptopVideoStrokeRounded,
  DuotoneRounded: IconLaptopVideoDuotoneRounded,
  TwotoneRounded: IconLaptopVideoTwotoneRounded,
  SolidRounded: IconLaptopVideoSolidRounded,
  BulkRounded: IconLaptopVideoBulkRounded,
  StrokeSharp: IconLaptopVideoStrokeSharp,
  SolidSharp: IconLaptopVideoSolidSharp,
};