import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15 15C15 15.8284 15.6716 16.5 16.5 16.5C17.3284 16.5 18 15.8284 18 15C18 14.1716 17.3284 13.5 16.5 13.5C15.6716 13.5 15 14.1716 15 15Z',
  d2: 'M3 12V6C5.1047 6.62133 9.57619 7.42671 15.0038 7.80281C17.9252 8.00525 19.3859 8.10646 20.1929 8.97688C21 9.8473 21 11.2497 21 14.0546V16.0683C21 18.9566 21 20.4008 20.0163 21.2998C19.0325 22.1987 17.6919 22.0677 15.0106 21.8058C14.3572 21.7419 13.6846 21.666 13 21.5762',
  d3: 'M17.6258 8C18.0035 6.57673 18.3453 3.98822 17.327 2.70292C16.6816 1.88827 15.7223 1.96654 14.7818 2.04926C9.83791 2.48406 6.34544 3.36731 4.39301 3.96737C3.55348 4.2254 3 5.04522 3 5.96044',
  d4: 'M11 18H7M7 18H3M7 18V22M7 18L7 14',
  d5: 'M3 6C5.1047 6.62133 9.57619 7.42671 15.0038 7.80281C17.9252 8.00525 19.3859 8.10646 20.1929 8.97688C21 9.8473 21 11.2497 21 14.0546V16.0683C21 18.9566 21 20.4008 20.0163 21.2998C19.0325 22.1987 17.6919 22.0677 15.0106 21.8058C12.4235 21.553 9.53623 21.1109 6.78937 20.3687C5.08923 19.9093 4.23916 19.6796 3.61958 18.8663C3 18.0531 3 17.0558 3 15.0614V6ZM16.5 16.5C15.6716 16.5 15 15.8284 15 15C15 14.1716 15.6716 13.5 16.5 13.5C17.3284 13.5 18 14.1716 18 15C18 15.8284 17.3284 16.5 16.5 16.5Z',
  d6: 'M2.375 5.77614C2.375 4.556 3.14362 3.38901 4.41249 3.01245C6.36472 2.4331 9.91912 1.58254 14.7933 1.16863C15.6175 1.09642 17.0516 0.970784 18.012 2.14128C18.7163 2.99967 18.8804 4.17689 18.8749 5.16205C18.8719 5.67955 18.8215 6.19671 18.7467 6.67504C18.7022 6.95936 18.6799 7.10152 18.7413 7.19734C18.8027 7.29316 18.9455 7.33356 19.2311 7.41436C19.876 7.5968 20.4347 7.87644 20.8679 8.34366C21.4237 8.94312 21.6584 9.69115 21.7684 10.5743C21.875 11.4308 21.875 12.5211 21.875 13.88V16.0044C21.875 17.398 21.875 18.5269 21.744 19.4161C21.6068 20.3471 21.3128 21.1219 20.6472 21.7301C19.989 22.3316 19.2223 22.5602 18.3193 22.6135C17.467 22.6639 16.3513 22.5549 15.0629 22.4289C13.4935 22.2756 11.81 22.0529 10.1096 21.7359C9.87886 21.6929 9.76349 21.6713 9.69424 21.588C9.625 21.5047 9.625 21.3863 9.625 21.1496V20.9767C9.625 20.6939 9.625 20.5524 9.71287 20.4646C9.80074 20.3767 9.94216 20.3767 10.225 20.3767H11.125C12.5057 20.3767 13.625 19.2574 13.625 17.8767C13.625 16.496 12.5057 15.3767 11.125 15.3767H10.225C9.94216 15.3767 9.80074 15.3767 9.71287 15.2888C9.625 15.201 9.625 15.0596 9.625 14.7767V13.8767C9.625 12.496 8.50571 11.3767 7.125 11.3767C5.74429 11.3767 4.625 12.496 4.625 13.8767V14.7767C4.625 15.0596 4.625 15.201 4.53713 15.2888C4.44926 15.3767 4.30784 15.3767 4.025 15.3767H3.125C3.03872 15.3767 2.95346 15.3811 2.86944 15.3896L2.86938 15.3896C2.73995 15.4028 2.67523 15.4093 2.64515 15.4063C2.49736 15.3915 2.41065 15.3132 2.38103 15.1676C2.375 15.138 2.375 15.0873 2.375 14.9859V5.77614ZM15.9665 3.02636C15.683 2.98142 15.3467 3.0034 14.8662 3.04421C10.1434 3.44528 6.82086 4.2587 4.98308 4.80409C4.90099 4.82845 4.82174 4.86641 4.7483 4.91634C4.5771 5.03275 4.49149 5.09095 4.52899 5.28491C4.56649 5.47887 4.71175 5.51061 5.00227 5.57411C7.35233 6.08772 10.9667 6.63928 15.1809 6.9313C15.5299 6.95548 15.8647 6.97867 16.1841 7.0024C16.4358 7.0211 16.5617 7.03046 16.6531 6.95899C16.7444 6.88753 16.7647 6.76878 16.8053 6.53129C16.8799 6.09453 16.9314 5.6178 16.934 5.1518C16.9389 4.2894 16.7748 3.65138 16.4907 3.30522C16.3563 3.14134 16.2034 3.06392 15.9665 3.02636ZM16.625 12.875C17.7296 12.875 18.625 13.7704 18.625 14.875C18.625 15.9796 17.7296 16.875 16.625 16.875C15.5204 16.875 14.625 15.9796 14.625 14.875C14.625 13.7704 15.5204 12.875 16.625 12.875Z',
  d7: 'M7.125 12.875C7.67728 12.875 8.125 13.3227 8.125 13.875L8.125 16.875H11.125C11.6773 16.875 12.125 17.3227 12.125 17.875C12.125 18.4273 11.6773 18.875 11.125 18.875H8.125V21.875C8.125 22.4273 7.67729 22.875 7.125 22.875C6.57272 22.875 6.125 22.4273 6.125 21.875V18.875H3.125C2.57272 18.875 2.125 18.4273 2.125 17.875C2.125 17.3227 2.57272 16.875 3.125 16.875H6.125L6.125 13.875C6.125 13.3227 6.57272 12.875 7.125 12.875Z',
  d8: 'M4.41249 3.01245C3.14362 3.38901 2.375 4.556 2.375 5.77614V14.9859C2.375 15.0873 2.375 15.138 2.38103 15.1676C2.41065 15.3132 2.49736 15.3915 2.64515 15.4063C2.67523 15.4093 2.73997 15.4028 2.86944 15.3896C2.95346 15.3811 3.03872 15.3767 3.125 15.3767H4.025C4.30784 15.3767 4.44926 15.3767 4.53713 15.2888C4.625 15.201 4.625 15.0596 4.625 14.7767V13.8767C4.625 12.496 5.74429 11.3767 7.125 11.3767C8.50571 11.3767 9.625 12.496 9.625 13.8767V14.7767C9.625 15.0596 9.625 15.201 9.71287 15.2888C9.80074 15.3767 9.94216 15.3767 10.225 15.3767H11.125C12.5057 15.3767 13.625 16.496 13.625 17.8767C13.625 19.2574 12.5057 20.3767 11.125 20.3767H10.225C9.94216 20.3767 9.80074 20.3767 9.71287 20.4646C9.625 20.5524 9.625 20.6939 9.625 20.9767V21.1496C9.625 21.3863 9.625 21.5047 9.69424 21.588C9.76349 21.6713 9.87886 21.6929 10.1096 21.7359C11.81 22.0529 13.4935 22.2756 15.0629 22.4289C16.3513 22.5549 17.467 22.6639 18.3193 22.6135C19.2223 22.5602 19.989 22.3316 20.6472 21.7301C21.3128 21.1219 21.6068 20.3471 21.744 19.4161C21.875 18.5269 21.875 17.398 21.875 16.0044V13.88C21.875 12.5211 21.875 11.4308 21.7684 10.5743C21.6584 9.69115 21.4237 8.94312 20.8679 8.34366C20.4347 7.87644 19.876 7.5968 19.2311 7.41436C18.9455 7.33356 18.8027 7.29316 18.7413 7.19734C18.6799 7.10152 18.7022 6.95936 18.7467 6.67504C18.8215 6.19671 18.8719 5.67955 18.8749 5.16205C18.8804 4.17689 18.7163 2.99967 18.012 2.14128C17.0516 0.970784 15.6175 1.09642 14.7933 1.16863C9.91912 1.58254 6.36472 2.4331 4.41249 3.01245ZM14.8662 3.04421C15.3467 3.0034 15.683 2.98142 15.9665 3.02636C16.2034 3.06392 16.3563 3.14134 16.4907 3.30522C16.7748 3.65138 16.9389 4.2894 16.934 5.1518C16.9314 5.6178 16.8799 6.09453 16.8053 6.53129C16.7647 6.76878 16.7444 6.88753 16.6531 6.95899C16.5617 7.03046 16.4358 7.0211 16.1841 7.0024C15.8647 6.97867 15.5299 6.95548 15.1809 6.9313C10.9667 6.63928 7.35233 6.08772 5.00227 5.57411C4.71175 5.51061 4.56649 5.47887 4.52899 5.28491C4.49149 5.09095 4.5771 5.03275 4.7483 4.91634C4.82174 4.86641 4.90099 4.82845 4.98308 4.80409C6.82086 4.2587 10.1434 3.44528 14.8662 3.04421Z',
  d9: 'M18.625 14.875C18.625 13.7704 17.7296 12.875 16.625 12.875C15.5204 12.875 14.625 13.7704 14.625 14.875C14.625 15.9796 15.5204 16.875 16.625 16.875C17.7296 16.875 18.625 15.9796 18.625 14.875Z',
  d10: 'M3 6C5.1047 6.62133 11.5 8.00002 21 8.00002V22C18.4978 22 16.1873 22 14 21.863M3 6V12M3 6C3 6 7 2 18 2V7.79215',
  d11: 'M4.5 15.5001H2.25V5.68934C3.78186 4.48481 4.8484 3.82901 6.08396 3.30877C8.55715 2.26743 12.4068 1.25 18 1.25H18.75V7.22374C19.4788 7.24087 20.229 7.25002 21 7.25002H21.75V22.75H20.9037C16.7394 22.75 13.0291 22.7501 9.5 22.0778V20.5001H12.5V15.5001H9.5V12.5001H4.5L4.5 15.5001ZM6.69552 5.29514C6.25735 5.48156 5.87153 5.66708 5.53516 5.84406C7.967 6.3476 11.7968 6.9327 16.7798 7.15647V3.39374C12.0235 3.50529 8.76617 4.41414 6.69552 5.29514ZM4.5 20.5001V20.565C4.45038 20.5435 4.40076 20.5219 4.35116 20.5001H4.5ZM16.5 13C17.6046 13 18.5 13.8954 18.5 15C18.5 16.1046 17.6046 17 16.5 17C15.3954 17 14.5 16.1046 14.5 15C14.5 13.8954 15.3954 13 16.5 13Z',
  d12: 'M6 19V22H8V19H11V17H8L8 14H6L6 17H3V19H6Z',
};

export const IconWalletAdd02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-add-02-stroke-rounded IconWalletAdd02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconWalletAdd02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-add-02-duotone-rounded IconWalletAdd02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconWalletAdd02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-add-02-twotone-rounded IconWalletAdd02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWalletAdd02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-add-02-solid-rounded IconWalletAdd02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWalletAdd02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-add-02-bulk-rounded IconWalletAdd02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWalletAdd02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-add-02-stroke-sharp IconWalletAdd02StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWalletAdd02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-add-02-solid-sharp IconWalletAdd02SolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfWalletAdd02: TheIconSelfPack = {
  name: 'WalletAdd02',
  StrokeRounded: IconWalletAdd02StrokeRounded,
  DuotoneRounded: IconWalletAdd02DuotoneRounded,
  TwotoneRounded: IconWalletAdd02TwotoneRounded,
  SolidRounded: IconWalletAdd02SolidRounded,
  BulkRounded: IconWalletAdd02BulkRounded,
  StrokeSharp: IconWalletAdd02StrokeSharp,
  SolidSharp: IconWalletAdd02SolidSharp,
};