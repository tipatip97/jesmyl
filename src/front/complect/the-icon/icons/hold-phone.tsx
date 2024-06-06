import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21 20C20.3567 18.7133 19 17.0243 19 15.5279C19 13.8295 19.3671 11.7341 18.5777 10.1554C18.2445 9.48892 18 8.81397 18 8.05573V4.42857C18 4.19188 17.8081 4 17.5714 4C16.1513 4 15 5.15127 15 6.57143M8 18L11.6348 20.2717C11.8755 20.4222 12.0814 20.6222 12.2389 20.8583L13 22',
  d2: 'M5.02734 15C5.08201 16.0967 5.24516 16.7809 5.73203 17.2678C6.46426 18 7.64277 18 9.99979 18C12.3568 18 13.5353 18 14.2676 17.2678C14.9998 16.5355 14.9998 15.357 14.9998 13V7C14.9998 4.64298 14.9998 3.46447 14.2676 2.73223C13.5353 2 12.3568 2 9.99979 2C7.64277 2 6.46426 2 5.73203 2.73223C5.24516 3.2191 5.08201 3.90328 5.02734 5',
  d3: 'M4.25 7.5H5.75C6.44036 7.5 7 6.94036 7 6.25C7 5.55964 6.44036 5 5.75 5L4.25 5C3.55964 5 3 5.55964 3 6.25C3 6.94036 3.55964 7.5 4.25 7.5ZM4.25 7.5L6.75 7.5C7.44036 7.5 8 8.05964 8 8.75C8 9.44036 7.44036 10 6.75 10L4.25 10M4.25 7.5C3.55964 7.5 3 8.05964 3 8.75C3 9.44036 3.55964 10 4.25 10M4.25 10L5.75 10C6.44036 10 7 10.5596 7 11.25C7 11.9404 6.44036 12.5 5.75 12.5H4.25M4.25 10C3.55964 10 3 10.5596 3 11.25C3 11.9404 3.55964 12.5 4.25 12.5M4.25 12.5H5.25C5.94036 12.5 6.5 13.0596 6.5 13.75C6.5 14.4404 5.94036 15 5.25 15H4.25C3.55964 15 3 14.4404 3 13.75C3 13.0596 3.55964 12.5 4.25 12.5Z',
  d4: 'M9.99981 15H10.0088',
  d5: 'M18.0002 8.05573V4.42857C18.0002 4.19188 17.8083 4 17.5716 4C16.1514 4 14.9998 5.15569 14.9998 6.57585L15 7V13C15 15.357 15 16.5355 14.2677 17.2678C13.5355 18 12.357 18 9.99997 18L7.99609 17.9723L11.635 20.2717C11.8757 20.4222 12.0816 20.6222 12.2391 20.8583L13.0002 22L21.0002 20C20.3568 18.7133 19.0002 17.0243 19.0002 15.5279C19.0002 13.8295 19.3672 11.7341 18.5779 10.1554C18.2446 9.48892 18.0002 8.81397 18.0002 8.05573Z',
  d6: 'M5.75 5L4.25 5C3.55964 5 3 5.55964 3 6.25C3 6.94036 3.55964 7.5 4.25 7.5H5.75C6.44036 7.5 7 6.94036 7 6.25C7 5.55964 6.44036 5 5.75 5Z',
  d7: 'M6.75 7.5L4.25 7.5C3.55964 7.5 3 8.05964 3 8.75C3 9.44036 3.55964 10 4.25 10L6.75 10C7.44036 10 8 9.44036 8 8.75C8 8.05964 7.44036 7.5 6.75 7.5Z',
  d8: 'M5.75 10L4.25 10C3.55964 10 3 10.5596 3 11.25C3 11.9404 3.55964 12.5 4.25 12.5H5.75C6.44036 12.5 7 11.9404 7 11.25C7 10.5596 6.44036 10 5.75 10Z',
  d9: 'M5.25 12.5H4.25C3.55964 12.5 3 13.0596 3 13.75C3 14.4404 3.55964 15 4.25 15H5.25C5.94036 15 6.5 14.4404 6.5 13.75C6.5 13.0596 5.94036 12.5 5.25 12.5Z',
  d10: 'M14.2501 6.57143C14.2501 4.73705 15.7371 3.25 17.5715 3.25C18.2224 3.25 18.7501 3.77766 18.7501 4.42857V8.05573C18.7501 8.64665 18.9385 9.19983 19.2486 9.82001C19.7202 10.7632 19.8277 11.8193 19.8349 12.7912C19.8385 13.2814 19.8162 13.7713 19.7942 14.2299C19.7732 14.6668 19.7501 15.1472 19.7501 15.5279C19.7501 16.0745 20.0057 16.7281 20.4174 17.4838C20.5979 17.815 20.8606 18.2522 21.0592 18.5829C21.2753 18.9429 21.4953 19.3133 21.6709 19.6646C21.7726 19.8681 21.7765 20.1067 21.6814 20.3134C21.5864 20.5201 21.4027 20.6724 21.182 20.7276L13.182 22.7276C12.8745 22.8045 12.5518 22.6798 12.376 22.416L11.6149 21.2744C11.5165 21.1267 11.3878 21.0018 11.2374 20.9077L7.60256 18.636C7.31884 18.4587 7.18689 18.1149 7.27913 17.7932C7.37136 17.4716 7.66548 17.25 8.00006 17.25H11.0001C11.9641 17.25 12.6116 17.2484 13.0947 17.1835C13.5561 17.1214 13.7536 17.0142 13.8839 16.8839C14.0143 16.7536 14.1215 16.5561 14.1835 16.0946C14.2485 15.6116 14.2501 14.964 14.2501 14V6.57143Z',
  d11: 'M9.94612 1.25H10.0535C11.1863 1.24998 12.1121 1.24996 12.8429 1.34822C13.6069 1.45093 14.2692 1.67321 14.7979 2.2019C15.3266 2.7306 15.5489 3.39294 15.6516 4.15689C15.7499 4.88775 15.7498 5.81348 15.7498 6.94631V13.0537C15.7498 14.1865 15.7499 15.1123 15.6516 15.8431C15.5489 16.6071 15.3266 17.2694 14.7979 17.7981C14.2692 18.3268 13.6069 18.5491 12.8429 18.6518C12.1121 18.75 11.1863 18.75 10.0535 18.75H9.94612C8.81329 18.75 7.88756 18.75 7.1567 18.6518C6.39274 18.5491 5.73041 18.3268 5.20171 17.7981C4.50085 17.0972 4.33402 16.1553 4.27829 15.0373C4.25767 14.6236 4.57632 14.2716 4.99002 14.2509C5.40372 14.2303 5.75581 14.549 5.77643 14.9627C5.83004 16.0382 5.98949 16.4646 6.26237 16.7374C6.46591 16.941 6.75895 17.0848 7.35657 17.1652C7.97576 17.2484 8.8001 17.25 9.99981 17.25C11.1995 17.25 12.0239 17.2484 12.6431 17.1652C13.2407 17.0848 13.5337 16.941 13.7372 16.7374C13.9408 16.5339 14.0846 16.2409 14.165 15.6432C14.2482 15.0241 14.2498 14.1997 14.2498 13V7C14.2498 5.80029 14.2482 4.97595 14.165 4.35676C14.0846 3.75914 13.9408 3.4661 13.7372 3.26256C13.5337 3.05902 13.2407 2.91519 12.6431 2.83484C12.0239 2.75159 11.1995 2.75 9.99981 2.75C8.8001 2.75 7.97576 2.75159 7.35657 2.83484C6.75895 2.91519 6.46591 3.05902 6.26237 3.26256C5.98949 3.53545 5.83004 3.96181 5.77643 5.03734C5.75581 5.45104 5.40372 5.76969 4.99002 5.74907C4.57632 5.72845 4.25767 5.37636 4.27829 4.96266C4.33402 3.84474 4.50085 2.90276 5.20171 2.2019C5.73041 1.67321 6.39274 1.45093 7.1567 1.34822C7.88756 1.24996 8.81329 1.24998 9.94612 1.25Z',
  d12: 'M9 15C9 14.4477 9.44571 14 9.99553 14H10.0045C10.5543 14 11 14.4477 11 15C11 15.5523 10.5543 16 10.0045 16H9.99553C9.44571 16 9 15.5523 9 15Z',
  d13: 'M3.34544 6.42566H6.65456C7.25535 6.42566 7.74239 5.93862 7.74239 5.33783C7.74239 4.73704 7.25535 4.25 6.65456 4.25H3.34544C2.74465 4.25 2.25761 4.73704 2.25761 5.33783C2.25761 5.93862 2.74464 6.42566 3.34544 6.42566Z',
  d14: 'M7.66216 7.35809H3.33828C2.73749 7.35809 2.25045 7.84513 2.25045 8.44593C2.25045 9.04673 2.73749 9.53377 3.33828 9.53377L7.66216 9.53377C8.26296 9.53377 8.75 9.04673 8.75 8.44593C8.75 7.84513 8.26296 7.35809 7.66216 7.35809Z',
  d15: 'M6.66216 10.4662H3.33784C2.73704 10.4662 2.25 10.9532 2.25 11.554C2.25 12.1548 2.73704 12.6419 3.33784 12.6419H6.66216C7.26296 12.6419 7.75 12.1548 7.75 11.554C7.75 10.9532 7.26296 10.4662 6.66216 10.4662Z',
  d16: 'M3.34537 13.5743H6.15454C6.75534 13.5743 7.24239 14.0614 7.24239 14.6622C7.24239 15.263 6.75534 15.75 6.15454 15.75H3.34537C2.74453 15.75 2.25747 15.2629 2.25752 14.6621C2.25757 14.0613 2.7446 13.5743 3.34537 13.5743Z',
  d17: 'M10.0536 1.25H9.94622C8.81341 1.24998 7.88765 1.24996 7.1568 1.34822C6.39285 1.45093 5.73051 1.67321 5.20182 2.20191C4.65539 2.74833 4.43357 3.44133 4.33594 4.25H5.85058C5.93274 3.72629 6.06914 3.4559 6.26248 3.26257C6.46602 3.05903 6.75905 2.91519 7.35667 2.83484C7.97586 2.7516 8.8002 2.75 9.99991 2.75C11.1996 2.75 12.024 2.7516 12.6432 2.83484C13.2408 2.91519 13.5338 3.05903 13.7373 3.26257C13.9409 3.46611 14.0847 3.75914 14.1651 4.35676C14.2483 4.97595 14.2499 5.80029 14.2499 7V13C14.2499 14.1997 14.2483 15.0241 14.1651 15.6432C14.0847 16.2409 13.9409 16.5339 13.7373 16.7374C13.5338 16.941 13.2408 17.0848 12.6432 17.1652C12.024 17.2484 11.1996 17.25 9.99991 17.25C8.8002 17.25 7.97586 17.2484 7.35667 17.1652C6.75905 17.0848 6.46602 16.941 6.26248 16.7374C6.06914 16.5441 5.93274 16.2737 5.85058 15.75H4.33594C4.43357 16.5587 4.65539 17.2517 5.20182 17.7981C5.73051 18.3268 6.39285 18.5491 7.1568 18.6518C7.88766 18.75 8.81338 18.75 9.9462 18.75H10.0536C11.1864 18.75 12.1122 18.75 12.843 18.6518C13.607 18.5491 14.2693 18.3268 14.798 17.7981C15.3267 17.2694 15.549 16.6071 15.6517 15.8431C15.75 15.1123 15.7499 14.1865 15.7499 13.0537V6.94632C15.7499 5.81348 15.75 4.88775 15.6517 4.15689C15.549 3.39294 15.3267 2.7306 14.798 2.20191C14.2693 1.67321 13.607 1.45093 12.843 1.34822C12.1122 1.24996 11.1864 1.24998 10.0536 1.25Z',
  d18: 'M21 20L19 16C19 14.3016 19.3671 11.7341 18.5777 10.1554C18.2445 9.48892 18 8.81397 18 8.05573V4.42857C18 4.19188 17.8081 4 17.5714 4C16.1513 4 15 5.15127 15 6.57143M8 18L12 20.5L13 22',
  d19: 'M5.02734 15L5.0003 18H14.9998V2H5L5.02734 5',
  d20: 'M4.52761 1.5379C4.70758 1.35365 4.95267 1.25 5.20835 1.25H14.7917C15.3209 1.25 15.75 1.68528 15.75 2.22222V17.7778C15.75 18.3147 15.3209 18.75 14.7917 18.75H5.20864C4.95297 18.75 4.70791 18.6464 4.52794 18.4621C4.34797 18.2779 4.24803 18.0284 4.25033 17.769L4.27624 14.8523L6.19287 14.8699L6.17567 16.8056H13.8333V3.19444H6.17547L6.19286 5.13003L4.27624 5.14775L4.25004 2.23108C4.24771 1.97171 4.34764 1.72214 4.52761 1.5379Z',
  d21: 'M14.25 6.57143C14.25 4.73705 15.7371 3.25 17.5715 3.25C18.2224 3.25 18.75 3.77766 18.75 4.42857V8.05573C18.75 8.64665 18.9385 9.19983 19.2486 9.82001C19.7249 10.7727 19.8279 11.9575 19.8349 13.0279C19.8385 13.5746 19.8164 14.1212 19.7943 14.6251L19.7887 14.7544V14.7544C19.7715 15.1435 19.7557 15.5008 19.7513 15.8254L21.6709 19.6646C21.7726 19.8681 21.7765 20.1067 21.6814 20.3134C21.5864 20.5201 21.4026 20.6724 21.1819 20.7276L13.1819 22.7276C12.8744 22.8045 12.5518 22.6798 12.376 22.416L11.4656 21.0504L7.60254 18.636L8.39754 17.364H14.25V6.57143Z',
  d22: 'M9.25 14.25H10.75V15.75H9.25V14.25Z',
};

export const IconHoldPhoneStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-phone-stroke-rounded IconHoldPhoneStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHoldPhoneDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-phone-duotone-rounded IconHoldPhoneDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
        strokeLinejoin="round" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d4} 
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

export const IconHoldPhoneTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-phone-twotone-rounded IconHoldPhoneTwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
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

export const IconHoldPhoneSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-phone-solid-rounded IconHoldPhoneSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHoldPhoneBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-phone-bulk-rounded IconHoldPhoneBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHoldPhoneStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-phone-stroke-sharp IconHoldPhoneStrokeSharp"
    >
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHoldPhoneSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hold-phone-solid-sharp IconHoldPhoneSolidSharp"
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
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
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

export const iconPackOfHoldPhone: TheIconSelfPack = {
  name: 'HoldPhone',
  StrokeRounded: IconHoldPhoneStrokeRounded,
  DuotoneRounded: IconHoldPhoneDuotoneRounded,
  TwotoneRounded: IconHoldPhoneTwotoneRounded,
  SolidRounded: IconHoldPhoneSolidRounded,
  BulkRounded: IconHoldPhoneBulkRounded,
  StrokeSharp: IconHoldPhoneStrokeSharp,
  SolidSharp: IconHoldPhoneSolidSharp,
};