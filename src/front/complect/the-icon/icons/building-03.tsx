import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16 10L18.1494 10.6448C19.5226 11.0568 20.2092 11.2628 20.6046 11.7942C21 12.3256 21 13.0425 21 14.4761V22',
  d2: 'M8 9L11 9M8 13L11 13',
  d3: 'M12 22V19C12 18.0572 12 17.5858 11.7071 17.2929C11.4142 17 10.9428 17 10 17H9C8.05719 17 7.58579 17 7.29289 17.2929C7 17.5858 7 18.0572 7 19V22',
  d4: 'M2 22L22 22',
  d5: 'M3 22V6.71724C3 4.20649 3 2.95111 3.79118 2.32824C4.58237 1.70537 5.74742 2.04355 8.07752 2.7199L13.0775 4.17122C14.4836 4.57937 15.1867 4.78344 15.5933 5.33965C16 5.89587 16 6.65344 16 8.16857V22',
  d6: 'M3 22V6.71724C3 4.20649 3 2.95111 3.79118 2.32824C4.58237 1.70538 5.74742 2.04355 8.07752 2.71989L13.0775 4.17122C14.4836 4.57936 15.1867 4.78344 15.5933 5.33965C16 5.89587 16 6.65343 16 8.16857V22H10C10.9428 22 11.4142 22 11.7071 21.7071C12 21.4142 12 20.9428 12 20V19C12 18.0572 12 17.5858 11.7071 17.2929C11.4142 17 10.9428 17 10 17H9C8.05719 17 7.58579 17 7.29289 17.2929C7 17.5858 7 18.0572 7 19V20C7 20.9428 7 21.4142 7.29289 21.7071C7.58579 22 8.05719 22 9 22H3Z',
  d7: 'M10 17H9C8.05719 17 7.58579 17 7.29289 17.2929C7 17.5858 7 18.0572 7 19V20C7 20.9428 7 21.4142 7.29289 21.7071C7.58579 22 8.05719 22 9 22H10C10.9428 22 11.4142 22 11.7071 21.7071C12 21.4142 12 20.9428 12 20V19C12 18.0572 12 17.5858 11.7071 17.2929C11.4142 17 10.9428 17 10 17Z',
  d8: 'M17.6125 11.6034L15.4631 10.9586L16.0378 9.04297L18.1872 9.68779C18.2044 9.69295 18.2216 9.69809 18.2387 9.70321C18.8812 9.89595 19.4437 10.0646 19.8902 10.2573C20.3727 10.4654 20.8165 10.7399 21.1574 11.1981C21.4982 11.6562 21.6336 12.1601 21.6944 12.6821C21.7506 13.1652 21.7505 13.7523 21.7505 14.4232L21.7505 22.0008H19.7505V14.4769C19.7505 13.7365 19.7489 13.2669 19.7078 12.9132C19.6696 12.5855 19.6073 12.4652 19.5528 12.3919C19.4982 12.3186 19.401 12.2244 19.098 12.0937C18.771 11.9526 18.3217 11.8162 17.6125 11.6034Z',
  d9: 'M13.3292 3.46325C13.9962 3.65681 14.5603 3.82054 15.0047 4.01001C15.4785 4.21206 15.888 4.47158 16.199 4.89701C16.5083 5.31995 16.6359 5.79175 16.6946 6.31002C16.7503 6.80079 16.7503 7.40474 16.7502 8.12634V8.12636V22C16.7502 22.4142 16.4145 22.75 16.0002 22.75H3.00025C2.58603 22.75 2.25024 22.4142 2.25024 22L2.25024 6.65889V6.65887V6.65884C2.25022 5.45313 2.2502 4.46837 2.35641 3.71068C2.46638 2.9261 2.70932 2.22562 3.3275 1.73895C3.95241 1.24698 4.6847 1.1901 5.45702 1.2935C6.1945 1.39223 7.11297 1.65885 8.22739 1.98237L8.22743 1.98238L13.3292 3.46325L13.3292 3.46325ZM7.25025 7.99993C7.25025 7.58572 7.58603 7.24993 8.00025 7.24993L11.0002 7.24993C11.4145 7.24993 11.7502 7.58572 11.7502 7.99993C11.7502 8.41414 11.4145 8.74993 11.0002 8.74993L8.00025 8.74993C7.58603 8.74993 7.25025 8.41414 7.25025 7.99993ZM7.25025 11.9999C7.25025 11.5857 7.58603 11.2499 8.00025 11.2499L11.0002 11.2499C11.4145 11.2499 11.7502 11.5857 11.7502 11.9999C11.7502 12.4141 11.4145 12.7499 11.0002 12.7499L8.00025 12.7499C7.58603 12.7499 7.25025 12.4141 7.25025 11.9999ZM9.00025 15.2499L8.9555 15.2499C8.52269 15.2499 8.12586 15.2498 7.80304 15.2932C7.44756 15.341 7.07184 15.4535 6.76282 15.7625C6.45379 16.0715 6.34134 16.4472 6.29355 16.8027C6.25015 17.1255 6.2502 17.5224 6.25025 17.9552V17.9552L6.25025 21.9999H7.75025L7.75025 17.9999C7.75025 17.5073 7.75184 17.2133 7.78018 17.0026C7.79147 16.9186 7.81876 16.8568 7.83156 16.8278C7.83347 16.8235 7.83505 16.8199 7.83622 16.8171C7.858 16.8081 7.90636 16.7928 8.00292 16.7799C8.21364 16.7515 8.50765 16.7499 9.00025 16.7499H10.0003C10.4929 16.7499 10.7869 16.7515 10.9976 16.7799C11.0816 16.7912 11.1434 16.8184 11.1724 16.8312C11.1767 16.8332 11.1803 16.8347 11.1831 16.8359C11.1921 16.8577 11.2073 16.906 11.2203 17.0026C11.2487 17.2133 11.2503 17.5073 11.2503 17.9999V21.9999H12.7503L12.7503 17.9552V17.9552C12.7503 17.5224 12.7504 17.1255 12.707 16.8027C12.6592 16.4472 12.5467 16.0715 12.2377 15.7625C11.9287 15.4535 11.5529 15.341 11.1975 15.2932C10.8746 15.2498 10.4778 15.2499 10.045 15.2499L10.0003 15.2499H9.00025Z',
  d10: 'M1.00024 21.75C1.00024 21.1977 1.44796 20.75 2.00024 20.75L22.0002 20.75C22.5525 20.75 23.0002 21.1977 23.0002 21.75C23.0002 22.3023 22.5525 22.75 22.0002 22.75L2.00024 22.75C1.44796 22.75 1.00024 22.3023 1.00024 21.75Z',
  d11: 'M13.3292 3.46308C13.9962 3.65664 14.5603 3.82036 15.0046 4.00983C15.4785 4.21188 15.888 4.47141 16.199 4.89684C16.5083 5.31978 16.6359 5.79158 16.6946 6.30985C16.7503 6.80061 16.7503 7.40457 16.7502 8.12617V8.12619V21.9998C16.7502 22.414 16.4145 22.7498 16.0002 22.7498H3.00025C2.58603 22.7498 2.25024 22.414 2.25024 21.9998V6.65872V6.65869C2.25022 5.45297 2.2502 4.46821 2.3564 3.7105C2.46638 2.92593 2.70932 2.22545 3.3275 1.73878C3.95241 1.24681 4.6847 1.18992 5.45702 1.29332C6.19451 1.39206 7.11299 1.65869 8.22743 1.98221L13.3292 3.46307L13.3292 3.46308Z',
  d12: 'M16.7502 9.25391V11.342L17.6125 11.6007C18.3217 11.8134 18.771 11.9498 19.098 12.0909C19.401 12.2216 19.4982 12.3158 19.5528 12.3891C19.6073 12.4624 19.6696 12.5827 19.7078 12.9104C19.7489 13.2642 19.7505 13.7338 19.7505 14.4741V21.998H21.7505L21.7505 14.4204C21.7505 13.7496 21.7506 13.1624 21.6944 12.6793C21.6336 12.1573 21.4982 11.6534 21.1574 11.1953C20.8165 10.7371 20.3727 10.4627 19.8902 10.2545C19.4437 10.0619 18.8812 9.89316 18.2387 9.70043L16.7502 9.25391Z',
  d13: 'M7.25024 8C7.25024 7.58579 7.58603 7.25 8.00024 7.25L11.0002 7.25C11.4145 7.25 11.7502 7.58579 11.7502 8C11.7502 8.41421 11.4145 8.75 11.0002 8.75L8.00024 8.75C7.58603 8.75 7.25024 8.41421 7.25024 8ZM7.25024 12C7.25024 11.5858 7.58603 11.25 8.00024 11.25L11.0002 11.25C11.4145 11.25 11.7502 11.5858 11.7502 12C11.7502 12.4142 11.4145 12.75 11.0002 12.75L8.00024 12.75C7.58603 12.75 7.25024 12.4142 7.25024 12Z',
  d14: 'M8.9555 15.25L9.00025 15.25H10.0003L10.045 15.25C10.4778 15.25 10.8746 15.2499 11.1975 15.2933C11.5529 15.3411 11.9287 15.4535 12.2377 15.7626C12.5467 16.0716 12.6592 16.4473 12.707 16.8028C12.7504 17.1256 12.7503 17.5224 12.7503 17.9553V17.9553L12.7503 22H11.2503V18C11.2503 17.5074 11.2487 17.2134 11.2203 17.0027C11.2073 16.9061 11.1921 16.8578 11.1831 16.836C11.1613 16.827 11.0941 16.7929 10.9976 16.7799C10.7869 16.7516 10.4929 16.75 10.0003 16.75H9.00025C8.50764 16.75 8.21364 16.7516 8.00292 16.7799C7.90636 16.7929 7.858 16.8082 7.83622 16.8172C7.82726 16.8389 7.79316 16.9061 7.78017 17.0027C7.75184 17.2134 7.75025 17.5074 7.75025 18V22H6.25025L6.25025 17.9553C6.2502 17.5224 6.25015 17.1256 6.29355 16.8028C6.34134 16.4473 6.45379 16.0716 6.76281 15.7626C7.07184 15.4535 7.44756 15.3411 7.80304 15.2933C8.12585 15.2499 8.52269 15.25 8.9555 15.25Z',
  d15: 'M16 9.94482L21 11.9308V21.8607',
  d16: 'M7 8.95166H12M7 12.9236H12',
  d17: 'M12 21.86V16.895H7V21.86',
  d18: 'M1 21.8599H23',
  d19: 'M2.98877 21.9976V2.01245C2.98877 2.00591 2.99493 2.00114 3.00126 2.00276L15.9708 5.3324V21.898',
  d20: 'M19.8571 12.8455L15.72 11.1278L16.423 9.30371L21.75 11.5154V22.0037H19.8571V12.8455Z',
  d21: 'M7 16.25C6.58579 16.25 6.25 16.5858 6.25 17L6.25 22H2.25L2.25 2.00001C2.25 1.7682 2.35719 1.54942 2.54036 1.40736C2.72353 1.2653 2.9621 1.21592 3.18661 1.27359L16.75 4.75797V22L12.75 22V17C12.75 16.5858 12.4142 16.25 12 16.25H7ZM11.25 22L7.75 22L7.75 17.75H11.25V22ZM12 9.75L7 9.75V8.25L12 8.25V9.75ZM12 13.75L7 13.75V12.25L12 12.25V13.75Z',
  d22: 'M1 20.75L23 20.75V22.75L1 22.75L1 20.75Z',
} as const;

export const IconBuilding03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="building-03-stroke-rounded IconBuilding03StrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconBuilding03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="building-03-duotone-rounded IconBuilding03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconBuilding03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="building-03-twotone-rounded IconBuilding03TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconBuilding03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="building-03-solid-rounded IconBuilding03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBuilding03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="building-03-bulk-rounded IconBuilding03BulkRounded"
    >
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBuilding03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="building-03-stroke-sharp IconBuilding03StrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconBuilding03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="building-03-solid-sharp IconBuilding03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBuilding03: TheIconSelfPack = {
  name: 'Building03',
  StrokeRounded: IconBuilding03StrokeRounded,
  DuotoneRounded: IconBuilding03DuotoneRounded,
  TwotoneRounded: IconBuilding03TwotoneRounded,
  SolidRounded: IconBuilding03SolidRounded,
  BulkRounded: IconBuilding03BulkRounded,
  StrokeSharp: IconBuilding03StrokeSharp,
  SolidSharp: IconBuilding03SolidSharp,
};