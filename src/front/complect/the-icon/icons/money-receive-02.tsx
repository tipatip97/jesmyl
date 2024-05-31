import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18 5.44232C18 5.44232 20 4.43881 21.241 5.45484C21.443 5.6182 21.6952 5.94158 21.8059 6.1793C22 6.59611 22 7.0003 22 7.80867V18.8176C22 19.8241 20.96 20.5154 20 20.2907C19.0803 20.0754 18.0659 19.9561 17 19.9561C15.0829 19.9561 13.3325 20.342 12 20.9781C10.6675 21.6141 8.91707 22.0001 7 22.0001C5.93408 22.0001 4.91969 21.8808 4 21.6655C3.4088 21.5271 3.11319 21.4579 2.75898 21.1715C2.55696 21.0081 2.30483 20.6847 2.19412 20.447C2 20.0302 2 19.626 2 18.8176V7.80867C2 6.80219 3.04003 6.1109 4 6.33561C4.77473 6.51696 5.61667 6.63021 6.5 6.6614',
  d2: 'M14.5 13.5C14.5 14.8807 13.3807 16 12 16C10.6193 16 9.5 14.8807 9.5 13.5C9.5 12.1193 10.6193 11 12 11C13.3807 11 14.5 12.1193 14.5 13.5Z',
  d3: 'M5.5 14.5L5.5 14.509',
  d4: 'M18.5 12.4922L18.5 12.5012',
  d5: 'M9.5 5.5C9.99153 6.0057 11.2998 8 12 8M14.5 5.5C14.0085 6.0057 12.7002 8 12 8M12 8V2',
  d6: 'M7 22C8.91707 22 10.6675 21.6224 12 21C13.3325 20.3776 15.0829 20 17 20C18.0659 20 19.0803 20.1167 20 20.3274C20.96 20.5473 22 19.8709 22 18.886V8.11397C22 6.62036 21.5817 5.68968 20 5.3274C19.0803 5.11675 18.0659 5 17 5C15.0829 5 13.3325 5.37764 12 6C10.6675 6.62236 8.91707 7 7 7C5.93408 7 4.91969 6.88325 4 6.6726C3.04003 6.45273 2 7.12914 2 8.11397V18.886C2 20.4264 2.49957 21.3289 4 21.6726C4.91969 21.8833 5.93408 22 7 22ZM12 16C13.3807 16 14.5 14.8807 14.5 13.5C14.5 12.1193 13.3807 11 12 11C10.6193 11 9.5 12.1193 9.5 13.5C9.5 14.8807 10.6193 16 12 16Z',
  d7: 'M7.71379 7.39543C7.7808 7.42866 7.83177 7.49979 7.9337 7.64205C8.35549 8.23068 8.94117 8.902 9.30058 9.2714C9.52246 9.49945 9.81757 9.77839 10.1635 10.0164C10.4464 10.211 11.108 10.625 11.9998 10.625C12.8916 10.625 13.5532 10.211 13.8361 10.0164C14.182 9.77839 14.4771 9.49945 14.699 9.2714C15.1439 8.81412 15.9523 7.86677 16.3339 7.24115C16.4066 7.12194 16.7896 6.49378 16.7485 5.65686C16.7412 5.5088 16.8518 5.375 17 5.375C18.1198 5.375 19.1905 5.49757 20.1674 5.72133C21.0845 5.93137 21.7825 6.33717 22.2218 7.01245C22.6428 7.65953 22.75 8.44212 22.75 9.23897V19.011C22.75 20.5782 21.159 21.4873 19.8326 21.1835C18.9701 20.9859 18.012 20.875 17 20.875C15.1744 20.875 13.5352 21.2357 12.3174 21.8045C10.8702 22.4805 9.00849 22.875 7 22.875C5.88016 22.875 4.80949 22.7524 3.83255 22.5287C2.95689 22.3281 2.26524 21.9361 1.81644 21.2738C1.38242 20.6332 1.25 19.8466 1.25 19.011V9.23897C1.25 7.67178 2.841 6.76272 4.16745 7.06653C5.02989 7.26407 5.988 7.375 7 7.375C7.131 7.375 7.26104 7.37314 7.39003 7.36948C7.56119 7.36463 7.64677 7.3622 7.71379 7.39543ZM12 17.125C13.6569 17.125 15 15.7819 15 14.125C15 12.4681 13.6569 11.125 12 11.125C10.3431 11.125 9 12.4681 9 14.125C9 15.7819 10.3431 17.125 12 17.125ZM5.5 14.125C6.05228 14.125 6.5 14.5727 6.5 15.125V15.134C6.5 15.6863 6.05228 16.134 5.5 16.134C4.94772 16.134 4.5 15.6863 4.5 15.134V15.125C4.5 14.5727 4.94772 14.125 5.5 14.125ZM18.5 12.1172C19.0523 12.1172 19.5 12.5649 19.5 13.1172V13.1262C19.5 13.6785 19.0523 14.1262 18.5 14.1262C17.9477 14.1262 17.5 13.6785 17.5 13.1262V13.1172C17.5 12.5649 17.9477 12.1172 18.5 12.1172Z',
  d8: 'M13.0059 2.125C13.0059 1.57272 12.5581 1.125 12.0059 1.125C11.4536 1.125 11.0059 1.57272 11.0059 2.125L11.0059 4.62504L10.4116 4.62502C10.236 4.62489 10.0203 4.62474 9.84387 4.64681L9.84053 4.64723C9.71408 4.663 9.13804 4.73483 8.86368 5.30043C8.58872 5.86725 8.89065 6.36739 8.95597 6.4756L8.95841 6.47963C9.05062 6.63265 9.18477 6.80353 9.29511 6.94408L9.31885 6.97433C9.61348 7.35015 9.99545 7.83437 10.3759 8.22538C10.5657 8.42049 10.783 8.62172 11.0139 8.78057C11.2191 8.92177 11.5693 9.12504 12 9.12504C12.4307 9.12504 12.7809 8.92177 12.9861 8.78057C13.217 8.62172 13.4343 8.42049 13.6241 8.22538C14.0046 7.83437 14.3865 7.35015 14.6812 6.97433L14.7049 6.94409C14.8152 6.80353 14.9494 6.63265 15.0416 6.47963L15.044 6.47559C15.1093 6.36739 15.4113 5.86725 15.1363 5.30043C14.862 4.73483 14.2859 4.66299 14.1595 4.64723L14.1561 4.64681C13.9797 4.62474 13.764 4.62489 13.5884 4.62502L13.0059 4.62504L13.0059 2.125Z',
  d9: 'M7.9337 7.64205C7.83177 7.49979 7.7808 7.42866 7.71379 7.39543C7.64677 7.3622 7.56119 7.36463 7.39003 7.36948C7.26104 7.37314 7.131 7.375 7 7.375C5.988 7.375 5.02989 7.26407 4.16745 7.06653C2.841 6.76272 1.25 7.67178 1.25 9.23897V19.011C1.25 19.8466 1.38242 20.6332 1.81644 21.2738C2.26524 21.9361 2.95689 22.3281 3.83255 22.5287C4.80949 22.7524 5.88016 22.875 7 22.875C9.00849 22.875 10.8702 22.4805 12.3174 21.8045C13.5352 21.2357 15.1744 20.875 17 20.875C18.012 20.875 18.9701 20.9859 19.8326 21.1835C21.159 21.4873 22.75 20.5782 22.75 19.011V9.23897C22.75 8.44212 22.6428 7.65953 22.2218 7.01245C21.7825 6.33717 21.0845 5.93137 20.1674 5.72133C19.1905 5.49757 18.1198 5.375 17 5.375C16.8518 5.375 16.7412 5.5088 16.7485 5.65686C16.7896 6.49378 16.4066 7.12194 16.3339 7.24115C15.9523 7.86677 15.1439 8.81412 14.699 9.2714C14.4771 9.49945 14.182 9.77839 13.8361 10.0164C13.5532 10.211 12.8916 10.625 11.9998 10.625C11.108 10.625 10.4464 10.211 10.1635 10.0164C9.81757 9.77839 9.52246 9.49945 9.30058 9.2714C8.94117 8.902 8.35549 8.23068 7.9337 7.64205Z',
  d10: 'M12 17.125C13.6569 17.125 15 15.7819 15 14.125C15 12.4681 13.6569 11.125 12 11.125C10.3431 11.125 9 12.4681 9 14.125C9 15.7819 10.3431 17.125 12 17.125Z',
  d11: 'M5.5 14.125C6.05228 14.125 6.5 14.5727 6.5 15.125V15.134C6.5 15.6863 6.05228 16.134 5.5 16.134C4.94772 16.134 4.5 15.6863 4.5 15.134V15.125C4.5 14.5727 4.94772 14.125 5.5 14.125Z',
  d12: 'M19.5 13.1172C19.5 12.5649 19.0523 12.1172 18.5 12.1172C17.9477 12.1172 17.5 12.5649 17.5 13.1172V13.1262C17.5 13.6785 17.9477 14.1262 18.5 14.1262C19.0523 14.1262 19.5 13.6785 19.5 13.1262V13.1172Z',
  d13: 'M18 5.03711C20.4362 5.21812 22 6.00002 22 6.00002V21C22 21 20 20 17 20C15.0829 20 13.3325 20.3777 12 21C10.6675 21.6224 8.91707 22 7 22C5.93408 22 4.5 22 2 21V6.00002C3.79829 6.71933 5.04506 6.92123 6 6.9779',
  d14: 'M9.5 5.5L12 8L14.5 5.5M12 2V7.61752',
  d15: 'M12.0003 9.93182L16.9751 4.95695L16.7699 4.75173C16.8464 4.75058 16.9231 4.75 17 4.75C18.5827 4.75 19.9028 5.01364 20.831 5.27886C21.2956 5.41159 21.6636 5.54516 21.9192 5.64739C22.047 5.69853 22.1469 5.7419 22.2169 5.7735L22.75 6.03647V22.7135L21.3621 22.0401C21.1489 21.9548 20.8294 21.8384 20.419 21.7211C19.5972 21.4864 18.4173 21.25 17 21.25C15.1744 21.25 13.5352 21.6107 12.3174 22.1795C10.8702 22.8555 9.00849 23.25 7 23.25C5.87882 23.25 4.34095 23.2442 1.72146 22.1964L1.25 22.0078V5.39223L2.27854 5.80364C4.64464 6.75008 5.97319 6.75004 6.98161 6.75L7 6.75C7.59222 6.75 8.16482 6.71204 8.70977 6.64133L12.0003 9.93182ZM12 10.75C10.2051 10.75 8.75 12.2051 8.75 14C8.75 15.7949 10.2051 17.25 12 17.25C13.7949 17.25 15.25 15.7949 15.25 14C15.25 12.2051 13.7949 10.75 12 10.75ZM6.5 14V16.009H4.5V14H6.5ZM19.5 14.0012V11.9922H17.5V14.0012H19.5Z',
  d16: 'M12.0001 8.16406L15.2072 4.95696L13.793 3.54274L13.0001 4.33564V0.749849L11.0001 0.749849V4.33564L10.2072 3.54274L8.79297 4.95696L12.0001 8.16406Z',
} as const;

export const IconMoneyReceive02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-receive-02-stroke-rounded IconMoneyReceive02StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconMoneyReceive02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-receive-02-duotone-rounded IconMoneyReceive02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconMoneyReceive02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-receive-02-twotone-rounded IconMoneyReceive02TwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyReceive02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-receive-02-solid-rounded IconMoneyReceive02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyReceive02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-receive-02-bulk-rounded IconMoneyReceive02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyReceive02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-receive-02-stroke-sharp IconMoneyReceive02StrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyReceive02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-receive-02-solid-sharp IconMoneyReceive02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMoneyReceive02: TheIconSelfPack = {
  name: 'MoneyReceive02',
  StrokeRounded: IconMoneyReceive02StrokeRounded,
  DuotoneRounded: IconMoneyReceive02DuotoneRounded,
  TwotoneRounded: IconMoneyReceive02TwotoneRounded,
  SolidRounded: IconMoneyReceive02SolidRounded,
  BulkRounded: IconMoneyReceive02BulkRounded,
  StrokeSharp: IconMoneyReceive02StrokeSharp,
  SolidSharp: IconMoneyReceive02SolidSharp,
};