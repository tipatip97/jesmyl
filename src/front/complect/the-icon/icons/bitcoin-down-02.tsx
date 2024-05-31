import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11 9C7.41015 9 4.5 11.9101 4.5 15.5C4.5 19.0898 7.41015 22 11 22C14.5898 22 17.5 19.0899 17.5 15.5C17.5 11.9101 14.5898 9 11 9Z',
  d2: 'M20 8.5L15.4116 4.29397C14.7437 3.68176 14.4098 3.37565 14.0084 3.38437C13.6069 3.3931 13.2866 3.71342 12.6459 4.35406L11.6803 5.31973C11.116 5.88402 10.8338 6.16617 10.4728 6.19872C10.1118 6.23127 9.78377 6.00415 9.12764 5.5499L4 2M20 8.5H16.5M20 8.5V5.5',
  d3: 'M9.4375 18.1667L9.4375 12.8333M11 12.8333V11.5M11 19.5V18.1667M9.4375 15.5H12.5625M12.5625 15.5C13.0803 15.5 13.5 15.9477 13.5 16.5V17.1667C13.5 17.719 13.0803 18.1667 12.5625 18.1667H8.5M12.5625 15.5C13.0803 15.5 13.5 15.0523 13.5 14.5V13.8333C13.5 13.281 13.0803 12.8333 12.5625 12.8333H8.5',
  d4: 'M3.42296 1.65553C3.72859 1.22816 4.33423 1.12156 4.7757 1.41743L9.76088 4.75848C10.1002 4.98587 10.2822 5.10585 10.4199 5.17561C10.5424 5.08314 11.6851 3.98864 11.9769 3.70616C12.2566 3.43522 12.5298 3.17069 12.786 2.98053C13.0756 2.76562 13.4486 2.56339 13.9315 2.55323C14.4143 2.54308 14.7961 2.72943 15.095 2.93196C15.3595 3.11117 15.6443 3.36396 15.936 3.62289L18.8056 6.16934V5.48533C18.8056 4.96554 19.2408 4.54417 19.7778 4.54417C20.3147 4.54417 20.75 4.96554 20.75 5.48533V8.30883C20.75 8.82863 20.3147 9.25 19.7778 9.25H16.375C15.8381 9.25 15.4028 8.82863 15.4028 8.30883C15.4028 7.78904 15.8381 7.36767 16.375 7.36767H17.2784L14.6599 5.04404C14.3155 4.73839 14.1265 4.57327 13.9802 4.47417L13.9745 4.47036L13.969 4.4744C13.8273 4.57956 13.6459 4.75247 13.3155 5.07232L12.3438 6.01297L12.3438 6.01299C12.0982 6.25089 11.8551 6.48624 11.6258 6.65927C11.3651 6.85606 11.0341 7.04265 10.6026 7.08031C10.1712 7.11797 9.81104 6.99171 9.51809 6.84326C9.26052 6.71273 8.97793 6.52325 8.69228 6.33172L8.69227 6.33172L3.66891 2.96507C3.22744 2.6692 3.11732 2.0829 3.42296 1.65553Z',
  d5: 'M11 22.75C15.0041 22.75 18.25 19.5041 18.25 15.5C18.25 11.4959 15.0041 8.25 11 8.25C6.99594 8.25 3.75 11.4959 3.75 15.5C3.75 19.5041 6.99594 22.75 11 22.75ZM11.75 11.5C11.75 11.0858 11.4142 10.75 11 10.75C10.5858 10.75 10.25 11.0858 10.25 11.5V12.0833H8.5C8.08579 12.0833 7.75 12.4191 7.75 12.8333C7.75 13.2475 8.08579 13.5833 8.5 13.5833H8.6875L8.6875 17.4167H8.5C8.08579 17.4167 7.75 17.7525 7.75 18.1667C7.75 18.5809 8.08579 18.9167 8.5 18.9167H10.25V19.5C10.25 19.9142 10.5858 20.25 11 20.25C11.4142 20.25 11.75 19.9142 11.75 19.5V18.9167H12.5625C13.5393 18.9167 14.25 18.0868 14.25 17.1667V16.5C14.25 16.1376 14.1398 15.7892 13.9465 15.5C14.1398 15.2108 14.25 14.8624 14.25 14.5V13.8333C14.25 12.9132 13.5393 12.0833 12.5625 12.0833H11.75V11.5ZM10.1875 14.75V13.5833H12.5625C12.6212 13.5833 12.75 13.6489 12.75 13.8333V14.5C12.75 14.6844 12.6212 14.75 12.5625 14.75H10.1875ZM10.1875 16.25H12.5625C12.6212 16.25 12.75 16.3156 12.75 16.5V17.1667C12.75 17.3511 12.6212 17.4167 12.5625 17.4167H10.1875L10.1875 16.25Z',
  d6: 'M18.25 15.5C18.25 19.5041 15.0041 22.75 11 22.75C6.99594 22.75 3.75 19.5041 3.75 15.5C3.75 11.4959 6.99594 8.25 11 8.25C15.0041 8.25 18.25 11.4959 18.25 15.5Z',
  d7: 'M11 10.75C11.4142 10.75 11.75 11.0858 11.75 11.5V12.0833H12.5625C13.5393 12.0833 14.25 12.9132 14.25 13.8333V14.5C14.25 14.8624 14.1398 15.2108 13.9465 15.5C14.1398 15.7892 14.25 16.1376 14.25 16.5V17.1667C14.25 18.0868 13.5393 18.9167 12.5625 18.9167H11.75V19.5C11.75 19.9142 11.4142 20.25 11 20.25C10.5858 20.25 10.25 19.9142 10.25 19.5V18.9167H8.5C8.08579 18.9167 7.75 18.5809 7.75 18.1667C7.75 17.7525 8.08579 17.4167 8.5 17.4167H8.6875L8.6875 13.5833H8.5C8.08579 13.5833 7.75 13.2475 7.75 12.8333C7.75 12.4191 8.08579 12.0833 8.5 12.0833H10.25V11.5C10.25 11.0858 10.5858 10.75 11 10.75ZM10.1875 13.5833V14.75H12.5625C12.6212 14.75 12.75 14.6844 12.75 14.5V13.8333C12.75 13.6489 12.6212 13.5833 12.5625 13.5833H10.1875ZM12.5625 16.25H10.1875L10.1875 17.4167H12.5625C12.6212 17.4167 12.75 17.3511 12.75 17.1667V16.5C12.75 16.3156 12.6212 16.25 12.5625 16.25Z',
  d8: 'M10.9747 9C7.39773 9 4.49805 11.9101 4.49805 15.5C4.49805 19.0898 7.39773 22 10.9747 22C14.5516 22 17.4513 19.0899 17.4513 15.5C17.4513 11.9101 14.5516 9 10.9747 9Z',
  d9: 'M9.41802 18.1667V12.8333M10.9749 12.8333V11.5M10.9749 19.5V18.1667M9.41802 15.5H12.5318M12.5318 15.5C13.0477 15.5 13.4659 15.9477 13.4659 16.5V17.1667C13.4659 17.719 13.0477 18.1667 12.5318 18.1667H8.48389M12.5318 15.5C13.0477 15.5 13.4659 15.0523 13.4659 14.5V13.8333C13.4659 13.281 13.0477 12.8333 12.5318 12.8333H8.48389',
  d10: 'M3.99707 1.99805L10.4179 6.49144C10.4578 6.51937 10.5119 6.51429 10.546 6.47944L13.89 3.05827C13.9276 3.01984 13.9887 3.01815 14.0283 3.05447L19.9993 8.48257M15.9404 8.52966H20.0002L19.9199 4.49548',
  d11: 'M15.7697 9.57227H20.75V4.57227H18.7579V6.29903L14.4506 2.33511C14.0575 1.97333 13.4503 1.98658 13.0733 2.36516L10.1749 5.27502L4.38394 1.25007L3.25 2.89446L9.72439 7.39446C10.1202 7.66955 10.6553 7.62111 10.9957 7.27937L13.8075 4.4564L17.1933 7.57227H15.7697V9.57227Z',
  d12: 'M11 22.75C15.0041 22.75 18.25 19.5041 18.25 15.5C18.25 11.4959 15.0041 8.25 11 8.25C6.99594 8.25 3.75 11.4959 3.75 15.5C3.75 19.5041 6.99594 22.75 11 22.75ZM11.75 12.0833V10.75H10.25V12.0833H7.75V13.5833H8.6875L8.6875 17.4167H7.75V18.9167H10.25V20.25H11.75V18.9167H12.5625C13.5393 18.9167 14.25 18.0868 14.25 17.1667V16.5C14.25 16.1376 14.1398 15.7892 13.9465 15.5C14.1398 15.2108 14.25 14.8624 14.25 14.5V13.8333C14.25 12.9132 13.5393 12.0833 12.5625 12.0833H11.75ZM10.1875 14.75V13.5833H12.5625C12.6212 13.5833 12.75 13.6489 12.75 13.8333V14.5C12.75 14.6844 12.6212 14.75 12.5625 14.75H10.1875ZM10.1875 16.25H12.5625C12.6212 16.25 12.75 16.3156 12.75 16.5V17.1667C12.75 17.3511 12.6212 17.4167 12.5625 17.4167H10.1875L10.1875 16.25Z',
} as const;

export const IconBitcoinDown02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-down-02-stroke-rounded IconBitcoinDown02StrokeRounded"
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

export const IconBitcoinDown02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-down-02-duotone-rounded IconBitcoinDown02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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

export const IconBitcoinDown02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-down-02-twotone-rounded IconBitcoinDown02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconBitcoinDown02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-down-02-solid-rounded IconBitcoinDown02SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinDown02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-down-02-bulk-rounded IconBitcoinDown02BulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconBitcoinDown02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-down-02-stroke-sharp IconBitcoinDown02StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinDown02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-down-02-solid-sharp IconBitcoinDown02SolidSharp"
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

export const iconPackOfBitcoinDown02: TheIconSelfPack = {
  name: 'BitcoinDown02',
  StrokeRounded: IconBitcoinDown02StrokeRounded,
  DuotoneRounded: IconBitcoinDown02DuotoneRounded,
  TwotoneRounded: IconBitcoinDown02TwotoneRounded,
  SolidRounded: IconBitcoinDown02SolidRounded,
  BulkRounded: IconBitcoinDown02BulkRounded,
  StrokeSharp: IconBitcoinDown02StrokeSharp,
  SolidSharp: IconBitcoinDown02SolidSharp,
};